<template>
  <ModalLimit />
  <h3>{{ details.title }} <Save :id="`${details.id}`" /></h3>
  <main class="card-container">
    <article v-for="comic in details.comics.items" :key="comic.id" class="card">
      <img v-if="comic.thumbnail" :src="`${comic.thumbnail.path}.${comic.thumbnail.extension}`" alt="comic thumbnail" />
      <img v-else src="http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg" alt="fallback image" />
      <div class="overlay">
        <div class="overlay-content">
          <ul>
            <li><strong>Creators:</strong></li>
            <li v-for="creator in comic.creators.items" :key="creator.id">{{ creator.name }}</li>
          </ul>
        </div>
      </div>
      <p class="card-description">Comic.</p>
      <h3 class="card-title">{{ comic.name }}</h3>
    </article>
    <article v-for="story in details.stories.items" :key="story.id" class="card">
      <img v-if="story.thumbnail" :src="`${story.thumbnail.path}.${story.thumbnail.extension}`" alt="story thumbnail" />
      <img v-else src="http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg" alt="fallback image" />
      <div class="overlay">
        <div class="overlay-content">
          <ul>
            <li><strong>Creators:</strong></li>
            <li v-for="creator in story.creators.items" :key="creator.id">{{ creator.name }}</li>
          </ul>
        </div>
      </div>
      <p class="card-description">Story.</p>
      <h3 class="card-title">{{ story.name }}</h3>
    </article>
  </main>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { getMarvelApiParams } from "../marvel-api-config";

import './sass/cards.sass';
import Save from '../components/Save.vue';
import ModalLimit from './ModalLimit.vue';

const marvelApiParams = getMarvelApiParams();

interface Item {
  id: number;
  name: string;
  resourceURI: string;
  thumbnail: {
    extension: string;
    path: string;
  } | null;
  creators: {
    available: number;
    collectionURI: string;
    items: any[];
  };
}

interface Details {
  id: number;
  title: string;
  description: string;
  stories: {
    available: number;
    collectionURI: string;
    items: Item[];
  };
  comics: {
    available: number;
    items: Item[];
  };
}

const details = ref<Details>({
  id: 0,
  title: '',
  description: '',
  stories: {
    available: 0,
    collectionURI: '',
    items: [],
  },
  comics: {
    available: 0,
    items: [],
  },
});

const route = useRoute();
const id = ref(route.params.id as string);

async function fetchDetails(id: string) {
  const response = await fetch(`https://gateway.marvel.com/v1/public/series/${id}?${marvelApiParams}`);
  const data = await response.json();
  return data.data.results[0];
}

async function fetchItemDetails(url: string) {
  const response = await fetch(`${url.replace('http://', 'https://')}?${marvelApiParams}`);
  const data = await response.json();
  return data.data.results[0];
}

await fetchDetails(id.value);

onMounted(async () => {
  details.value = await fetchDetails(id.value);

  const storyDetailsPromises = details.value.stories.items.map(async (story) => {
    const storyDetails = await fetchItemDetails(story.resourceURI);
    return storyDetails;
  });

  const storyDetailsArray = await Promise.all(storyDetailsPromises);

  details.value.stories.items.forEach((story, index) => {
    story.thumbnail = storyDetailsArray[index].thumbnail;
    story.creators = storyDetailsArray[index].creators;
  });

  const comicDetailsPromises = details.value.comics.items.map(async (comic) => {
    const comicDetails = await fetchItemDetails(comic.resourceURI);
    return comicDetails;
  });

  const comicDetailsArray = await Promise.all(comicDetailsPromises);

  details.value.comics.items.forEach((comic, index) => {
    comic.thumbnail = comicDetailsArray[index].thumbnail;
    comic.creators = comicDetailsArray[index].creators;
  });
});
</script>
