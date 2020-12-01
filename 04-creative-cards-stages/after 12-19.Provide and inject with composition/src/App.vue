<template>
  <app-header></app-header>
  <router-view />
</template>

<script>
import AppHeader from '@/components/AppHeader';
import { provide, reactive } from 'vue';

export default {
  components: {
    AppHeader,
  },
  setup() {
    const user = reactive({
      name: 'Chris',
      occupation: 'developer',
    });
    provide('user', user);
    setTimeout(() => {
      user.name = 'chris dixon';
    }, 3000);
  },
};
</script>

<style>
#app {
  font-family: 'Merriweather', serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

input,
textarea {
  font-family: 'Merriweather', serif;
}

ul {
  margin: 0;
  padding: 0;
}

li,
li a {
  text-decoration: none;
  list-style: none;
  color: inherit;
}

@media (min-width: 600px) {
  .grid_wrapper {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;
  }
}

@media (min-width: 1000px) {
  .grid_wrapper {
    grid-template-columns: repeat(3, 1fr);
  }
}

img {
  max-width: 100%;
}

button {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 14px;
  padding: 0;
}

button:hover,
li:hover {
  color: rgb(108, 108, 241);
}
</style>
