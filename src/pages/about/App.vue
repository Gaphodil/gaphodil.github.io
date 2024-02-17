<template>
  <v-app>
    <v-main>
      <v-container>
        <SiteHeader />
      </v-container>
      <v-container>
        <NavBar />
        <AboutPage />
      </v-container>
    </v-main>
  </v-app>
</template>
  
<script setup>
import AboutPage from "./AboutPage.vue";
</script>

<style>
@import '@/assets/styles/main.css';
</style>
