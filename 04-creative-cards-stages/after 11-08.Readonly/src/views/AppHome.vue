<template>
  <ul class="grid_wrapper">
    user: readonly:
    {{
      readOnlyData.email
    }}
    user:
    {{
      data.email
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
import { reactive, isReactive, ref, toRefs, readonly } from 'vue';

export default {
  setup() {
    const data = reactive({
      name: 'chris',
      occupation: 'web developer',
      email: 'hi@hi.com',
    });

    const readOnlyData = readonly(data);

    const { email } = toRefs(data);

    let user = ref('chris');

    console.log(isReactive(allCards));

    setTimeout(() => {
      readOnlyData.email = 'updated@hi.com';
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
      user,
      email,
      readOnlyData,
    };
  },
};
</script>
