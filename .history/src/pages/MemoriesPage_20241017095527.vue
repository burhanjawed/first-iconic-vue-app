<template>
  <base-layout page-title="All Memories">
    <ion-list>
      <ion-item>A trip into the mountains</ion-item>
      <ion-item>Surfing the sea side</ion-item>
      <ion-item>Good eating</ion-item>
    </ion-list>
  </base-layout>
</template>

<script>
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
} from '@ionic/vue';

export default {
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonItem,
  },
};
</script>
