<template>
  <div v-for="section in selectedPage.sections" :key="section.id">
    {{ section.userInput }}
  </div>
</template>

<script>
export default {
  props: {
    selectedPage: {
      type: Object,
    },
  },
};
</script>
