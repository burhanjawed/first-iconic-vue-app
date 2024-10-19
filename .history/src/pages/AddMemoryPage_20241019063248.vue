<template>
  <base-layout page-title="Add a Memory" page-default-back-link="/memories">
    <create-memory-form @save-memory="saveMemory"></create-memory-form>
  </base-layout>
</template>

<script>
import BaseLayout from '../components/base/BaseLayout.vue';
import CreateMemoryForm from '../components/memories/CreateMemoryForm.vue';

export default {
  components: {
    BaseLayout,
    CreateMemoryForm,
  },

  methods: {
    saveMemory(memoryData) {
      this.$store.dispatch('addMemory', memoryData);
    },
  },
};
</script>
BaseLayout
