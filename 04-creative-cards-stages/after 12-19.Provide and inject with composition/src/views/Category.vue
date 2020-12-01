<template>
  <h1>Category: {{ $route.params.category }}</h1>
  <ul class="grid_wrapper">
    <li v-for="card in cardsByCategory" :key="card.id">
      <router-link :to="`/create/${card.id}/front`">
        <img
          :src="require(`@/assets/images/card-previews/${card.id}.jpg`)"
          alt=""
        />
      </router-link>
    </li>
  </ul>
</template>

<script>
import useCategory from '@/composables/useCategory';

export default {
  setup() {
    const { cardsByCategory } = useCategory();
    return {
      cardsByCategory,
    };
  },
};
</script>
