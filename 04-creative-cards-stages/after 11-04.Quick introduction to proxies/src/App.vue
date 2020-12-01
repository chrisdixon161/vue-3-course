<template>
  <app-header></app-header>
  <router-view />
</template>

<script>
import AppHeader from '@/components/AppHeader';

const state = {
  user: 'chris',
  occupation: 'web developer',
};

const handler = {
  get(target, prop) {
    return prop.toUpperCase();
  },
};

const proxy = new Proxy(state, handler);

console.log(proxy.occupation);

export default {
  components: {
    AppHeader,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
</style>
