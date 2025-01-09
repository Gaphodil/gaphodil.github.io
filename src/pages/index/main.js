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
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'

const app = createApp(App)

registerPlugins(app)

// https://vuetifyjs.com/en/features/icon-fonts/#fa-5-svg
app.component('font-awesome-icon', FontAwesomeIcon) // Register component globally
library.add(fab)

app.mount('#app')