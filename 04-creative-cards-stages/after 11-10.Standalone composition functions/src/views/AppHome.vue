<template>
  <ul class="grid_wrapper">
    <li
      class="category_item"
      v-for="category in uniqueCategories"
      :key="category"
    >
      <router-link :to="{ name: 'Category', params: { category } }">
        {{ category }}
      </router-link>
    </li>
  </ul>
</template>

<script>
import useCategory from '@/composables/useCategory';

export default {
  setup() {
    const { uniqueCategories } = useCategory();

    return { uniqueCategories };
  },
};
</script>
