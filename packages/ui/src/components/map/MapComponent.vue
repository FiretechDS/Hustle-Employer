<template>
  <GoogleMap
    api-key="AIzaSyDOJMPgT-8gTVV1Dqtpb_L2Md7cAf7L-Uk"
    :style="[{ width: '50rem', height: '50rem' }, styling]"
    :center="center"
    :zoom="zoom"
    @click="setMarker"
  >
    <Marker :options="{ position: getPosition }" />
  </GoogleMap>
</template>
<script lang="ts">
import { reactive } from "@vue/reactivity";
import { computed, defineComponent, PropType } from "vue";
import { MapMouseEvent } from "./MapMouseEvent";
import { GoogleMap, Marker } from "vue3-google-map";

export default defineComponent({
  components: { GoogleMap, Marker },
  props: {
    position: {
      type: Object as PropType<{ lat: number; lng: number }>,
      default: { lat: 40.72716120053256, lng: -74.03815269470215 },
    },
    styling: {
      type: Object as PropType<Object>,
    },
    clickable: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    zoom: {
      type: Number as PropType<number>,
      default: 6,
    },
  },
  setup(props, ctx) {
    const center = reactive(props.position);
    function setMarker(mapsMouseEvent: MapMouseEvent): void {
      if (props.clickable) {
        center.lat = mapsMouseEvent.latLng.lat();
        center.lng = mapsMouseEvent.latLng.lng();
        ctx.emit("locationUpdated", getPosition.value);
      }
    }
    const getPosition = computed(() => {
      return {
        lat: center.lat,
        lng: center.lng,
      };
    });
    return { center, setMarker, getPosition };
  },
});
</script>
