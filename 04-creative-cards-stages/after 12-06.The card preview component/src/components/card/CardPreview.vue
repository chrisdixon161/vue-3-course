<template>
  <div
    class="card_preview_wrapper"
    :style="{
      background: `url(${selectedPage.background})`,
      backgroundSize: '100%',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: `${selectedPage.backgroundPosition}`,
    }"
  >
    <div v-for="section in selectedPage.sections" :key="section.id">
      {{ section.userInput }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    selectedPage: {
      type: Object,
      required: true,
    },
  },
};
</script>
<style scoped>
.card_preview_wrapper {
  width: 450px;
  height: 600px;
  overflow: hidden;
}
</style>
