<template>
    <header class="menu-header">
      <router-link to="/">
        <img src="../assets/marvel-logo.svg" alt="marvel logo" class="logo" />
      </router-link>
      <nav>
        <router-link to="/" class="nav-link">Home</router-link>
        <router-link to="/history" class="nav-link">History</router-link>
      </nav>
    </header>
  </template>
  
  <style lang="sass">
  .menu-header
    background-color: #333
    padding: 5px
    display: flex
    justify-content: space-between
    align-items: center
  
    .logo
      max-height: 50px
  
    .nav-link
      color: white
      margin-right: 15px
      text-decoration: none
  
      &:hover
        text-decoration: underline
  </style>
  