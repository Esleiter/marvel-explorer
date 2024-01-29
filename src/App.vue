<script lang="ts" setup>
import Menu from './components/Menu.vue'
</script>

<template>
  <Menu />
  <RouterView v-slot="{ Component }">
    <template v-if="Component">
      <Suspense>
        <component :is="Component"></component>
        <template #fallback>
          <div>
            <h2><span class="loader"></span></h2>
          </div>
        </template>
      </Suspense>
    </template>
  </RouterView>
</template>

