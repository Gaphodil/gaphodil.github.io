<template>
  <v-container>
    <v-row
      align="center"
      justify="center"
    >
      <v-col :cols="'auto'">
        <v-btn
          flat
          :href="tabUrls[0]"
          :variant="tab === tabUrls[0] ? 'outlined' : 'text'"
          prepend-icon="mdi-home"
        >
          Home
        </v-btn>
      </v-col>
      <v-col :cols="'auto'">
        <v-btn
          flat
          :href="tabUrls[1]"
          :variant="tab === tabUrls[1] ? 'outlined' : 'text'"
          prepend-icon="mdi-information"
        >
          About
        </v-btn>
      </v-col>
      <v-col :cols="'auto'">
        <v-btn
          flat
          :href="tabUrls[2]"
          :variant="tab === tabUrls[2] ? 'outlined' : 'text'"
          prepend-icon="mdi-folder"
        >
          Projects
        </v-btn>
      </v-col>
      <v-col :cols="'auto'">
        <v-btn
          flat
          :href="tabUrls[3]"
          :variant="tab === tabUrls[3] ? 'outlined' : 'text'"
          prepend-icon="mdi-speedometer"
        >
          Speedrunning
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>


<script>
var activePage = window.location.pathname;
var tabUrls = ["/", "/about", "/projects", "/speedrunning"];

export default {
  data() {
    return {
      tab: activePage,
      tabUrls: tabUrls
    }
  }
}
</script>