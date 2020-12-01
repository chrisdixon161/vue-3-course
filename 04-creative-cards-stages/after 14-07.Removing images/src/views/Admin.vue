<template>
  <h1>Admin</h1>
</template>

<script>
import { onBeforeRouteLeave } from 'vue-router';

export default {
  // beforeRouteLeave() {
  //   const confirm = window.confirm(
  //     'Do you really want to leave? you have unsaved changed'
  //   );
  //   if (!confirm) return false;
  // },
  setup() {
    onBeforeRouteLeave(() => {
      const confirm = window.confirm(
        'Do you really want to leave? you have unsaved changed'
      );
      if (!confirm) return false;
    });
  },
};
</script>
