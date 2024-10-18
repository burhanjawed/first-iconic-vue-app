<template>
  <ion-img :src="image" :alt="title"></ion-img>
  <h2>{{ title }}</h2>
  <p>{{ description }}</p>
</template>

<script>
import { IonImg } from '@ionic/vue';

export default {
  props: ['title', 'image', 'description'],

  components: {
    IonImg,
  },
};
</script>
