import { cards } from '../data';
import { ref } from 'vue';

export default function useCards() {
  const allCards = ref(cards);
  return {
    allCards,
  };
}
