<template>
  <v-app>
    <v-main>
      <v-container :class="$vuetify.display.lgAndUp ? 'w-75' : ''">
        <SiteHeader />
      </v-container>
      <v-container :class="$vuetify.display.lgAndUp ? 'w-75' : ''">
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
