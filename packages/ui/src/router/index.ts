import JobOfferPage from "@/views/JobOfferPage.vue";
import CandidatesPage from "@/views/CandidatesPage.vue";
import {createRouter,createWebHistory}  from "vue-router";
//we can implement lazyloading hereee lets gooo
const routes = [
  {
    path: "/",
    name: "Ofertas de trabajo",
    component: JobOfferPage
  },
  {
    path: "/candidates/:id",
    name: "Candidatos",
    component: CandidatesPage
  },
];
const router = createRouter({
  history:createWebHistory(),
  routes
});



export default router;

