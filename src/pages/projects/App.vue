<template>
  <v-app>
    <v-main>
      <v-container>
        <SiteHeader />
      </v-container>
      <v-container>
        <NavBar />
        <ProjectsPage />
      </v-container>
    </v-main>
  </v-app>
</template>
  
<script setup>
import ProjectsPage from "./ProjectsPage.vue";
</script>
  