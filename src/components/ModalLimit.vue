<script lang="ts" setup>
import { useSaveSeries } from '../stores/saveSeries';

const saveSeries = useSaveSeries();
</script>

<template>
  <Teleport to="body">
    <div v-if="saveSeries.saveLimitReached" class="modal-overlay">
      <div class="modal">
        <button @click="saveSeries.saveLimitReached = false" class="close-button">X</button>
          <p>You've hit the maximum limit of saved resources (10). Upgrade to Premium now for unlimited storage and an enhanced experience!</p>
      </div>
    </div>
  </Teleport>
</template>
  
<style lang="sass">
  .modal-overlay
    position: fixed
    top: 0
    left: 0
    width: 100%
    height: 100%
    background: rgba(0, 0, 0, 0.5)
    display: flex
    justify-content: center
    align-items: center
    z-index: 999

  .modal
    background: #9f9d9d
    padding: 20px
    border-radius: 8px
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2)
    width: 300px

  .close-button
    background-color: #ff0000
    color: #fff
    border: none
    padding: 10px 15px
    border-radius: 4px
    cursor: pointer

    &:hover
      background-color: #0056b3
</style>
  