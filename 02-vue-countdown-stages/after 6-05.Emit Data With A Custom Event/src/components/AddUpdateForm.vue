<template>
  <div class="form_wrapper">
    <form>
      {{ event }}
      <span @click="this.$emit('close-form')" class="close"> &#10060; </span>
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
        <button @click.prevent="$emit('add-new-event', event)">add</button>
      </div>
    </form>
  </div>
</template>


<script>
export default {
  emits: ["close-form", "add-new-event"],
  data() {
    return {
      event: {},
    };
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