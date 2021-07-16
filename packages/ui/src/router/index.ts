import JobOfferPage from "@/views/JobOfferPage.vue"
import LoginPage from "@/views/LoginPage.vue"
import RegisterPage from "@/views/RegisterPage.vue"
import RegisterContactInfoPage from "@/views/RegisterContactInfoPage.vue"
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
  {
    path: "/register",
    name: "Register ",
    component: RegisterPage
  },
  {
    path: "/register-contact-info",
    name: "Register Contact Information",
    component: RegisterContactInfoPage
  },

];
const router = createRouter({
  history:createWebHistory(),
  routes
});



export default router;

