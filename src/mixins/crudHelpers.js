export default {
  computed: {
    isAllSelected() {
      // Forzar dependencia en selectedItems.length para que se recalcule cuando cambie
      const selectedCount = this.selectedItems ? this.selectedItems.length : 0;
      
      if (!this.itemsList || this.itemsList.length === 0) {
        return false;
      }
      
      // Si no hay items seleccionados, retornar false
      if (selectedCount === 0) {
        return false;
      }
      
      // Verificar que todos los items de la lista actual estén seleccionados
      // Usar Boolean() para manejar valores undefined/null
      const allSelected = this.itemsList.every(item => Boolean(item.selected) === true);
      
      return allSelected;
    }
  },
  methods: {
    onRowHover(item, itemIndex) {
      if (this.selectHover) {
        this.item = this.items[itemIndex];
        this.selectItem();
        this.onSelect();
      }
    },

    onRowClick(item, itemIndex) {
      if (this.selectClick) {
        this.item = this.items[itemIndex];
        this.selectItem();
        this.onSelect();
      }
    },

    onSort() {
      let event = {};
      let i =
        1 +
        (this.pagination.current_page * this.pagination.per_page -
          this.pagination.per_page);
      this.items.forEach((item, index) => {
        item[this.orderProp] = i;
        i++;
      });
      this.$emit("sort", event);
    },

    onCheckSelect(value, item) {
      console.debug("ON CHECK SELECT", value, item);
      if (value) {
        this.item = item;
        this.selectItem();
      } else {
        this.unSelectItem(item);
      }
      this.onSelect();
      console.debug("Selected Items", this.selectedItems);
    },

    toggleAll(value) {
      // b-form-checkbox emite el valor booleano directamente en el evento change
      // El valor puede venir directamente como booleano o como evento del DOM
      const checked = typeof value === 'boolean' ? value : (value && value.target ? value.target.checked : value);
      
      if (checked) {
        // Seleccionar todos los items de la lista actual (itemsList)
        this.itemsList.forEach((item) => {
          this.$set(item, 'selected', true);
          // Agregar a selectedItems si no está ya
          if (!this.selectedItems.find((si) => si.id === item.id)) {
            this.selectedItems.push(item);
          }
        });
      } else {
        // Deseleccionar todos
        this.selectedItems.forEach(
          (item) => this.$set(item, 'selected', false)
        );
        this.items.forEach(
          (item) => this.$set(item, 'selected', false)
        );
        this.itemsList.forEach(
          (item) => this.$set(item, 'selected', false)
        );
        // Usar splice para mantener la referencia del array y reactividad con provide/inject
        this.selectedItems.splice(0, this.selectedItems.length);
      }

      this.onSelect();

      console.debug("toggle all", this.selectedItems);
      // Forzar actualización inmediata y en el siguiente tick
      this.$forceUpdate();
      this.$nextTick(() => {
        this.$forceUpdate();
      });
    },

    unSelectItem(item) {
      this.$set(item, 'selected', false);

      // Filtrar el array y reasignarlo para asegurar reactividad
      const filtered = this.selectedItems.filter(
        (e) => e.id != item.id
      );
      // Vaciar el array y luego agregar los elementos filtrados para mantener la referencia
      this.selectedItems.splice(0, this.selectedItems.length, ...filtered);
      
      // Forzar actualización para que el computed isAllSelected se recalcule
      this.$forceUpdate();
    },

    selectItem() {
      let sitem = this.selectedItems.find((e) => e.id == this.item.id);
      if (sitem) {
        this.$set(this.item, 'selected', false);
        const filtered = this.selectedItems.filter(
          (e) => e.id != this.item.id
        );
        // Usar splice para mantener la referencia del array
        this.selectedItems.splice(0, this.selectedItems.length, ...filtered);
      } else {
        this.$set(this.item, 'selected', true);
        this.selectedItems.push(this.item);
      }
      // Forzar actualización para que el computed isAllSelected se recalcule
      this.$forceUpdate();
    },

    getSelectedItems() {
      return this.selectedItems;
    },

    clearSelection() {
      // Limpiar todas las selecciones
      this.selectedItems.forEach(
        (item) => this.$set(item, 'selected', false)
      );
      this.items.forEach(
        (item) => this.$set(item, 'selected', false)
      );
      this.itemsList.forEach(
        (item) => this.$set(item, 'selected', false)
      );
      // Vaciar el array manteniendo la referencia para reactividad con provide/inject
      this.selectedItems.splice(0, this.selectedItems.length);
      this.onSelect();
      // Forzar actualización inmediata y en el siguiente tick para asegurar que todo se actualice
      this.$forceUpdate();
      this.$nextTick(() => {
        this.$forceUpdate();
      });
    },

    onSelect() {
      this.$emit("select", this.item);
      this.$emit("selectItems", this.selectedItems);
    },

    showItem(id, itemIndex = null) {
      let item;
      if (itemIndex == null) {
        item = this.items.find((it) => it.id == id);
      } else {
        item = this.items[itemIndex];
      }
      
      if (!item) {
        console.warn('Item not found for showItem');
        return;
      }
      
      // Hacer copia profunda del objeto para asegurar reactividad
      const itemCopy = JSON.parse(JSON.stringify(item));
      
      if (this.useVuexORM && !this.vuexLocalforage) {
        const modelInstance = new this.model(itemCopy);
        // Usar $set para cada propiedad para asegurar reactividad
        Object.keys(modelInstance).forEach(key => {
          this.$set(this.item, key, modelInstance[key]);
        });
        // Eliminar propiedades que ya no existen
        Object.keys(this.item).forEach(key => {
          if (!(key in modelInstance)) {
            this.$delete(this.item, key);
          }
        });
      } else {
        // Usar $set para cada propiedad para asegurar reactividad
        Object.keys(itemCopy).forEach(key => {
          this.$set(this.item, key, itemCopy[key]);
        });
        // Eliminar propiedades que ya no existen
        Object.keys(this.item).forEach(key => {
          if (!(key in itemCopy)) {
            this.$delete(this.item, key);
          }
        });
      }
      
      // Forzar actualización para asegurar que los cambios se reflejen
      this.$forceUpdate();
      
      this.onSelect();
      this.$nextTick(() => {
        this.$forceUpdate();
      this.$bvModal.show("modal-show-item-" + this.modelName);
      });
    },

    createItem() {
      // Hacer copia profunda del objeto para asegurar reactividad
      const itemCopy = JSON.parse(JSON.stringify(this.itemDefault));
      
      if (this.useVuexORM && !this.vuexLocalforage) {
        const modelInstance = new this.model(itemCopy);
        // Usar $set para cada propiedad para asegurar reactividad
        Object.keys(modelInstance).forEach(key => {
          this.$set(this.item, key, modelInstance[key]);
        });
        // Eliminar propiedades que ya no existen
        Object.keys(this.item).forEach(key => {
          if (!(key in modelInstance)) {
            this.$delete(this.item, key);
          }
        });
      } else {
        // Usar $set para cada propiedad para asegurar reactividad
        Object.keys(itemCopy).forEach(key => {
          this.$set(this.item, key, itemCopy[key]);
        });
        // Eliminar propiedades que ya no existen
        Object.keys(this.item).forEach(key => {
          if (!(key in itemCopy)) {
            this.$delete(this.item, key);
          }
        });
      }
      
      // Forzar actualización para asegurar que los cambios se reflejen
      this.$forceUpdate();
      
      this.onSelect();
      this.$nextTick(() => {
        this.$forceUpdate();
      this.$bvModal.show("modal-form-item-" + this.modelName);
      });
    },

    updateItem(id, itemIndex = null) {
      let item;
      if (itemIndex == null) {
        item = this.items.find((it) => it.id == id);
      } else {
        item = this.items[itemIndex];
      }
      
      if (!item) {
        console.warn('Item not found for updateItem');
        return;
      }
      
      // Hacer copia profunda del objeto para asegurar reactividad
      const itemCopy = JSON.parse(JSON.stringify(item));
      
      if (this.useVuexORM && !this.vuexLocalforage) {
        const modelInstance = new this.model(itemCopy);
        // Usar $set para cada propiedad para asegurar reactividad
        Object.keys(modelInstance).forEach(key => {
          this.$set(this.item, key, modelInstance[key]);
        });
        // Eliminar propiedades que ya no existen
        Object.keys(this.item).forEach(key => {
          if (!(key in modelInstance)) {
            this.$delete(this.item, key);
          }
        });
      } else {
        // Usar $set para cada propiedad para asegurar reactividad
        Object.keys(itemCopy).forEach(key => {
          this.$set(this.item, key, itemCopy[key]);
        });
        // Eliminar propiedades que ya no existen
        Object.keys(this.item).forEach(key => {
          if (!(key in itemCopy)) {
            this.$delete(this.item, key);
          }
        });
      }
      
      // Forzar actualización para asegurar que los cambios se reflejen
      this.$forceUpdate();
      
      this.onSelect();
      this.$nextTick(() => {
        this.$forceUpdate();
      this.$bvModal.show("modal-form-item-" + this.modelName);
      });
    },

    removeItem(id, index) {
      this.$bvModal
        .msgBoxConfirm(this.messageRemoveConfirm, {
          size: "sm",
          buttonSize: "sm",
          okVariant: "danger",
          okTitle: this.messageRemove,
          cancelTitle: "NO",
          centered: true,
        })
        .then((value) => {
          if (value) {
            this.deleteItem(id, index);
          }
        })
        .catch((error) => {
          this.toastError(error);
          this.loading = false;
        });
    },

    confirmBulkDelete() {
      this.$bvModal
        .msgBoxConfirm(this.messageRemoveBulkConfirm, {
          size: "sm",
          buttonSize: "sm",
          okVariant: "danger",
          okTitle: this.messageRemove,
          cancelTitle: "NO",
          centered: true,
        })
        .then((value) => {
          if (value) {
            this.deleteItemBulk();
          }
        })
        .catch((error) => {
          this.toastError(error);
          this.loading = false;
        });
    },

    toggleDisplayMode() {
      // Mutar la propiedad local _displayMode y el objeto reactivo
      if (this._displayMode == this.displayModes.MODE_TABLE) {
        this._displayMode = this.displayModes.MODE_CARDS;
        if (this.displayModeReactive) {
          this.displayModeReactive.value = this.displayModes.MODE_CARDS;
        }
      } else if (this._displayMode == this.displayModes.MODE_CARDS) {
        this._displayMode = this.displayModes.MODE_TABLE;
        if (this.displayModeReactive) {
          this.displayModeReactive.value = this.displayModes.MODE_TABLE;
        }
      }
    },

    showExportModal() {
      this.$refs["modal-export"].show();
    },

    showImportModal() {
      this.$refs["modal-import"].show();
    },

    onDraggableAdded(event) {
      this.$emit("draggableAdded", event);
    },

    onDraggableChange(event) {
      this.$emit("draggableChange", event);
    },

    onDragEnd(event) {
      // Handle drag end for Kanban
      if (event.added || event.moved) {
        const item = event.item.__vue__.$parent.item || event.item.__vue__.item;
        const newColumn = event.to.parentElement.getAttribute('data-column');
        
        if (item && newColumn) {
          // Update the item's grouped attribute
          item[this.groupedAttribute] = newColumn;
          
          // Save to backend if ajax is enabled
          if (this.ajax) {
            this.saveItem();
          }
          
          this.$emit("draggableChange", event);
        }
      }
    },

    toastError(error) {
      let error_message = "Ha ocurrido un error";

      if (typeof error === "string") {
        error_message = error;
      } else if (error.response) {
        // handle API errors
        if (error.response.status === 401) {
          error_message = "No estás autorizado para realizar esta acción";
        } else if (error.response.status === 404) {
          error_message = "El recurso solicitado no se encontró";
        } else if (error.response.status >= 400 && error.response.status < 500) {
          error_message = "Hubo un problema con la solicitud realizada";
        } else if (error.response.status >= 500) {
          error_message = "El servidor no pudo procesar la solicitud";
        }

        if (error.response.data) {
          if (typeof error.response.data === "object") {
            if (error.response.data.errors) {
              let errors = error.response.data.errors;
              this.responseErrors = errors;
              error_message = Object.values(errors)[0][0];
            } else if (error.response.data.message) {
              error_message = error.response.data.message;
            }
          } else if (typeof error.response.data === "string") {
            error_message = error.response.data;
          }
        }
      } else if (error.request) {
        // handle network errors
        error_message = "No se pudo conectar con el servidor. Verifique su conexión a Internet.";
      } else if (error.message) {
        // handle other errors
        error_message = error.message;
      }

      this.$bvToast.toast(error_message, {
        title: `Error`,
        toaster: "b-toaster-bottom-right",
        variant: "danger",
        solid: true,
        appendToast: true,
      });
    },

    toastSuccess(message) {
      this.$bvToast.toast(message, {
        title: `Listo`,
        toaster: "b-toaster-bottom-right",
        variant: "success",
        solid: true,
        appendToast: true,
      });
    },

    downloadBlobResponse(response, extension = null) {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;

      let contentdisposition = response.headers['content-disposition'];
      let filename = "Export";

      if (contentdisposition) {
        filename = contentdisposition.split('filename=')[1].split('.')[0];
        filename = filename.replace('_', '');
        filename = filename.replace('"', '');
        extension = contentdisposition.split('.')[1].split(';')[0];
        extension = extension.replace('_', '');
        extension = extension.replace('"', '');
      }

      console.debug("DOWNLOAD ", filename, extension);
      link.setAttribute("download", filename + '.' + extension);
      document.body.appendChild(link);
      link.click();
    }
  }
};
