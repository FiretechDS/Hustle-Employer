<template>
  <div>
    <div class="white-card">
      <div class="modal">
        <header class="white-card-header">
          <slot name="header"> This is the default title! </slot>
        </header>

        <section class="white-card-body">
          <slot name="body"> This is the default body! </slot>
        </section>

        <footer class="modal-footer">
          <slot name="footer"> This is the default footer! </slot>
        </footer>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "WhiteVerticalCard"
});
</script>

<style lang="scss" scoped>
.white-card{
  background: #ffffff;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  width: 50rem;
  height: 60rem;
  align-content: space-around;
  margin-top: 7rem;
  margin-left: 63rem;
}
.white-card-header{
  color: $font-dark;
  font-size: 3rem;
  text-align: center;
  padding: 1rem;
}
.white-card-body{
  color: $font-dark;
  font-size: 3rem;
  text-align: center;
  padding: 1rem;
}
</style>