<template>
  <FadeLoader :color="color" :loading="loading" :size="size" />
</template>
<script lang="ts">
import { defineComponent, PropType } from "vue";
import FadeLoader from "vue-spinner/src/FadeLoader.vue";
export default defineComponent({
  name: "Loader",
  components: { FadeLoader },
  props: {
    color: {
      type: String as PropType<string>,
      default: "#ffeda3",
    },
    loading: {
      type: Boolean as PropType<boolean>,
      default: "",
    },
    size: {
      type: String as PropType<string>,
      default: "15px",
    },
  },
});
</script>
