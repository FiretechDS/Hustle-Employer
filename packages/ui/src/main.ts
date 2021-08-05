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

const user = {
  id:localStorage.getItem('user')||undefined,
  email:localStorage.getItem('email')||undefined,
  password:localStorage.getItem('password')||undefined
}

store.dispatch('authModule/attempt',user).then(()=>{
  createApp(App).use(router).use(PrimeVue).use(ConfirmationService).use(store).use(PerfectScrollbar).mount("#app");
})

