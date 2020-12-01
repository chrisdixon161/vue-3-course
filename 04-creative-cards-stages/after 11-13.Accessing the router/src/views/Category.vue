<template>
  <h1>Category: {{ $route.params.category }}</h1>
  <ul class="grid_wrapper">
    <li v-for="card in cardsByCategory" :key="card.id">
      <router-link to="/">{{ card.name }}</router-link>
    </li>
  </ul>
</template>

<script>
import useCategory from '@/composables/useCategory';
import { useRoute } from 'vue-router';

export default {
  setup() {
    const route = useRoute();
    const { cardsByCategory } = useCategory(route.params.category);
    return {
      cardsByCategory,
    };
  },
};
</script>
