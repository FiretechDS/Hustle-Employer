import { createStore } from "vuex";
import { authModule } from "./authModule";
export const store = createStore({
  state(){

  },
  modules:{
    authModule
  }
})