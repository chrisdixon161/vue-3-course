<template>
  <ul class="grid_wrapper">
    {{
      data.occupation
    }}
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
import { reactive, isReactive } from 'vue';

export default {
  setup() {
    const data = reactive({
      name: 'chris',
      occupation: 'web developer',
    });

    console.log(isReactive(allCards));

    setTimeout(() => {
      data.occupation = 'retired';
    }, 3000);

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
      data,
    };
  },
};
</script>
