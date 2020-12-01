<template>
  <teleport to="#modal">
    <AddUpdateForm v-if="showForm" />
  </teleport>
  <div class="options">
    <button @click="showPastEvents = !showPastEvents">show past events</button>
    <button class="addNew" @click="showForm = !showForm">&#43;</button>
  </div>
  <ul>
    <li v-for="event in orderEvents" :key="event.id">
      <Event
        :event="event"
        :daysLeft="daysLeft(event)"
        :showPastEvents="showPastEvents"
      />
    </li>
  </ul>
</template>

<script>
const eventData = [
  {
    id: 1,
    name: "Graduation",
    details: "wooohoo!!!",
    date: "2020-09-25",
    background: "#F34949",
  },
  {
    id: 2,
    name: "Holidays",
    details: "wooohoo!!!",
    date: "2021-12-30",
    background: "#f9f970",
  },
  {
    id: 3,
    name: "HolidayYYYY",
    details: "Get me outta here!",
    date: "2020-10-07",
    background: "#7AD3F0",
  },
  {
    id: 4,
    name: "Birthday",
    details: "My birthday party",
    date: "2020-10-08",
    background: "#F07AEC",
  },
  {
    id: 5,
    name: "Christmas",
    details: "ho ho ho",
    date: "2020-12-05",
    background: "#EB9A0F",
  },
  {
    id: 6,
    name: "Conference Talk",
    details: "dont flop",
    date: "2021-02-28",
    background: "#68EE94",
  },
];

import Event from "./components/Event.vue";
import AddUpdateForm from "./components/AddUpdateForm";

export default {
  name: "App",
  components: {
    Event,
    AddUpdateForm,
  },
  data() {
    return {
      events: eventData,
      showPastEvents: true,
      showForm: false,
    };
  },
  methods: {
    daysLeft(event) {
      const Time = Date.parse(event.date) - Date.now();
      const Days = Math.ceil(Time / (1000 * 3600 * 24));
      return Days;
    },
  },
  computed: {
    orderEvents() {
      const eventsToOrder = this.events;
      return eventsToOrder.sort((a, b) => (a.date > b.date ? 1 : -1));
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  max-width: 600px;
  margin: 0 auto;
}

ul {
  padding: 0;
}

li {
  list-style: none;
  cursor: pointer;
}
</style>
