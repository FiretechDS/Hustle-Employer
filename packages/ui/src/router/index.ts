import JobOfferPage from "@/views/JobOfferPage.vue";
import CandidatesPage from "@/views/CandidatesPage.vue";
import LoginPage from "@/views/LoginPage.vue"
import RegisterPage from "@/views/RegisterPage.vue"
import JobsPage from "@/views/JobsPage.vue"
import ProfilePage from "@/views/ProfilePage.vue"
import CandidateSelect from "@/components/candidates/CandidateSelect.vue"
import {createRouter,createWebHistory}  from "vue-router";
import { store } from "@/store";
//we can implement lazyloading hereee lets gooo
const routes = [
  {
    path: "/offers",
    name: "Job offers",
    component: JobOfferPage,
    meta:{
      requiresAuth:true
    }
  },
   {
    path: "/candidates",
    name: "Select candidates",
    component: CandidateSelect,
    meta:{
      requiresAuth:true
    }
  },
  {
    path: "/candidates/:id",
    name: "Candidates",
    component: CandidatesPage,
    meta:{
      requiresAuth:true
    }
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
    path: "/jobs",
    name: "Jobs",
    component: JobsPage,
    meta:{
      requiresAuth:true
    }
  },
  {
    path: "/profile",
    name: "Profile ",
    component: ProfilePage
  },
];
const router = createRouter({
  history:createWebHistory(),
  routes
});

router.beforeEach((to,from,next)=>{
  const requiresAuth = to.matched.some(record=>record.meta.requiresAuth)
  const isAuthenticated = store.getters['authModule/authenticated']
  if (to.path==='/'){
    if (isAuthenticated){
      next({path:'/offers'})
    }else{
      next({path:'/login'})
    }
  }
  else if (requiresAuth && !isAuthenticated){
    next({path:'/login'})
  }else next()
} )

export default router;
