<template>
  <div class="container-profile">
      <div class="profile-card-header">
          <slot name="header"> This is the default title! </slot>
      </div>
      <div class="profile-card-body">
          <slot name="body"> This is the default body! </slot>
      </div>
      <div>
          <slot name="footer">  </slot>
      </div>
      
      
      
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, reactive } from "vue";

export default defineComponent({
  name: "ProfileCard",
  
  setup(){
      
  }
});
</script>

<style lang="scss" scoped>
.container-profile{
  background: #ffffff;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  align-content: space-around;
  margin: auto;
  color: $font-gray;
}
.profile-card-header {
  color: $font-dark;
  font-size: $large-font;
  text-align: center;
  margin-top: 2rem;
  margin-bottom: 0.5rem;
  font-weight: bold;
}
.profile-card-body {
  color: $font-dark;
  font-size: $normal-font;
  text-align: center;
  padding: 1rem;
}
</style>