<template>
  <div class="card_wrapper">
    {{ selectedCard }}
    <section>
      <CardPreview />
    </section>
    <section>
      <CardEdit />
    </section>
  </div>
</template>
<script>
import CardPreview from '@/components/card/CardPreview';
import CardEdit from '@/components/card/CardEdit';
import useCurrentCard from '@/composables/useCurrentCard';

export default {
  components: {
    CardPreview,
    CardEdit,
  },
  setup() {
    const { selectedCard } = useCurrentCard();
    return {
      selectedCard,
    };
  },
};
</script>

<style scoped>
.card_wrapper {
  display: flex;
  background: #eee;
  box-shadow: 1px 1px 2px 2px #ddd inset;
}

.card_wrapper > section {
  flex: 1;
  padding: 10px;
}
</style>
