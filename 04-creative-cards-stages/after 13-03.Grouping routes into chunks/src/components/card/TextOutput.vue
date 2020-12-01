<template>
  <p
    :style="cssObject"
    :class="{ bold: section.isBold, italic: section.isItalic }"
  >
    {{ section.userInput }}
  </p>
</template>

<script>
import { computed } from 'vue';

export default {
  props: {
    section: Object,
  },
  setup(props) {
    const cssObject = computed(() => {
      return {
        border: '1px dotted grey',
        display: 'flex',
        fontFamily: props.section.fontFamily,
        fontSize: props.section.fontSize,
        color: props.section.color,
        height: props.section.height + 'px',
        justifyContent: props.section.justifyContent,
        alignItems: props.section.alignItems,
      };
    });
    return {
      cssObject,
    };
  },
};
</script>

<style>
p {
  margin: 0;
  box-sizing: border-box;
}
.bold {
  font-weight: bold;
}

.italic {
  font-style: italic;
}
</style>
