<template>
  <div class="buttons">
    <Button
      @click="handleClick(true)"
      :isPrimary="isClicked.active"
      :styles="{
        'border-radius': '0px',
        border: 'none',
        width: '15rem',
        color: isClicked.archive ? '#c4c4c4' : 'inherit',
        'border-top-left-radius': '5px',
        'border-bottom-left-radius': '5px',
      }"
      :buttonText="leftText"
    />
    <Button
      @click="handleClick(false)"
      class=".button"
      :isPrimary="isClicked.archive"
      :styles="{
        'border-radius': '0px',
        border: 'none',
        width: '15rem',
        color: isClicked.active ? '#c4c4c4' : 'inherit',
        'border-top-right-radius': '5px',
        'border-bottom-right-radius': '5px',
      }"
      :buttonText="rightText"
    />
  </div>
</template>
<script lang="ts">
import { reactive } from "@vue/reactivity";
import { defineComponent, PropType } from "vue";
import Button from "../Button.vue";

export default defineComponent({
  components: { Button },
  props: {
    leftText: {
      type: String as PropType<string>,
      default: "Published",
    },
    rightText: {
      type: String as PropType<string>,
      default: "Archive",
    },
  },
  setup(props, ctx) {
    function handleClick(isActive: boolean) {
      isClicked.active = isActive;
      isClicked.archive = !isActive;
      ctx.emit("handleClick", isActive);
    }
    const isClicked = reactive({
      active: true,
      archive: false,
    });
    return { isClicked, handleClick };
  },
});
</script>
<style lang="scss" scoped>
.buttons {
  display: flex;
  margin-left: auto;
  margin-right: auto;
}
</style>
