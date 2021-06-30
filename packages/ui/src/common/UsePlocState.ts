import { readonly } from "@vue/reactivity"
import { ref } from "@vue/reactivity"
import { onMounted } from "@vue/runtime-core"
import { DeepReadonly, onUnmounted, Ref } from "@vue/runtime-dom"
import {Ploc} from "../../../core/src/common/presentation/Ploc" 


//Engancha cualquier componente de Vue a la lógica manejado desde core
export function usePlocState<S>(ploc:Ploc<S>):DeepReadonly<Ref<S>>{
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

  return readonly(state);
}