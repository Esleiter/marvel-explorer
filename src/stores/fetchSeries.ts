import { defineStore } from "pinia";
import { getMarvelApiParams } from "../marvel-api-config";

export interface Serie {
  id: number;
  startYear: number;
  endYear: number;
  title: string;
  type: string;
  thumbnail: { path: string; extension: string };
  stories: { available: number; tuhmbnail: string; items: any[]};
  comics: { available: number; collectionURI: string; items: any[]; returned: number };
  urls: { type: string; url: string }[]
}

const marvelApiParams = getMarvelApiParams();

export const useFetchSeries = defineStore({
  id: "fetchSeries",
  state: (): {
    series: Serie[];
    loading: boolean;
  } => ({
    series: [],
    loading: false,
  }),
  actions: {
    async fetchSeries(limit: number, offset: number) {
      try {
        this.loading = true;
        const response = await fetch(`https://gateway.marvel.com/v1/public/series?${marvelApiParams}&limit=${limit}&offset=${offset}`);
        const data = await response.json();

        data.data.results.forEach((serie: any) => {
          this.series.push({
            id: serie.id,
            startYear: serie.startYear,
            endYear: serie.endYear,
            title: serie.title,
            type: serie.type,
            thumbnail: serie.thumbnail,
            stories: serie.stories,
            comics: serie.comics,
            urls: serie.urls,
          });
        });
      } catch (error) {
        console.error('Error al cargar series:', error);
      } finally {
        this.loading = false;
      }
    },
  },
});
