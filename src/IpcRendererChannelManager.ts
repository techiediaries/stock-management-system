import { ipcRenderer } from "electron";
import { Store } from "vuex";

export function registerIpcRendererChannel(store: Store<any>, ...args: any[]): any {
  ipcRenderer.on("category-service", async (event: any, payload: any) => categoryManager(store, payload));
  ipcRenderer.on("product-service",(event: any, payload: any) => productManager(store, payload));
}

function productManager(store: Store<any>, payload: any) {
  const {status, action, data} = payload;
  switch (action) {
    case "get-products":
      if (status === "success") {
        store.dispatch("getProductsSuccess", data);
      } else {
        store.dispatch("getProductsError");
      }
      break;
    default:
      break;
  }
}

function categoryManager(store: Store<any>, payload: any) {
    const {status, action, data} = payload;
    switch (action) {
      case "add-category":
        if (status === "success") {
          store.dispatch("addCategorySuccess");
        } else {
          store.dispatch("addCategoryError");
        }
        break;
      case "get-categories":
        if (status === "success") {
          store.dispatch("getCategoriesSuccess", data);
        } else {
          store.dispatch("getCategoriesError");
        }
        break;
      case "delete-category":
        if (status === "success") {
          store.dispatch("deleteCategorySuccess");
        } else {
          store.dispatch("deleteCategoryError", data);
        }
        break;
      case "edit-category":
        if (status === "success") {
          store.dispatch("editCategorySuccess");
        } else {
          store.dispatch("editCategoryError", data);
        }
        break;
    }
}
