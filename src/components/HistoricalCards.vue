<template>
    <main class="card-container">
        <ModalLimit />
        <article v-for="(item, index) in historicalStore.historical" :key="index" class="card">
            <Save :id="`${item.serie.id}`"/>
            <router-link :to="'/details/' + item.serie.id">
                <div class="image-container">
                    <img :src="`${item.serie.thumbnail.path}.${item.serie.thumbnail.extension}`" alt="serie thumbnail" />
                    <div class="overlay">
                        <div class="overlay-content">
                            <ul :class="{'type-limited': item.serie.type === 'limited', 'type-collection': item.serie.type === 'collection', 'one-shot': item.serie.type === 'one shot'}">
                                <li><strong>Year:</strong> {{ item.serie.startYear }} - <span v-if="item.serie.endYear == '2099'">Present</span><span v-else>{{ item.serie.endYear }}</span></li>
                                <li><strong>Type:</strong> {{ item.serie.type }}</li>
                                <li><strong>Comics:</strong> {{ item.serie.comics.available }}</li>
                                <li><strong>Stories:</strong> {{ item.serie.stories.available }}</li>
                            </ul>
                        </div>
                    </div>
                    <h3 class="card-title">{{ item.serie.title }}</h3>
                    
                </div>
            </router-link>
        </article>
    </main>
</template>

<script lang="ts" setup>
    import { useHistoricalStore } from '../stores/historicalStore';
    const historicalStore = useHistoricalStore();

    import ModalLimit from './ModalLimit.vue';
    import Save from '../components/Save.vue';

    import './sass/cards.sass';

    historicalStore.loadFromLocalStorage();
</script>