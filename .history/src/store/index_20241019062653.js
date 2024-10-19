import { createStore } from 'vuex';

const store = createStore({
  state() {
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

  mutations: {
    addMemory(state, memoryData) {
      const newMemory = {
        id: new Date().toISOString(),
        title: memoryData.title,
        image: memoryData.imageUrl,
        description: memoryData.description,
      };

      state.memories.unshift(newMemory);
    },
  },

  actions: {
    addMemory(context, memoryData) {
      context.commit('addMemory', memoryData);
    },
  },

  getters: {
    memories(state) {
      return state.memories;
    },

    memory(state) {
      return (memoryId) =>
        state.memories.find((memory) => memory.id === memoryId);
    },
  },
});

export default store;
