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
import CohostSVG from "@/components/CohostSVG.vue";

const customDark = {
  dark: true,
  colors: {
    background: '#1A0410',
    surface: '#1A0410',
    'surface-bright': '#1A0410',
    'on-background': '#FFD4EB',
    primary: '#FFD4EB',
    'on-primary': '#1A0410',
  }
};
const customLight = {
  dark: false,
  colors: {
    background: '#FFD4EB',
    surface: '#FFD4EB',
    'surface-bright': '#FFD4EB',
    'on-background': '#1A0410',
    primary: '#1A0410',
    'on-primary': '#FFD4EB',
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
    sets: {
      cohost: {
        component: CohostSVG,
      },
    },
  },
});
