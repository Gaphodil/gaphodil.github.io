<template>
  <v-app>
    <v-main>
      <v-container>
        <SiteHeader />
      </v-container>
      <v-container>
        <NavBar />
        <SpeedrunningPage />
      </v-container>
    </v-main>
  </v-app>
</template>
  
<script setup>
import SpeedrunningPage from "./SpeedrunningPage.vue";
</script>

<style>
@import '@/assets/styles/main.css';
</style>
