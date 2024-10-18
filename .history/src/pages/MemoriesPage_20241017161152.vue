<template>
  <base-layout page-title="All Memories">
    <ion-list>
      <ion-item
        v-for="memory in memories"
        :router-link="`/memories/${memory.id}`"
        :key="memory.id"
      >
        <ion-img :src="memory.image" :alt="memory.title"></ion-img>
        {{ memory.title }}
      </ion-item>
    </ion-list>
  </base-layout>
</template>

<script>
import { IonList, IonItem, IonImg } from '@ionic/vue';

export default {
  components: {
    IonList,
    IonItem,
    IonImg,
  },
  data() {
    return {
      memories: [
        {
          id: 'm1',
          image:
            'https://flymetothemoontravel.com/wp-content/uploads/2023/01/MOUNT-OLYMPUS.jpg',
          title: 'A trip into the mountains',
          description: 'It was a really nice trip!',
        },
        {
          id: 'm2',
          image:
            'https://seasideor.b-cdn.net/wp-content/uploads/2018/06/201807Seaside_web_surf2.jpg',
          title: 'Surfing the sea side',
          description: 'Feeling the cool breeze.',
        },
        {
          id: 'm3',
          image:
            'https://www.contiki.com/six-two/app/uploads/2023/01/food-1050813-e1476283676929.jpg',
          title: 'Good eating',
          description: 'Really tasty!',
        },
      ],
    };
  },
};
</script>
