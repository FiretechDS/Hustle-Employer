<template>
  <div>
    <div class="navContainer">
      <div class="left">
        <img :src="require('@/assets/logo-hustle.svg')" />
      </div>
      <ul class="center">
        <router-link to="/">
          <li class="link" :class="{ selected: path === '/' }">Offers</li>
        </router-link>
        <router-link to="/candidates">
          <li class="link" :class="{ selected: path === '/candidates' }">
            Candidates
          </li>
        </router-link>
        <router-link to="/jobs">
          <li class="link" :class="{ selected: path === '/jobs' }">Jobs</li>
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
            <router-link to="/">
              <div>Sign out</div>
            </router-link>
          </div>
        </div>
        <CircleIcon iconName="bell.svg" />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent } from "vue";
import { useRoute } from "vue-router";
import CircleIcon from "./CircleIcon.vue";

export default defineComponent({
  components: { CircleIcon },
  name: "NavBar",
  setup() {
    const route = useRoute();
    const path = computed(() => route.path);
    return {
      path,
    };
  },
});
</script>

<style lang="scss" scoped>
.navContainer {
  background-color: $white;
  height: 6.5rem;
  width: 100%;
  display: flex;
  justify-content: center;
  .left {
    margin-right: auto;
    margin-left: 5rem;
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
    width: 60rem;
    align-items: center;
    justify-content: space-around;
    color: $font-gray;
    list-style: none;
  }
  .right {
    margin-left: auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-right: 8rem;
    width: 13rem;
  }
  .link {
    width: 12rem;
    text-align: center;
    padding: 1rem 0rem;
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