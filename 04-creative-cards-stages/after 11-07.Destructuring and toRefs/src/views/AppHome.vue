<template>
  <ul class="grid_wrapper">
    user:
    {{
      data
    }}
    email:
    {{
      email
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
import { reactive, isReactive, ref, toRefs } from 'vue';

export default {
  setup() {
    const data = reactive({
      name: 'chris',
      occupation: 'web developer',
      email: 'hi@hi.com',
    });

    const { email } = toRefs(data);

    let user = ref('chris');

    console.log(isReactive(allCards));

    setTimeout(() => {
      data.email = 'updated@hi.com';
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
    };
  },
};
</script>
