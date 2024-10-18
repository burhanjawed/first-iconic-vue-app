<template>
  <base-layout page-title="All Memories"> </base-layout>
</template>

<script>
import { IonList, IonItem, IonImg, IonThumbnail, IonLabel } from '@ionic/vue';

export default {
  components: {
    IonList,
    IonItem,
    IonImg,
    IonThumbnail,
    IonLabel,
  },
  computed: {
    memories() {
      return this.$store.getters.memories;
    },
  },
};
</script>
