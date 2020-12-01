<template>
  <app-header></app-header>
  <router-view />
</template>

<script>
import AppHeader from '@/components/AppHeader';

export default {
  components: {
    AppHeader,
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

.image-upload-wrapper,
.text-input-wrapper {
  padding: 10px;
  margin-bottom: 10px;
  box-shadow: 1px 1px 2px 2px #ddd inset;
  border-radius: 3px;
}
</style>
