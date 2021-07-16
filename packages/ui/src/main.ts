import { createApp } from "vue";
import App from "./App.vue";
import router from "./router"
import PrimeVue from 'primevue/config';
import ConfirmationService from 'primevue/confirmationservice';
createApp(App).use(router).use(PrimeVue).use(ConfirmationService).mount("#app");
