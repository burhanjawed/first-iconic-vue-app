<template>
  <base-layout page-title="Add a Memory" page-default-back-link="/memories">
    <form class="ion-padding">
      <ion-list>
        <ion-item>
          <ion-label position="floating">Title</ion-label>
          <ion-input type="text" required />
        </ion-item>
        <ion-item>
          <ion-label position="floating">Image URL</ion-label>
          <ion-input type="url" required />
        </ion-item>
        <ion-item>
          <ion-label position="floating">Description</ion-label>
          <ion-textarea rows="5"></ion-textarea>
        </ion-item>
      </ion-list>
      <ion-button expand="full" fill="outline">Save</ion-button>
    </form>
  </base-layout>
</template>

<script>
import {
  IonList,
  IonItem,
  IonLabel,
  IonInput,
  IonTextarea,
  IonButton,
} from '@ionic/vue';
import BaseLayout from '../components/base/BaseLayout.vue';

export default {
  components: {
    BaseLayout,
    IonList,
    IonItem,
    IonLabel,
    IonInput,
    IonTextarea,
    IonButton,
  },
};
</script>
BaseLayout
