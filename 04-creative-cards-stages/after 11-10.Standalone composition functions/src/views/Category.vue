<template>
  <h1>Category: {{ $route.params.category }}</h1>
  <ul class="grid_wrapper">
    <li v-for="card in cardsByCategory" :key="card.id">
      <router-link to="/">{{ card.name }}</router-link>
    </li>
  </ul>
</template>

<script>
import { cards } from '../data';
import { ref, computed } from 'vue';

export default {
  setup() {
    const allCards = ref(cards);

    const category = 'wife';
    const cardsByCategory = computed(() => {
      if (category === 'all') return allCards.value;
      return allCards.value.filter((card) =>
        card.categories.includes(category)
      );
    });
    return {
      cardsByCategory,
    };
  },
};
</script>
