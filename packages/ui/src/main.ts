import { createApp } from "vue";
import App from "./App.vue";
import router from "./router"
import PrimeVue from 'primevue/config';
import ConfirmationService from 'primevue/confirmationservice';
import PerfectScrollbar from 'vue3-perfect-scrollbar'
import 'vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css'
createApp(App).use(router).use(PrimeVue).use(ConfirmationService).use(PerfectScrollbar).mount("#app");
