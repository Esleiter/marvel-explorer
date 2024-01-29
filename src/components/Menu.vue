<template>
  <header>
    <router-link to="/">
      <img src="../assets/marvel-logo.svg" alt="marvel logo" class="logo" />
    </router-link>
  </header>
  <nav>
    <router-link to="/" class="nav-link">Home</router-link>
    <router-link to="/history" class="nav-link">History</router-link>
  </nav>
</template>
  
<style lang="sass">
  header
    background: url('../assets/marvel-background-header.webp') no-repeat center center
    background-size: cover
    padding: 10px
    display: flex
    justify-content: center
    align-items: center
  
    .logo
      max-height: 50px

  nav
    background-color: #333
    padding: 10px
    display: flex
    justify-content: center
    align-items: center
  
    .nav-link
      color: white
      margin-right: 15px
      text-decoration: none
  
      &:hover
        text-decoration: underline
  
  .logo
    height: 6em
    padding: 1.5em
    will-change: filter
    transition: filter 300ms

    &:hover
      filter: drop-shadow(0 0 2em #EC1D24)

  .logo.marvel:hover
    filter: drop-shadow(0 0 2em #EC1D24)
</style>
  