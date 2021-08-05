import { store } from ".";


store.subscribe((mutation)=>{
  switch (mutation.type){
    case 'authModule/SET_USER':
      if(mutation.payload){
        localStorage.setItem('user',mutation.payload)
      }else{
        localStorage.removeItem('user')
      }
    break;
    case 'authModule/SET_DATA':
      console.log(mutation.payload)
      const payload=mutation.payload
      if(payload&&payload.email){
        localStorage.setItem('email',payload.email)
        localStorage.setItem('password',payload.password)
      }else{
        localStorage.removeItem('email')
        localStorage.removeItem('password')
      }
    break;
    default: ;
  }
})