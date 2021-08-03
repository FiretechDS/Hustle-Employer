import { createApp } from "vue";
import App from "./App.vue";
import router from "./router"
import PrimeVue from 'primevue/config';
import ConfirmationService from 'primevue/confirmationservice';
import { store } from "./store";
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import PerfectScrollbar from 'vue3-perfect-scrollbar'
import 'vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css'
require('@/store/suscriber')

store.dispatch('authModule/attempt',localStorage.getItem('user')).then(()=>{
  createApp(App).use(router).use(PrimeVue).use(ConfirmationService).use(store).use(PerfectScrollbar).mount("#app");
})

