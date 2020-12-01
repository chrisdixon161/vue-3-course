<template>
  <div v-for="section in selectedPage.sections" :key="section.id">
    <TextInput :section="section" />
  </div>
</template>

<script>
import TextInput from './TextInput';

export default {
  components: {
    TextInput,
  },
  props: {
    selectedPage: {
      type: Object,
    },
  },
};
</script>
