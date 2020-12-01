import useCards from './useCards';
import { onMounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import { v4 as uuidv4 } from 'uuid';

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
      id: uuidv4(),
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

  function removeSection(sectionIndex) {
    selectedCard.value.pages[getPageIndex()].sections.splice(sectionIndex, 1);
  }

  function updateSectionOrder(sectionIndex, direction) {
    const arr = selectedCard.value.pages[getPageIndex()].sections;
    if (
      selectedCard.value.pages[getPageIndex()].sections[
        sectionIndex + direction
      ] === undefined
    )
      return;
    [arr[sectionIndex], arr[sectionIndex + direction]] = [
      arr[sectionIndex + direction],
      arr[sectionIndex],
    ];
  }

  function updateImage(url) {
    selectedCard.value.pages[getPageIndex()].background = url;
    selectedCard.value.pages[getPageIndex()].backgroundPosition = 'center';
  }
  function repositionImage(position) {
    selectedCard.value.pages[getPageIndex()].backgroundPosition = position;
  }
  function removeImage() {
    selectedCard.value.pages[getPageIndex()].background = '';
  }

  return {
    selectedCard,
    selectedPage,
    updateCard,
    addSection,
    removeSection,
    updateSectionOrder,
    updateImage,
    repositionImage,
    removeImage,
  };
}
