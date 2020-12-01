<template>
  <SwitchPage />
  <div class="card_wrapper">
    <section>
      <CardPreview :selectedPage="selectedPage" />
    </section>
    <section>
      <CardEdit :selectedPage="selectedPage" />
    </section>
  </div>
</template>
<script>
import CardPreview from '@/components/card/CardPreview';
import CardEdit from '@/components/card/CardEdit';
import SwitchPage from '@/components/card/SwitchPage';
import useCurrentCard from '@/composables/useCurrentCard';

export default {
  components: {
    CardPreview,
    CardEdit,
    SwitchPage,
  },
  setup() {
    const { selectedPage } = useCurrentCard();
    return {
      selectedPage,
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
