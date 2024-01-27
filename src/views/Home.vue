<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useFetchSeries } from '../stores/fetchSeries';

const fetchSeries = useFetchSeries();
const page = ref(1);
const perPage = 10;

onMounted(() => {
  if  (fetchSeries.series.length === 0) {
    fetchSeries.fetchSeries(perPage, 0);
  }
  window.addEventListener('scroll', handleScroll);
});

const handleScroll = () => {
  const threshold = 2;
  const scrollPosition = window.scrollY + window.innerHeight;
  const documentHeight = document.documentElement.offsetHeight;
  if (scrollPosition + threshold >= documentHeight) {
    console.log('Cargar más series');
    page.value++;
    fetchSeries.fetchSeries(perPage, perPage * page.value);
  }
};
</script>

<template>
  <div>
    <h2>home</h2>
    <div class="card-container">
      <div v-for="serie in fetchSeries.series" :key="serie.id" class="card">
        <h3>{{ serie.title }}</h3>
        <img :src="`${serie.thumbnail.path}.${serie.thumbnail.extension}`" alt="serie thumbnail" />
      </div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
$primary-color: #EC1D24

.card-container
  display: flex
  flex-wrap: wrap
  justify-content: space-between

.card
  flex: 0 0 calc(25% - 20px)
  box-sizing: border-box
  border: 1px solid $primary-color
  border-radius: 8px
  margin: 10px
  padding: 10px
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1)

  h3
    color: $primary-color

  p
    margin-top: 8px

  img
    max-width: 100%
    height: auto
    margin-top: 8px
    border-radius: 4px

@media (max-width: 768px)
  .card
    flex: 0 0 calc(50% - 20px)

@media (max-width: 480px)
  .card
    flex: 0 0 calc(100% - 20px)
</style>
