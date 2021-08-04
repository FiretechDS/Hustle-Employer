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
    default: ;
  }
})