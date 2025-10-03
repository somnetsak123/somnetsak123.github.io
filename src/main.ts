import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { Quasar } from 'quasar'

//Import icon libraries
import '@quasar/extras/mdi-v7/mdi-v7.css'
import '@quasar/extras/material-icons/material-icons.css'

import 'quasar/src/css/index.sass'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(Quasar, {
  plugins: {},
  config: { dark: 'auto' },
})

app.use(createPinia())
app.use(router)

app.mount('#app')
