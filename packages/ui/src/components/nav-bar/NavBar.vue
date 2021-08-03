<template>
  <div>
    <div v-if="authenticated" class="navContainer">
      <div class="left">
        <img :src="require('@/assets/logo-hustle.svg')" />
      </div>
      <ul class="center">
        <router-link to="/offers">
          <li class="link" :class="{ selected: path === '/offers' }">Offers</li>
        </router-link>
        <router-link to="/candidates">
          <li
            class="link"
            :class="{ selected: path.indexOf('/candidates') >= 0 }"
          >
            Candidates
          </li>
        </router-link>
        <router-link to="/jobs">
          <li class="link" :class="{ selected: path === '/jobs' }">Jobs</li>
        </router-link>
        <router-link to="/messages">
          <li class="link" :class="{ selected: path === '/messages' }">
            Messages
          </li>
        </router-link>
      </ul>
      <div class="right">
        <div class="dropdown">
          <CircleIcon iconName="user.svg" />
          <div class="dropdown-content">
            <router-link to="/">
              <div>Profile</div>
            </router-link>
            <router-link to="/">
              <div>Ratings</div>
            </router-link>
            <div :style="{ cursor: 'pointer' }" @click="logout">Sign out</div>
          </div>
        </div>
        <CircleIcon iconName="bell.svg" />
      </div>
    </div>
    <div class="navContainer" v-else>
      <div class="left">
        <img :src="require('@/assets/logo-hustle.svg')" />
      </div>
      <ul class="right-login">
        <router-link to="/login">
          <li class="link" :class="{ selected: path === '/login' }">Sign In</li>
        </router-link>
        <router-link to="/register">
          <li class="link" :class="{ selected: path === '/register' }">
            Sign Up
          </li>
        </router-link>
      </ul>
    </div>
  </div>
</template>
<script lang="ts">
import { computed, ComputedRef, defineComponent } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import CircleIcon from "./CircleIcon.vue";

export default defineComponent({
  components: { CircleIcon },
  name: "NavBar",
  setup() {
    const store = useStore();
    const route = useRoute();
    const path = computed(() => route.path);
    const authenticated: ComputedRef<boolean> = computed(
      () => store.getters["authModule/authenticated"]
    );
    function logout() {
      store.dispatch("authModule/logout");
    }
    return {
      path,
      authenticated,
      logout,
    };
  },
});
</script>

<style lang="scss" scoped>
/*.dropdown {
  width: 4rem;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
}*/
.navContainer {
  background-color: $white;
  height: 6.5rem;
  width: 100%;
  display: flex;
  justify-content: center;
  .left {
    margin-right: auto;
    margin-left: 10rem;
    width: 16rem;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 14rem;
    }
  }
  .center {
    display: flex;
    width: 50rem;
    align-items: center;
    justify-content: space-around;
    color: $font-gray;
    list-style: none;
  }
  .right-login {
    display: flex;
    width: 25rem;
    color: $font-gray;
    align-items: center;
    justify-content: space-around;
    margin-left: auto;
    margin-right: 10rem;
    list-style: none;
  }
  .right {
    margin-left: auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-right: 10rem;
    width: 13rem;
  }
  .link {
    width: 12rem;
    text-align: center;
    padding: 1rem 0rem;
    cursor: pointer;
    &:hover {
      color: $highlit-blue;
    }
  }
  .selected {
    font-weight: bolder;
    color: $font-dark;
    border-bottom: 4px solid $highlit-blue;
  }
}
</style>