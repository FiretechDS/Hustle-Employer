import router from "@/router"
import { Module } from "vuex"
import { loginProps } from "../../../core/src/employer/domain/EmployerDomainMapper"
import {registerLocator} from "../../../core/src/common/dependencies/RegisterDependencies"
const noUser:loginProps={
  id:undefined,
  email:'',
  password:'',
}

export const authModule:Module<any,any> = {
  namespaced:true,
  state:{
    userId:undefined,
  },
  getters:{
    authenticated(state):boolean{
      return state.userId!==undefined
    },
    user (state):number{
      return state.userId
    }
  },
  mutations:{
    SET_USER(state,userId){
      state.userId =userId
    }
  },
  actions:{
    async login({dispatch},credentials:loginProps):Promise<string>{
      let error = ''
      const loginService = registerLocator.provideLoginService()
      const response =await loginService.login(credentials)
      response.fold(
        (err)=>{
          console.log(err)
          error = err.kind==='ApiError'?err.message:err.message.message
        },
        async (props)=>{
         await dispatch('attempt',props.id)
          router.push('/offers')
        }
      )
      return new Promise( (resolve,reject)=>{
        resolve(error)
      })
    },

    async attempt ({commit},user:number){
      if (user){
        commit('SET_USER',user)
      }
    },

    logout({commit}){
      commit('SET_USER',undefined)
     router.push('/login')
    }
  }
}