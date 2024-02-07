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

// change document title
document.title = 'Gaphodil | About'

const app = createApp(App)

registerPlugins(app)

app.mount('#app')
