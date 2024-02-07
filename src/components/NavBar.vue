<template>
  <v-container style="padding-top: 0px">
    <v-row
      align="center"
      justify="center"
      justify-sm="start"
    >
      <v-col
        :class="$vuetify.display.mobile ? 'd-flex justify-center' : ''"
        :style="$vuetify.display.mobile ? 'padding: 0px' : ''"
      >
        <v-btn-toggle
          divided
          :theme="$vuetify.theme.current.dark ? 'customLight' : 'customDark'"
        >
          <v-btn
            :href="tabUrls[0]"
            prepend-icon="mdi-home"
            class="text-none"
            :class="tab == tabUrls[0] ? 'bg-primary' : 'bg-background'"
          >
            Home
          </v-btn>
          <v-btn
            :href="tabUrls[1]"
            prepend-icon="mdi-information"
            class="text-none"
            :class="tab == tabUrls[1] ? 'bg-primary' : 'bg-background'"
          >
            About
          </v-btn>
          <v-btn
            v-if="!$vuetify.display.mobile"
            :href="tabUrls[2]"
            prepend-icon="mdi-folder"
            class="text-none"
            :class="tab == tabUrls[2] ? 'bg-primary' : 'bg-background'"
          >
            Projects
          </v-btn>
          <v-btn
            v-if="!$vuetify.display.mobile"
            :href="tabUrls[3]"
            prepend-icon="mdi-speedometer"
            class="text-none"
            :class="tab == tabUrls[3] ? 'bg-primary' : 'bg-background'"
          >
            Speedrunning
          </v-btn>
        </v-btn-toggle>
      </v-col>
      <v-col 
        v-if="$vuetify.display.mobile"
        class="d-flex justify-center"
        style="padding: 0px"
      >
        <v-btn-toggle
          divided
          :theme="$vuetify.theme.current.dark ? 'customLight' : 'customDark'"
        >
          <v-btn
            :href="tabUrls[2]"
            prepend-icon="mdi-folder"
            class="text-none"
            :class="tab == tabUrls[2] ? 'bg-primary' : 'bg-background'"
          >
            Projects
          </v-btn>
          <v-btn
            :href="tabUrls[3]"
            prepend-icon="mdi-speedometer"
            class="text-none"
            :class="tab == tabUrls[3] ? 'bg-primary' : 'bg-background'"
          >
            Speedrunning
          </v-btn>
        </v-btn-toggle>
      </v-col>
      <v-spacer v-if="!$vuetify.display.mobile" />
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
          class="bg-primary"
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
      theme.global.name.value = 'customDark'
    }
    else {
      theme.global.name.value = 'customLight'
    }
  }
  // if browser too old, default to dark
  else {
    theme.global.name.value = 'customDark'
  }
  // write to localStorage
  localStorage.setItem('theme', theme.global.name.value)
}

function toggleTheme () {
  theme.global.name.value = theme.global.current.value.dark ? 'customLight' : 'customDark'
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
      tabUrls: tabUrls,
    }
  }
}
</script>