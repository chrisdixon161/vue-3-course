<template>
  <div
    class="text-input-wrapper"
    @mouseover="showOptions = true"
    @mouseout="showOptions = false"
  >
    <textarea v-model="currentSection.userInput" cols="50" rows="4"></textarea>
    <div class="menu" v-show="showOptions">MENU</div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  props: {
    section: Object,
  },
  setup(props) {
    const currentSection = ref({ ...props.section });
    const showOptions = ref(false);

    return {
      currentSection,
      showOptions,
    };
  },
};
</script>
