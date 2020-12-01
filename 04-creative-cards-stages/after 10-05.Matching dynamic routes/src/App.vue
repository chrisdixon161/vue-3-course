<template>
  <div id="nav">
    <router-link :to="{ name: 'Home', params: { userId: user.id } }"
      >Home</router-link
    >
    |
    <router-link :to="{ name: 'About', query: { token: 'sadsacedtew' } }"
      >About</router-link
    >
    |
    <router-link
      :to="{ name: 'Account', params: { userId: user.id, post: 123 } }"
      >Account</router-link
    >
  </div>
  <router-view />
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: 'Chris',
        id: 12345,
      },
    };
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

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
