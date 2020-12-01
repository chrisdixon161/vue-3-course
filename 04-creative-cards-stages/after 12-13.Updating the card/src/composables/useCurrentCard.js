import useCards from './useCards';
import { onMounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router';

export default function useCurrentCard() {
  const { allCards } = useCards();
  const route = useRoute();

  const selectedCard = ref({});
  const selectedPage = ref({});

  function getPageIndex() {
    return selectedCard.value.pages.findIndex(
      (page) => page.name === route.params.page
    );
  }

  function getSelectedPage() {
    selectedPage.value = selectedCard.value.pages[getPageIndex()];
  }
  onMounted(getSelectedPage);

  watch(
    () => route.params.page,
    () => {
      getSelectedPage();
    }
  );

  function updateCard(sectionIndex, data) {
    selectedCard.value.pages[getPageIndex()].sections[sectionIndex] = data;
  }

  [selectedCard.value] = allCards.value.filter(
    (card) => card.id === Number(route.params.id)
  );
  return {
    selectedCard,
    selectedPage,
    updateCard,
  };
}
