<template>
  <div class="container">
    <div class="flex">
      <h1 class="title">Select an offer:</h1>
      <Multiselect
        :options="offers"
        v-model="selected"
        placeholder="Pick to get candidates..."
        class="select"
      />
      <Button
        :isDisabled="selected === null"
        buttonText="Manage Candidates"
        :onClick="goToCandidates"
        :isPrimary="true"
        fontSize="2.2rem"
        :styles="{
          width: '28rem',
        }"
      />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, Ref, ref, watch } from "vue";
import Multiselect from "@vueform/multiselect";
import Button from "../Button.vue";
import router from "../../router";
export default defineComponent({
  components: { Multiselect, Button },
  setup() {
    const offers: Array<{
      value: number;
      label: string;
    }> = reactive([
      { value: 1, label: "A fake offer" },
      { value: 2, label: "Another fake offer" },
    ]);
    const selected: Ref<number | null> = ref(null);
    const goToCandidates = () => {
      router.push({ path: `/candidates/${selected.value}` });
    };
    return {
      selected,
      offers,
      goToCandidates,
    };
  },
});
</script>
<style lang="scss" scoped>
.flex {
  margin: 0 auto;
  margin-top: 20rem;
  width: 50rem;
  height: 40rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  .title {
    color: $white;
    font-size: 4rem;
    margin: 0;
  }
  .select {
    width: 50rem;
    margin: 0;
    color: $font-gray;
    font-size: $medium-small-font;
  }
}
.container {
  position: absolute;
  height: 100%;
  width: 100%;
  background: linear-gradient(
      115.8deg,
      rgba(57, 169, 203, 0.8) 2.27%,
      rgba(53, 112, 138, 0.8) 18.55%,
      rgba(48, 53, 71, 0.8) 92.22%
    ),
    url("../../../public/img/blue-buildings.jpg");
  background-blend-mode: darken;
}
.multiselect .multiselect-dropdown .multiselect-options .multiselect-option {
  font-size: 2rem;
}
</style>
