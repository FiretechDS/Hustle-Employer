<template>
  <div>
    <WhiteVerticalCard>
      <template v-slot:header>Employer Access</template>
      <template v-slot:body>
        <div class="content-login">
          <input
            v-model="loginData.mail"
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
          <Button
            buttonText="Login"
            :isPrimary="true"
            @click="login()"
            id="login-button"
            :style="{ width: '23.6rem', height: '3.6rem' }"
          />
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
      </template>
    </WhiteVerticalCard>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import WhiteVerticalCard from "../WhiteVerticalCard.vue";
import Button from "../Button.vue";

export default defineComponent({
  setup() {
    const loginData = reactive({
      mail: "" as string,
      password: "" as string,
    });

    function login(): void{
      console.log("Login");
      console.log(loginData);
    }

    return { loginData, login };
  },
  components: { WhiteVerticalCard, Button },
  name: "LoginMain",
});
</script>

<style lang="scss" scoped>
.white-card-forgot {
  display: flex;
  margin-top: 1rem;
  margin-bottom: 1rem;
}
.blue-text {
  color: $highlit-blue;
  text-decoration: underline;
  cursor: pointer;
}
.content-login {
  padding-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  //  justify-content: space-around;
  width: 43rem;
  height: 34rem;
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
