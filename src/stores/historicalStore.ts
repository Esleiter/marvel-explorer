import { defineStore } from "pinia";

export const useHistoricalStore = defineStore({
  id: "historicalStore",
  state: () => ({ historical: [] as any[] }),
  actions: {
    addToHistory(serie: object) {
      this.historical.unshift({ serie });
      this.saveToLocalStorage();
    },
    saveToLocalStorage() {
      localStorage.setItem("historicalData", JSON.stringify(this.historical));
    },
    loadFromLocalStorage() {
      const storedData = localStorage.getItem("historicalData");
      if (storedData) {
        this.historical = JSON.parse(storedData);
      }
    },
  },
});
