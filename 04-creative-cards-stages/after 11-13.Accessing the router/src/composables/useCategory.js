import useCards from './useCards';
import { computed } from 'vue';

export default function useCategory(category) {
  const { allCards } = useCards();
  let uniqueCategories = new Set();

  uniqueCategories.add('all');
  allCards.value.forEach((card) => {
    card.categories.forEach((category) => {
      uniqueCategories.add(category);
    });
  });

  const cardsByCategory = computed(() => {
    if (category === 'all') return allCards.value;
    return allCards.value.filter((card) => card.categories.includes(category));
  });

  return {
    uniqueCategories,
    cardsByCategory,
  };
}
