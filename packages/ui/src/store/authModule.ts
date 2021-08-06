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
    data:{
      email:'',
      password:''
    }
  },

  getters:{
    authenticated(state):boolean{
      return state.userId!==undefined
    },
    user (state):number{
      return state.userId
    },data(state):{email:string,password:string}{
      return state.data
    }
  },
  mutations:{
    SET_USER(state,userId){
      state.userId =userId
    },
    SET_DATA(state,loginProps:loginProps){
      state.data = loginProps
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
         await dispatch('attempt',props)
          router.push('/offers')
        }
      )
      return new Promise( (resolve,reject)=>{
        resolve(error)
      })
    },

    async attempt ({commit},user:loginProps){
      //if (user){
        commit('SET_USER',user.id)
        commit('SET_DATA',user)
      //}
    },

    logout({commit}){
      commit('SET_USER',undefined)
      commit('SET_DATA',undefined)
      router.push('/login')
    }
  }
}