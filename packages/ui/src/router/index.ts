import JobOfferPage from "@/views/JobOfferPage.vue"
import LoginPage from "@/views/LoginPage.vue"
import {createRouter,createWebHistory}  from "vue-router";
//we can implement lazyloading hereee lets gooo
const routes = [
  {
    path: "/",
    name: "Ofertas de trabajo",
    component: JobOfferPage
  },
  {
    path: "/login",
    name: "Login ",
    component: LoginPage
  },

];
const router = createRouter({
  history:createWebHistory(),
  routes
});



export default router;

