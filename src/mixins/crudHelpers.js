export default {
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
      if (value) {
        this.selectedItems = this.items;

        this.selectedItems.forEach(
          (item) => item.selected = true
        );
      } else {
        this.selectedItems.forEach(
          (item) => item.selected = false
        );
        this.items.forEach(
          (item) => item.selected = false
        );
        this.selectedItems = [];
      }

      this.onSelect();

      console.debug("toggle all", this.selectedItems);
      this.$forceUpdate();
    },

    unSelectItem(item) {
      item.selected = false;

      this.selectedItems = this.selectedItems.filter(
        (e) => e.id != item.id
      );
    },

    selectItem() {
      let sitem = this.selectedItems.find((e) => e.id == this.item.id);
      if (sitem) {
        this.item.selected = false;
        this.selectedItems = this.selectedItems.filter(
          (e) => e.id != this.item.id
        );
      } else {
        this.item.selected = true;
        this.selectedItems.push(this.item);
      }
    },

    getSelectedItems() {
      return this.selectedItems;
    },

    onSelect() {
      this.$emit("select", this.item);
      this.$emit("selectItems", this.selectedItems);
    },

    showItem(id, itemIndex = null) {
      if (itemIndex == null) {
        let item = this.items.find((it) => it.id == id);
        this.item = item;
      } else {
        this.item = this.items[itemIndex];
      }
      this.onSelect();
      this.$bvModal.show("modal-show-item-" + this.modelName);
    },

    createItem() {
      if (this.useVuexORM) {
        if (this.vuexLocalforage) {
          this.item = JSON.parse(JSON.stringify(this.itemDefault));
        } else {
          this.item = new this.model(JSON.parse(JSON.stringify(this.itemDefault)));
        }
      } else {
        this.item = JSON.parse(JSON.stringify(this.itemDefault));
      }
      this.onSelect();
      this.$bvModal.show("modal-form-item-" + this.modelName);
    },

    updateItem(id, itemIndex = null) {
      if (itemIndex == null) {
        let item = this.items.find((it) => it.id == id);
        this.item = item;
      } else {
        this.item = this.items[itemIndex];
      }
      this.onSelect();
      this.$bvModal.show("modal-form-item-" + this.modelName);
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
      if (this.displayMode == this.displayModes.MODE_TABLE)
        this.displayMode = this.displayModes.MODE_CARDS;
      else if (this.displayMode == this.displayModes.MODE_CARDS)
        this.displayMode = this.displayModes.MODE_TABLE;
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
