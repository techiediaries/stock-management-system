import {ipcRenderer} from "electron";

type categoriesState = {
  categories: any[]
};


const state: categoriesState = {
  categories: [],
};

const getters = {
  categories: (state: categoriesState) => state.categories,
};

const mutations = {
  setCategories(state: categoriesState, categories: []) {
    state.categories = categories;
  }
};

const actions = {
  getCategories({commit, state}: any) {
    const allCategories = ipcRenderer.sendSync("category-service", {
      action: "get-categories",
      payload: {
      }
    });
    if (allCategories && allCategories !== "error") {
      commit("setCategories", allCategories);
    } else {
      alert("Impossible de lire les categories de la base de donnees")
    }
  },

  deleteCategory({commit, dispatch}: any, codeCategory: string) {
    const deleted: string = ipcRenderer.sendSync("category-service", {
      action: "delete-category",
      payload: {
        category_code: codeCategory
      }
    });
    if (deleted !== "error") {
      dispatch("getCategories");
    } else {
      alert(`impossible de supprimer la categorie avec le code ${codeCategory}`)
    }
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};