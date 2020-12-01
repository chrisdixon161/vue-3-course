import useCards from './useCards';
import { ref } from 'vue';
import { useRoute } from 'vue-router';

export default function useCurrentCard() {
  const { allCards } = useCards();
  const route = useRoute();
  console.log(typeof route.params.id);
  const selectedCard = ref({});

  [selectedCard.value] = allCards.value.filter(
    (card) => card.id === Number(route.params.id)
  );
  return {
    selectedCard,
  };
}
