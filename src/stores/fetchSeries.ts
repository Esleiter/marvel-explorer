import { defineStore } from "pinia";

export const useFetchSeries = defineStore({
  id: "fetchSeries",
  state: () => ({
    series: [] as any[],
  }),
  actions: {
    async fetchSeries(limit: number, offset: number) {
      const response = await fetch(`https://gateway.marvel.com/v1/public/series?ts=1&apikey=e3a335c49726102dcd095379c0662229&hash=bd0fac4c98eb443484aa5bc036fca204&limit=${limit}&offset=${offset}`);
      const data = await response.json();
      
      data.data.results.forEach((serie: any) => {
        this.series.push({
          id: serie.id,
          title: serie.title,
          description: serie.description,
          startYear: serie.startYear,
          endYear: serie.endYear,
          thumbnail: serie.thumbnail,
          creators: serie.creators,
          characters: serie.characters,
          stories: serie.stories,
          comics: serie.comics,
          urls: serie.urls,
        });
      });
    },
  },
});
