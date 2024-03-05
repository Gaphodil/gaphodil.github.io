<template>
  <v-app>
    <v-main>
      <v-container :class="$vuetify.display.lgAndUp ? 'w-75' : ''">
        <SiteHeader />
      </v-container>
      <v-container :class="$vuetify.display.lgAndUp ? 'w-75' : ''">
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
