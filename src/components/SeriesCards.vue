<template>
  <main class="card-container">
    <article v-for="serie in fetchSeries.series" :key="serie.id" class="card">
      <router-link :to="'/details/' + serie.id" @click="historicalStore.addToHistory(serie)">
      <div class="image-container">
        <img :src="`${serie.thumbnail.path}.${serie.thumbnail.extension}`" alt="serie thumbnail" />
        <div class="overlay">
          <div class="overlay-content">
            <ul :class="{'type-limited': serie.type === 'limited', 'type-collection': serie.type === 'collection', 'one-shot': serie.type === 'one shot'}">
              <li><strong>Year:</strong> {{ serie.startYear }} - <span v-if="serie.endYear == 2099">Present</span><span v-else>{{ serie.endYear }}</span></li>
              <li><strong>Type:</strong> {{ serie.type }}</li>
              <li><strong>Comics:</strong> {{ serie.comics.available }}</li>
              <li><strong>Stories:</strong> {{ serie.stories.available }}</li>
            </ul>
          </div>
        </div>
        <h3 class="card-title">{{ serie.title }}</h3>
      </div>
      </router-link>
    </article>
    <span class="loader"></span>
  </main>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';
import { useFetchSeries } from '../stores/fetchSeries';
import { useHistoricalStore } from '../stores/historicalStore';

import './sass/cards.sass';
import './sass/loader.sass';

const fetchSeries = useFetchSeries();
const historicalStore = useHistoricalStore();

const page = ref(1);
const perPage = 12;

const handleScroll = async () => {
  const threshold = 2;
  const scrollPosition = window.scrollY + window.innerHeight;
  const documentHeight = document.documentElement.offsetHeight;

  if (scrollPosition + threshold >= documentHeight && !fetchSeries.loading) {
    page.value++;

    try {
      await fetchSeries.fetchSeries(perPage, perPage * page.value);
    } catch (error) {
      console.error('error:', error);
    }
  }
};

if (fetchSeries.series.length === 0) {
    try {
      await fetchSeries.fetchSeries(perPage, 0);
    } catch (error) {
      console.error('error:', error);
    }
  }

onMounted(async () => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

</script>