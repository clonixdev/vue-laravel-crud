import axios from 'axios';

export default {
  methods: {
    async fetchItemsVuex(page = 1, concat = false) {
      this.loading = true;
      this.$emit("beforeFetch", {});

      let result;

      if (this.vuexLocalforage) {
        await this.model.$fetch();
      } else {
        this.model.deleteAll();

        result = await this.model.api().get(this.apiUrl + "/" + this.modelName, {
          dataKey: 'data',
          params: {
            page: page,
            limit: this.pagination.perPage,
            filters: JSON.stringify(this.finalFilters),
          }
        });
      }

      let itemsResult = this.model.query().withAll().get();

      if (itemsResult) {
        this.items = itemsResult;
      }
      console.debug("fetch page vuex ", itemsResult, page, this.items, result);
      this.loading = false;
      this.firstLoad = true;
    },

    fetchItemsLocal() {
      if (this.grouped) {
        this.groupItems(this.models);
      } else {
        this.items = this.models;
      }

      this.pagination.total = this.items.length;
      this.firstLoad = true;
    },

    fetchItems(page = 1, concat = false) {
      this.$emit("beforeFetch", {});
      if (this.useVuexORM) {
        return this.fetchItemsVuex(page, concat);
      }

      if (!this.ajax) {
        return this.fetchItemsLocal(page, concat);
      }

      this.loading = true;
      return axios
        .get(this.apiUrl + "/" + this.modelName, {
          params: {
            page: page,
            limit: this.limit,
            filters: JSON.stringify(this.finalFilters),
          },
        })
        .then((response) => {
          this.makePagination(response.data);
          let items = response.data.data;
          if (this.grouped) {
            this.groupItems(items, concat, this.isSplitGroups);
          } else {
            if (concat) {
              this.items = this.items.concat(items);
            } else {
              this.items = items;
            }
          }

          this.loading = false;
          this.firstLoad = true;
          this.$emit("afterFetch", {});
        })
        .catch((error) => {
          this.toastError(error);
          this.loading = false;
          this.firstLoad = true;
          this.fetchError = true;
        });
    },

    groupItems(items, concat = false, splitGroups = false) {
      const groupedAttribute = this.groupedAttribute;
      const groupLabelPre = this.groupedLabelPre || '';
      const groupLabelAfter = this.groupedLabelAfter || '';
      const itemsWithGroup = [];

      // Usamos un objeto para agrupar los elementos por groupedAttribute
      const groupedMap = items.reduce((acc, item) => {
        const groupKey = item[groupedAttribute] || 'undefined';
        if (!acc[groupKey]) {
          acc[groupKey] = [];
        }
        acc[groupKey].push(item);
        return acc;
      }, {});

      if (splitGroups) {
        // Dividimos los grupos en arrays separados
        this.items = Object.entries(groupedMap).map(([groupKey, groupItems]) => ({
          groupKey,
          groupLabel: groupLabelPre + groupKey + groupLabelAfter,
          items: groupItems,
        }));
      } else {
        // Creamos la estructura agrupada en un solo array
        for (const [groupKey, groupItems] of Object.entries(groupedMap)) {
          itemsWithGroup.push({
            crudgrouplabel: groupLabelPre + groupKey + groupLabelAfter,
            crudgroup: true,
          });
          itemsWithGroup.push(...groupItems);
        }

        // Decidimos si concatenar o reemplazar los items existentes
        if (concat) {
          this.items = this.items.concat(itemsWithGroup);
        } else {
          this.items = itemsWithGroup;
        }
      }
    },

    async saveItemVuex(event = null) {
      console.debug("save item 1", this.item);
      let result;
      let create = false;

      if (this.vuexLocalforage) {
        if (this.markDirty) {
          this.item.dirty = true;
        }

        if (this.item.id) {
          result = await this.model.$create({ data: this.item });
          console.debug("save item 4", this.item, result);
          create = false;
        } else {
          result = await this.model.$create({ data: this.item });
          console.debug("save item 5", this.item, result);
          create = true;
        }
      } else {
        let jsondata = this.item.$toJson();
        console.debug("save item 2", this.item, jsondata);
        if (this.item.id) {
          result = await this.model.api().put(this.apiUrl + "/" + this.modelName + '/' + this.item.id, jsondata);
          create = false;
        } else {
          result = await this.model.api().post(this.apiUrl + "/" + this.modelName, jsondata);
          create = true;
        }

        let responseStatus = result.response.status;
        if (result.response.data.error) {
          this.toastError(result.response.data.error);
          this.loading = false;
          return;
        }

        result.save();
      }

      if (this.refreshAfterSave) this.refresh();
      this.loading = false;
      this.toastSuccess("Elemento Modificado");

      if (this.hideModalAfterSave || ((create && this.hideModalAfterCreate) || (!create && this.hideModalAfterUpdate))) {
        this.$bvModal.hide("modal-form-item-" + this.modelName);
      }
    },

    async saveItemLocal(event = null) {
      const itemSave = JSON.parse(JSON.stringify(this.item));
      if (this.item.id || this.item.index) {
        let itemIndex;

        if (this.item.id) {
          itemIndex = this.items.findIndex(
            (item) => item.id == this.item.id
          );
        } else {
          itemIndex = this.items.findIndex(
            (item) => item.index == this.item.index
          );
        }

        this.items[itemIndex] = itemSave;
        if (this.hideModalAfterSave || this.hideModalAfterUpdate) {
          this.$bvModal.hide("modal-form-item-" + this.modelName);
        }
      } else {
        itemSave.index = this.items.length + 1;
        this.items.push(itemSave);
        if (this.hideModalAfterSave || this.hideModalAfterCreate) {
          this.$bvModal.hide("modal-form-item-" + this.modelName);
        }
      }
      this.toastSuccess("Elemento Modificado");
      this.loading = false;
    },

    async saveItem(event = null) {
      this.loading = true;
      if (this.validate) {
        let validation_result = true;
        let validation_error_message = this.messageDefaultValidationError;
        if (!validation_result) {
          this.toastError(validation_error_message);
          return;
        }
      } else {
        if (event) event.preventDefault();
      }

      if (this.useVuexORM) {
        return this.saveItemVuex(event);
      }

      if (!this.ajax) {
        return this.saveItemLocal(event);
      }

      if (this.item.id) {
        axios
          .put(
            this.apiUrl + "/" + this.modelName + "/" + this.item.id,
            this.item
          )
          .then((response) => {
            if (this.hideModalAfterSave || this.hideModalAfterUpdate) {
              this.$bvModal.hide("modal-form-item-" + this.modelName);
            }
            let itemSv = response.data;
            let itemIndex = this.items.findIndex(
              (item) => item.id == this.item.id
            );
            this.items[itemIndex] = itemSv;
            this.item = itemSv;
            this.loading = false;
            if (this.refreshAfterSave) this.refresh();
            this.toastSuccess("Elemento Modificado");
            this.$emit("itemSaved", { item: this.item });
            this.$emit("itemUpdated", { item: this.item });
          })
          .catch((error) => {
            this.toastError(error);
            this.loading = false;
          });
      } else {
        if (this.createMultipart) {
          const formData = new FormData();
          Object.keys(this.item).forEach((key) => {
            if (this.item[key][0] && this.item[key][0].name) {
              let files = this.item[key];
              for (var x = 0; x < files.length; x++) {
                formData.append(
                  key + "[]",
                  this.item[key][x],
                  this.item[key][x].name
                );
              }
            } else formData.append(key, this.item[key]);
          });

          axios
            .post(this.apiUrl + "/" + this.modelName, formData)
            .then((response) => {
              this.loading = false;
              if (this.hideModalAfterSave || this.hideModalAfterCreate) {
                this.$bvModal.hide("modal-form-item-" + this.modelName);
              }
              if (response.data.success) {
                if (response.data.message) {
                  this.toastSuccess(response.data.message);
                }
                return;
              }
              let itemSv = response.data;
              this.items.push(itemSv);
              this.item = itemSv;
              if (this.refreshAfterSave) this.refresh();
              this.toastSuccess("Elemento Creado");
              this.$emit("itemSaved", { item: this.item });
              this.$emit("itemCreated", { item: this.item });
            })
            .catch((error) => {
              this.toastError(error);
              this.loading = false;
            });
        } else {
          axios
            .post(this.apiUrl + "/" + this.modelName, this.item)
            .then((response) => {
              this.loading = false;
              if (this.hideModalAfterSave || this.hideModalAfterUpdate) {
                this.$bvModal.hide("modal-form-item-" + this.modelName);
              }
              if (response.data.success) {
                if (response.data.message) {
                  this.toastSuccess(response.data.message);
                }
                return;
              }

              let itemSv = response.data;
              this.items.push(itemSv);
              this.item = itemSv;
              if (this.refreshAfterSave) this.refresh();
              this.toastSuccess("Elemento Creado");
              this.$emit("itemSaved", { item: this.item });
              this.$emit("itemCreated", { item: this.item });
            })
            .catch((error) => {
              this.toastError(error);
              this.loading = false;
            });
        }
      }
      if (event) event.preventDefault();
    },

    deleteItem(id, index) {
      if (this.useVuexORM) {
        return this.deleteItemVuex(id, index);
      }

      if (!this.ajax) {
        return this.deleteItemLocal(id, index);
      }

      this.loading = true;
      axios
        .delete(this.apiUrl + "/" + this.modelName + "/" + id)
        .then((response) => {
          this.items.splice(index, 1);
          this.toastSuccess("Elemento eliminado.");
          this.$emit("itemDeleted", {});
          this.loading = false;
        })
        .catch((error) => {
          this.toastError(error);
          this.loading = false;
        });
    },

    async deleteItemLocal(id, index) {
      if (id || index) {
        let itemIndex;

        if (id) {
          itemIndex = this.items.findIndex((item) => item.id == this.item.id);
        } else {
          itemIndex = index;
        }

        this.items.splice(itemIndex, 1);
        this.item = null;
        this.toastSuccess("Elemento Eliminado");
        this.$emit("itemDeleted", {});
      } else {
        console.error("Cannot delete item without ID or index");
      }

      this.loading = false;
    },

    async deleteItemVuex(id, index) {
      if (this.vuexLocalforage) {
        await this.model.$delete(id);
      } else {
        let result = await this.model.api().delete(this.apiUrl + "/" + this.modelName + '/' + id, {
          delete: 1
        });

        console.debug("delete item vuex", result);
        let responseStatus = result.response.status;

        if (result.response.data.error) {
          this.toastError(result.response.data.error);
          this.loading = false;
          return;
        }
      }

      this.toastSuccess("Elemento eliminado.");
    },

    deleteItemBulk() {
      if (this.useVuexORM) {
        return this.deleteItemBulkVuex();
      }

      if (!this.ajax) {
        return this.deleteItemBulkLocal();
      }

      let ids = this.selectedItems.map(it => it.id);

      this.loading = true;
      axios
        .delete(this.apiUrl + "/" + this.modelName + "/bulk-destroy", { params: { ids: ids }, })
        .then((response) => {
          this.items = this.items.filter(it => !ids.includes(it.id));
          this.toastSuccess("Elemento/s eliminado.");
          this.$emit("itemDeleted", {});
          this.loading = false;
        })
        .catch((error) => {
          this.toastError(error);
          this.loading = false;
        });
    },

    async deleteItemBulkLocal() {
      let ids = this.selectedItems.map(it => it.id);
      this.items = this.items.filter(it => !ids.includes(it.id));
      this.item = null;
      this.toastSuccess("Elemento Eliminado");
      this.$emit("itemDeleted", {});
      this.loading = false;
    },

    async deleteItemBulkVuex() {
      let ids = this.selectedItems.map(it => it.id);

      if (this.vuexLocalforage) {
        await this.model.$delete(ids);
      } else {
        let result = await this.model.api().delete(this.apiUrl + "/" + this.modelName + '/bulk-destroy', {
          params: { ids: ids },
          delete: ids
        });

        console.debug("delete item vuex", result);
        let responseStatus = result.response.status;

        if (result.response.data.error) {
          this.toastError(result.response.data.error);
          this.loading = false;
          return;
        }
      }

      this.toastSuccess("Elemento eliminados.");
    },

    saveSort() {
      if (this.orderable) {
        this.loading = true;
        let order = [];
        this.items.forEach((v, k) => {
          order.push({ id: v.id, order: v[this.orderProp] });
        });

        if (!this.ajax) {
          return;
        }
        axios
          .post(this.apiUrl + "/" + this.modelName + "/sort", {
            order: order,
          })
          .then((response) => {
            let data = response.data;
            this.toastSuccess("Orden Actualizado");
            if (this.refreshAfterSave) this.refresh();
            this.loading = false;
          })
          .catch((error) => {
            this.toastError(error);
            this.loading = false;
          });
      }
    },

    exportItems() {
      if (this.useVuexORM) {
        return;
      }

      if (!this.ajax) {
        return;
      }

      let exportItems = true;
      let params;
      let ids = this.selectedItems.map(it => it.id);
      if (ids.length) {
        params = { ids: ids, exportItems: exportItems, };
      } else {
        params = { filters: JSON.stringify(this.finalFilters), exportItems: exportItems, };
      }
      params.format = this.exportFormat;
      this.loading = true;
      axios
        .get(this.apiUrl + "/" + this.modelName + "/export", { params: params, responseType: "blob", })
        .then((response) => {
          this.downloadBlobResponse(response);
          this.loading = false;
        })
        .catch((error) => {
          this.toastError(error);
          this.loading = false;
        });
    },

    importItems() {
      let formData = new FormData();
      formData.append("file", this.fileImport);
      axios
        .post(this.apiUrl + "/" + this.modelName + "/import", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          if (response && response.data && response.data.success == true) {
            this.$refs["modal-import"].hide();
            this.toastSuccess("Datos Importados con Éxito");
            this.refresh();
          } else {
            this.toastError("No se pudo importar los datos.");
          }
        })
        .catch((error) => {
          console.error(error);
          this.toastError(error);
        });
    },

    refresh() {
      this.$emit("refresh", {});

      if (this.infiniteScroll) {
        this.pagination.current_page = 1;
        this.infiniteScrollKey++;
      }

      const fetchPromise = this.fetchItems(this.pagination.current_page);

      if (this.infiniteScroll && fetchPromise) {
        this.refreshing = true;
        fetchPromise.then(() => {
          const infiniteLoadingRef = this.$refs.infiniteLoading;
          if (infiniteLoadingRef) {
            infiniteLoadingRef.stateChanger.reset();
          } else {
            console.debug("infiniteLoadingRef not set");
          }
          this.refreshing = false;
        });
      }
    },

    onPaginationChange(page) {
      this.fetchItems(page);
    },

    infiniteHandler($state) {
      const hasNextPage = (this.pagination.total > 0 || !this.firstLoad) && (!this.firstLoad || (this.pagination.current_page * this.pagination.per_page) <= this.pagination.total);
      console.debug("Has next page", hasNextPage, this.pagination);
      if (hasNextPage) {
        const page = this.pagination.current_page + 1;
        this.fetchItems(page, true).then(() => {
          console.debug("infinite handler then");
          $state.loaded();
        }).catch(error => {
          console.debug("infinite handler error", error);
          $state.error();
        });
      } else {
        $state.complete();
      }
    }
  }
};
