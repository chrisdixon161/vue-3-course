<template>
  <div class="form_wrapper">
    <form @keyup.enter.prevent="validate()">
      <div v-if="errors.length > 0">
        <ul>
          <li v-for="error in errors" :key="error">{{ error }}</li>
        </ul>
      </div>
      <span class="close" @click="$emit('close-form')">&#10060;</span>
      <div>
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="event.name" />
      </div>
      <div>
        <label for="details">Details:</label>
        <input type="text" id="details" v-model="event.details" />
      </div>
      <div>
        <label for="date">Date:</label>
        <input type="date" id="date" v-model="event.date" />
      </div>
      <div>
        <label for="background">Background:</label>
        <select id="background" v-model="event.background">
          <option value="#F34949">Red</option>
          <option value="#F07AEC">Pink</option>
          <option value="#997AF0">Purple</option>
          <option value="#7AD3F0">Blue</option>
          <option value="#68EE94">Green</option>
          <option value="#f9f970">Yellow</option>
          <option value="#EB9A0F">Orange</option>
        </select>
      </div>
      <div>
        <button v-if="currentEvent.id" @click.prevent="validate('update')">
          update
        </button>
        <button v-else @click.prevent="validate('add')">add</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  props: ["currentEvent"],
  emits: ["close-form", "add-new-event", "update-event"],
  mounted() {
    this.event = this.currentEvent;
  },
  data() {
    return {
      event: {},
      errors: [],
    };
  },
  methods: {
    addEvent() {
      this.$emit("add-new-event", this.event);
      this.$emit("close-form");
    },

    updateEvent() {
      this.$emit("update-event", this.event);
      this.$emit("close-form");
    },
    validate(type) {
      this.errors = [];
      if (!this.event.name) this.errors.push("Name is required");
      if (!this.event.details) this.errors.push("Event details is required");
      if (!this.event.date) this.errors.push("Event date is required");
      if (!this.event.background)
        this.errors.push("Event background is required");
      if (this.errors.length > 0) return;
      if (type === "add") this.addEvent();
      else this.updateEvent();
    },
  },
};
</script>
<style scoped>
.close {
  align-self: flex-end;
  cursor: pointer;
}

.form_wrapper {
  background: rgba(0, 0, 0, 0.7);
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

form {
  display: flex;
  flex-direction: column;
  background: white;
  min-width: 60vw;
  min-height: 40vh;
  padding: 2rem;
  border-radius: 0.3rem;
}

form > div {
  display: flex;
  flex-direction: column;
  margin: 1rem 0;
  font-size: 1.6rem;
}

form input,
select {
  margin: 0.6rem 0;
  padding: 0.6rem 1rem;
  border: 1px lightgray solid;
  border-radius: 0.3rem;
}

form button {
  background: rgb(123, 194, 123);
  width: 100px;
  border: none;
  padding: 0.6rem;
  border-radius: 0.3rem;
  font-size: 16px;
}

label {
  color: rgb(49, 49, 49);
}
</style>