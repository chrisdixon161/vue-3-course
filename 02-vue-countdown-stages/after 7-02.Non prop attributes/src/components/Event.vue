<template>
  <article
    v-show="Math.sign(daysLeft) !== -1 || showPastEvents"
    :style="{
      background: event.background,
      color: changeContrast ? '#454444' : 'whitesmoke',
    }"
  >
    <div class="data">
      <h3 class="name">{{ event.name }}</h3>
      <p class="details">{{ event.details }}</p>
    </div>
    <div class="countdown">
      <div class="remove_btn_wrapper">
        <button @click.stop="remove()" class="remove_btn">&#10060;</button>
      </div>
      <p v-if="daysLeft === 0">Today!</p>
      <p v-else>
        {{ Math.abs(daysLeft) }}
        <br />
        <small>{{ daysLeftString }} </small>
      </p>
    </div>
  </article>
</template>
<script>
export default {
  name: "Event",
  // props: ["event", "daysLeft", "showPastEvents"],
  props: {
    event: { type: Object},
    daysLeft: {type: Number, default: 10},
    showPastEvents: {type:Boolean}
  },
  emits: ["remove-event"],
  methods: {
    remove() {
      this.$emit("remove-event", this.event);
    },
  },
  computed: {
    daysLeftString() {
      const dayOrDays = this.daysLeft === 1 ? "day " : "days ";
      const leftOrAgo = Math.sign(this.daysLeft) != -1 ? "left" : "ago";
      return dayOrDays + leftOrAgo;
    },
    changeContrast() {
      const lowContrastBackgrounds = ["#f9f970", "#68EE94"];
      return lowContrastBackgrounds.includes(this.event.background);
    },
  },
};
</script>
<style scoped>
article {
  background: lightslategray;
  display: flex;
  align-items: center;
  border-radius: 1rem;
  margin: 1rem 0;
  padding: 0.2rem 1rem;
  color: whitesmoke;
  font-weight: 300;
}

.data {
  flex: 3;
}

.countdown {
  flex: 1;
  text-align: center;
  font-size: 1.6rem;
  border-left: 1px solid;
}

.name {
  font-size: 1.8rem;
}

.details {
  font-size: 1.6rem;
}

.remove_btn {
  background: transparent;
  border: none;
  cursor: pointer;
}

.remove_btn_wrapper {
  text-align: right;
}
</style>