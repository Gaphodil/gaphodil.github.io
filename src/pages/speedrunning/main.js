/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from "@/plugins";

// Components
import App from "./App.vue";

// Composables
import { createApp } from "vue";

// import is forced, mount based on pathname
if (window.location.pathname === '/speedrunning') {
  // change document title
  document.title = 'Gaphodil | Speedrunning'

  const app = createApp(App)

  registerPlugins(app)

  app.mount('#app')
}