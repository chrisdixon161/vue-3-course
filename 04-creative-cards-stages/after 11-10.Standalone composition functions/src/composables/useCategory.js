import useCards from './useCards';

export default function useCategory() {
  const { allCards } = useCards();
  let uniqueCategories = new Set();

  uniqueCategories.add('all');
  allCards.value.forEach((card) => {
    card.categories.forEach((category) => {
      uniqueCategories.add(category);
    });
  });

  return {
    uniqueCategories,
  };
}
