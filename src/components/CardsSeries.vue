<script setup lang="ts">
import { onMounted } from 'vue';
import { useFetchSeries } from '../stores/fetchSeries';

onMounted(() => {
    const { fetchSeries } = useFetchSeries();
    fetchSeries(10, 10);
});
</script>

<template>
    <div>
        
    </div>
</template>

<style lang="sass" scoped>
$primary-color: #EC1D24

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
