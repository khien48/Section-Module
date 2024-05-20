
// Plugins
import { registerPlugins } from '@/plugins'
import PrimeVue from 'primevue/config';

// Components
import App from './App.vue'
import router from './router';
// Composables
import { createApp } from 'vue'

const app = createApp(App)
app.use(router);
registerPlugins(app)
app.mount('#app')
app.use(PrimeVue);
