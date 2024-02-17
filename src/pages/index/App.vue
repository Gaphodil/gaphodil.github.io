<template>
  <v-app>
    <v-main>
      <v-container>
        <SiteHeader />
      </v-container>
      <v-container>
        <NavBar />
        <HomePage />
      </v-container>
    </v-main>
  </v-app>
</template>
  
<script setup>
import HomePage from "./HomePage.vue";
</script>

<style>
@import '@/assets/styles/main.css';
</style>
