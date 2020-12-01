<template>
  <div v-for="(section, index) in selectedPage.sections" :key="section.id">
    <TextInput :section="section" :sectionIndex="index" />
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
