<template>
  <div>
    <WhiteVerticalCard>
      <template v-slot:header>
        <div class="header">
          <span class="title">Employer Access</span>
          <div v-if="state.loading" :loading="state.loading" class="loader">
            <Loader color="#39a9cb" />
          </div></div
      ></template>
      <template v-slot:body>
        <div class="content-login">
          <input
            v-model="loginData.email"
            class="input-login"
            placeholder="Email"
            id="mail-login"
            type="text"
          />
          <input
            v-model="loginData.password"
            class="input-login"
            placeholder="Password"
            id="password-login"
            type="password"
          />
          <p class="error">{{ state.error }}</p>

          <Button
            buttonText="Login"
            :isPrimary="true"
            @click="login()"
            id="login-button"
            :style="{ width: '23.6rem', height: '3.6rem' }"
          />
          <div class="bottom-flex">
            <div class="white-card-forgot">
              <p>
                Forgot your password? click <span class="blue-text">here</span>
              </p>
            </div>
            <div class="gray-line"></div>
            <p>Don’t have an account?</p>
            <router-link to="/register">
              <Button
                buttonText="Register"
                :isPrimary="false"
                id="register-button"
                :style="{ width: '23.6rem', height: '3.6rem' }"
              />
            </router-link>
          </div>
        </div>
      </template>
    </WhiteVerticalCard>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import WhiteVerticalCard from "../WhiteVerticalCard.vue";
import Button from "../Button.vue";
import { useStore } from "vuex";
import Loader from "../Loader.vue";

export default defineComponent({
  setup() {
    const loginData = reactive({
      email: "" as string,
      password: "" as string,
    });
    const state = reactive({
      loading: false as boolean,
      error: "" as string,
    });
    const store = useStore();
    console.log(store.getters["authModule/user"]);
    async function login(): Promise<void> {
      state.error = "";
      state.loading = true;
      state.error = await store.dispatch("authModule/login", loginData);
      console.log(store.getters["authModule/authenticated"]);
      state.loading = false;
    }

    return { loginData, login, state };
  },
  components: { WhiteVerticalCard, Button, Loader },
  name: "LoginMain",
});
</script>

<style lang="scss" scoped>
.white-card-forgot {
  display: flex;
  margin-top: 1rem;
  margin-bottom: 1rem;
}
.header {
  display: flex;
  align-items: center;
  justify-content: center;
}
.loader {
  transform: translate(3rem, -1rem);
}
.blue-text {
  color: $highlit-blue;
  text-decoration: underline;
  cursor: pointer;
}
.error {
  margin: 0;
  color: $highlit-darkblue;
  text-align: left;
}
.bottom-flex {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.content-login {
  padding-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  //  justify-content: space-around;
  width: 43rem;
  height: 36rem;
  margin-right: 2rem;
  margin-left: 2.2rem;
}
.input-login {
  font-family: "Poppins";
  margin-bottom: 2.5rem;
  display: inline-block;
  border-radius: 8px;
  border-color: transparent;
  padding: 6px;
  //margin-bottom: 0.5rem;
  width: 25%;
  color: $font-gray;
  background: $lighter-gray;
  width: 22rem;
  //  text-align: center;
  text-indent: 0.7rem;
}
.gray-line {
  background: $font-light;
  width: 30rem;
  height: 0.1rem;
  border-radius: 10px;
}
</style>
