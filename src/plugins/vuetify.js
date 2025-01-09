/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

// Composables
import { createVuetify } from "vuetify";
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import { fa } from 'vuetify/iconsets/fa-svg'
import CohostSVG from "@/components/CohostSVG.vue";

// https://vuetifyjs.com/en/features/theme/
const customDark = {
  dark: true,
  colors: {
    background: '#1A0410',
    'on-background': '#FFD4EB',
    surface: '#1A0410',
    'surface-bright': '#1A0410',
    'surface-light': '#44162F',
    'surface-variant': '#C3A0B3',
    'on-surface-variant': '#44162F',
    primary: '#FFD4EB',
    'on-primary': '#1A0410',
    'a-link': '#D4FBFF',
    'a-visited': '#999263',
  }
};
const customLight = {
  dark: false,
  colors: {
    background: '#FFD4EB',
    'on-background': '#1A0410',
    surface: '#FFD4EB',
    'surface-bright': '#FFD4EB',
    'surface-light': '#D5ABC1',
    'surface-variant': '#33071E',
    'on-surface-variant': '#D5ABC1',
    primary: '#1A0410',
    'on-primary': '#FFD4EB',
    'a-link': '#1E616B',
    'a-visited': '#80773C',
  }
};

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: "customDark",
    themes: {
      customDark,
      customLight,
    },
    variations: {
      colors: ["background, primary"],
      lighten: 1,
      darken: 1,
    }
  },
  icons: {
    defaultSet: "mdi",
    aliases,
    sets: {
      fa,
      mdi,
      cohost: {
        component: CohostSVG,
      },
    },
  },
});
