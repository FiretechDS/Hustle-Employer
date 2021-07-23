<template>
  <transition name="modal-fade">
    <div class="modal-backdrop" @click="close">
      <div class="modal" @click.stop>
        <header class="modal-header">
          <slot name="header"> This is the default title! </slot>
          <img
            class="btn-close"
            src="@/assets/svg/letra-x.png"
            @click="close"
            id="close-modal-button"
          />
        </header>

        <section class="modal-body">
          <slot name="body"> This is the default body! </slot>
        </section>

        <footer class="modal-footer">
          <slot name="footer"> This is the default footer! </slot>
        </footer>
      </div>
    </div>
  </transition>
</template>


<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Modal",
  setup(props, ctx) {
    function close() {
      ctx.emit("close");
    }
    return {
      close,
    };
  },
});
</script>

<style lang="scss" scoped>
.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
}

.modal {
  background: #ffffff;
  z-index: 3;
  //  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  max-width: 70rem;
}

.modal-header,
.modal-footer {
  padding: 15px;
  //display: flex;
}

.modal-header {
  position: relative;
  //  border-bottom: 1px solid #eeeeee;
  color: $font-dark;
  justify-content: space-between;
  font-size: $medium-font;
  margin-left: 4rem;
}

.modal-footer {
  //  border-top: 1px solid #eeeeee;
  flex-direction: column;
  justify-content: flex-end;
}

.modal-body {
  position: relative;
  padding: 0px 10px;
}

.btn-close {
  position: absolute;
  top: 0.6rem;
  right: 0.6rem;
  padding: 10px;
  cursor: pointer;
  height: 1.5rem;
  filter: $filter-gray;
}

.modal-fade-enter,
.modal-fade-leave-to {
  opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.5s ease;
}
</style>