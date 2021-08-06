import { ComponentCustomProperties } from 'vue'
import { Store } from 'vuex'
import { loginProps } from '../../core/src/employer/domain/EmployerDomainMapper'

declare module '@vue/runtime-core' {
  // Declare your own store states.
  interface State {
    user: loginProps
  }

  interface ComponentCustomProperties {
    $store: Store<State>
  }
}