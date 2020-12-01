<template>
  <ImageUpload />
  <div class="add_section_wrapper">
    <button v-if="selectedPage.sections?.length < 4" @click="addSection()">
      Add new text section
    </button>
  </div>
  <div v-for="(section, index) in selectedPage.sections" :key="section.id">
    <TextInput :section="section" :sectionIndex="index" />
  </div>
</template>

<script>
import TextInput from './TextInput';
import useCurrentCard from '@/composables/useCurrentCard';
import ImageUpload from '@/components/card/ImageUpload';

export default {
  components: {
    TextInput,
    ImageUpload,
  },
  props: {
    selectedPage: {
      type: Object,
    },
  },
  setup() {
    const { addSection } = useCurrentCard();
    return {
      addSection,
    };
  },
};
</script>

<style scoped>
.add_section_wrapper {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 10px;
}
</style>
