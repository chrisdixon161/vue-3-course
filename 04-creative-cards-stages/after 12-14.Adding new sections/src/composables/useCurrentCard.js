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

  function addSection() {
    if (selectedPage.value.sections.length >= 4) return;
    const newSection = {
      userInput: 'Enter your text here...',
      height: 200,
      color: '#9f9f32',
      fontFamily: 'Verdana',
      fontSize: '2.5rem',
      isItalic: true,
      isBold: false,
      justifyContent: 'center',
      alignItems: 'center',
    };
    selectedCard.value.pages[getPageIndex()].sections.push(newSection);
  }

  return {
    selectedCard,
    selectedPage,
    updateCard,
    addSection,
  };
}
