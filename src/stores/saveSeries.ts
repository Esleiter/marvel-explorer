import { defineStore } from "pinia";

export const useSaveSeries = defineStore({
  id: "saveSeries",
  state: () => ({ saves: [] as any[], saveLimitReached: false }),
  actions: {
    save(id: number) {
        if (this.saves.length >= 10) {
            this.saveLimitReached = true;
        }
      const storedData = localStorage.getItem("savesData");
      if (storedData) {
        const existingSaveIndex = this.saves.findIndex((item) => item.id === id);
        if (existingSaveIndex !== -1) {
          this.saves.splice(existingSaveIndex, 1);
          this.saveLimitReached = false;
        } else if (this.saves.length < 10) {
          this.saves.unshift({ id });
        }
      }
      
      this.saveToLocalStorage();
    },
    saveToLocalStorage() {
      localStorage.setItem("savesData", JSON.stringify(this.saves));
    },
    existsInSaves(id: number): boolean {
      return this.saves.some((item) => item.id === id);
    },
    loadFromLocalStorage() {
      const storedData = localStorage.getItem("savesData");
      if (storedData) {
        this.saves = JSON.parse(storedData);
      }
    },
  },
});