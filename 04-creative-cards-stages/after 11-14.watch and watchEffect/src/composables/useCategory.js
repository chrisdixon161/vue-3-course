import useCards from './useCards';
import { computed, ref, watch } from 'vue';
import { useRoute } from 'vue-router';

export default function useCategory() {
  const route = useRoute();
  const { allCards } = useCards();
  let uniqueCategories = new Set();

  uniqueCategories.add('all');
  allCards.value.forEach((card) => {
    card.categories.forEach((category) => {
      uniqueCategories.add(category);
    });
  });

  const category = ref(route.params.category);
  watch(
    () => route.params.category,
    () => {
      category.value = route.params.category;
    }
  );

  const cardsByCategory = computed(() => {
    if (category.value === 'all') return allCards.value;
    return allCards.value.filter((card) =>
      card.categories.includes(category.value)
    );
  });

  return {
    uniqueCategories,
    cardsByCategory,
  };
}
