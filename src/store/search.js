import { defineStore } from "pinia";

export const useSearchStore = defineStore("search", {
  state: () => ({ searchItems: null, searchName: "" }),
  actions: {
    setSearchItems(query) {
      this.searchItems = query;
    },

    setSearchName(query) {
      this.searchName = query;
    },

    clearSearchName() {
      this.searchName = "";
    },

    clearSearchItems() {
      this.searchItems = null;
    },
  },
});
