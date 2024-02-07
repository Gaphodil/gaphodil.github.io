/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

// import is forced, mount based on pathname
if (window.location.pathname === '/about') {
  // change document title
  document.title = 'Gaphodil | About'

  const app = createApp(App)

  registerPlugins(app)

  app.mount('#app')
}