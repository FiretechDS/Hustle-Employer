import JobOfferPage from "@/views/JobOfferPage.vue";
import CandidatesPage from "@/views/CandidatesPage.vue";
import LoginPage from "@/views/LoginPage.vue"
import RegisterPage from "@/views/RegisterPage.vue"
import CandidateSelect from "@/components/candidates/CandidateSelect.vue"
import {createRouter,createWebHistory}  from "vue-router";
//we can implement lazyloading hereee lets gooo
const routes = [
  {
    path: "/",
    name: "Job offers",
    component: JobOfferPage
  },
   {
    path: "/candidates",
    name: "Select candidates",
    component: CandidateSelect
  },
  {
    path: "/candidates/:id",
    name: "Candidates",
    component: CandidatesPage
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
  }


];
const router = createRouter({
  history:createWebHistory(),
  routes
});



export default router;

