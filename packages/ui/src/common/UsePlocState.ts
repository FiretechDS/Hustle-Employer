import { DeepReadonly, onMounted, onUnmounted, readonly, Ref, ref } from "vue";
import {Ploc} from "../../../core/src/common/presentation/Ploc" 


//Engancha cualquier componente de Vue a la lógica manejado desde core
export function usePlocState<S>(ploc:Ploc<S>):/*DeepReadonly<Ref<S>>*/Ref<S>{
  const state = ref(ploc.state) as Ref<S>

  const stateSubscription = (newState:S)=>{
    state.value = newState
  }

  onMounted(()=>{
    ploc.subscribe(stateSubscription)
  } )

  onUnmounted(()=>{
    ploc.unsubscribe(stateSubscription)
  })

  return state;
}