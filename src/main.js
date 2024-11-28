import { createApp } from 'vue'
import './index.css'
import App from './App.vue'
import router from './router/router.js'
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
createApp(App)
.component('VueDatePicker', VueDatePicker)
.use(router)
.mount('#app')
