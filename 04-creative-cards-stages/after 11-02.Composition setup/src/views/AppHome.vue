<template>
  <ul class="grid_wrapper">
    <li
      class="category_item"
      v-for="category in uniqueCategories"
      :key="category"
    >
      <router-link :to="{ name: 'Category', params: { category: category } }">
        {{ category }}
      </router-link>
    </li>
  </ul>
</template>

<script>
import { cards } from '../data';
// import { onMounted } from 'vue';

export default {
  setup() {
    const allCards = cards;
    let uniqueCategories = new Set();

    uniqueCategories.add('all');
    allCards.forEach((card) => {
      card.categories.forEach((category) => {
        uniqueCategories.add(category);
      });
    });

    return {
      uniqueCategories,
    };
  },
};
</script>
