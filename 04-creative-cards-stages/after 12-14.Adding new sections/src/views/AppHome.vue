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

<style scoped>
.category_item {
  background: linear-gradient(30deg, rgb(253, 207, 207), rgb(140, 140, 236));
  padding: 6rem 0;
}

ul {
  margin-top: 1rem;
}

li a {
  font-size: 20px;
}
</style>
