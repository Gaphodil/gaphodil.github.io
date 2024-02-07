<template>
  <v-container style="padding-top: 0px">
    <v-row
      align="center"
      justify="center"
      justify-sm="start"
    >
      <NavBarItem>
        <v-btn
          flat
          :href="tabUrls[0]"
          :variant="tab === tabUrls[0] ? 'outlined' : 'text'"
          prepend-icon="mdi-home"
        >
          Home
        </v-btn>
      </NavBarItem>
      <NavBarItem>
        <v-btn
          flat
          :href="tabUrls[1]"
          :variant="tab === tabUrls[1] ? 'outlined' : 'text'"
          prepend-icon="mdi-information"
        >
          About
        </v-btn>
      </NavBarItem>
      <NavBarItem>
        <v-btn
          flat
          :href="tabUrls[2]"
          :variant="tab === tabUrls[2] ? 'outlined' : 'text'"
          prepend-icon="mdi-folder"
        >
          Projects
        </v-btn>
      </NavBarItem>
      <NavBarItem>
        <v-btn
          flat
          :href="tabUrls[3]"
          :variant="tab === tabUrls[3] ? 'outlined' : 'text'"
          prepend-icon="mdi-speedometer"
        >
          Speedrunning
        </v-btn>
      </NavBarItem>
      <v-spacer />
      <v-col
        cols="12"
        sm="1"
        :class="$vuetify.display.mobile ? 'd-flex justify-center' : ''"
        :style="$vuetify.display.mobile ? 'padding: 0px' : ''"
      >
        <v-btn
          style="justify-self: center;"
          aria-label="Change Theme"
          title="Change Theme"
          :icon="$vuetify.theme.current.dark ? 'mdi-weather-night' : 'mdi-weather-sunny'"
          @click="toggleTheme"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { useTheme } from 'vuetify'

const theme = useTheme()

// read localStorage for theme
if (localStorage.getItem('theme')) {
  theme.global.name.value = localStorage.getItem('theme')
}
// otherwise, on first visit
else {
  // grab system theme from window.matchMedia
  if (window.matchMedia) {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      theme.global.name.value = 'dark'
    }
    else {
      theme.global.name.value = 'light'
    }
  }
  // if browser too old, default to dark
  else {
    theme.global.name.value = 'dark'
  }
  // write to localStorage
  localStorage.setItem('theme', theme.global.name.value)
}

function toggleTheme () {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
  localStorage.setItem('theme', theme.global.name.value)
}
</script>

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