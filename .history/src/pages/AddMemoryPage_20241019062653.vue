<template>
  <base-layout page-title="Add a Memory" page-default-back-link="/memories">
    <create-memory-form></create-memory-form>
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
    saveMemory(memoryData) {},
  },
};
</script>
BaseLayout
