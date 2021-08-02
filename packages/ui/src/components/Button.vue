<template>
  <button
    :disabled="isDisabled"
    @click="onClick"
    class="button"
    :style="[
      isPrimary
        ? {
            color: '#ffff',
            backgroundColor: '#39a9cb',
          }
        : {
            color: '#39a9cb',
            backgroundColor: '#ffff',
          },
      styles,
    ]"
  >
    <img
      v-if="iconName"
      class="icon"
      :src="require(`@/assets/svg/${iconName}`)"
      :style="[
        isPrimary
          ? {
              filter:
                'invert(89%) sepia(100%) saturate(0%) hue-rotate(66deg) brightness(110%) contrast(99%)',
            }
          : {
              filter:
                'invert(81%) sepia(23%) saturate(7224%) hue-rotate(158deg)brightness(88%) contrast(78%)',
            },
      ]"
    />

    <span class="span" :style="{ fontSize: fontSize }">{{ buttonText }} </span>
  </button>
</template>
<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "Button",
  props: {
    onClick: {
      type: Function as PropType<() => void>,
    },

    buttonText: {
      type: String as PropType<string>,
      required: true,
    },
    isPrimary: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    iconName: {
      type: String as PropType<string>,
      required: false,
    },
    styles: {
      type: Object as PropType<Object>,
    },
    fontSize: {
      type: String as PropType<string>,
      default: "1.6rem",
    },
    isDisabled: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
  },
});
</script>
<style lang="scss" scoped>
.button {
  cursor: pointer;
  outline: none;
  border: 1.5px solid $highlit-blue;
  border-radius: 5px;
  padding: 0.5rem 0rem;
  width: 12rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  transition: all 0.2s ease-in-out;

  &:hover:enabled {
    transform: scale(1.1);
  }
  .span {
    text-align: center;
    font-family: "Poppins";
    font-weight: bolder;
  }
  &:disabled {
    opacity: 0.7;
    cursor: default;
  }
}
.icon {
  height: 2.5rem;
  width: 2.5rem;
}
</style>