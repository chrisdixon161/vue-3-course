<template>
  <div class="app_wrapper">
    <header>
      <h1>Chris's Dashboard</h1>
    </header>
    <div class="content">
      <aside>
        <sidebar>
          <template #default="{page}">
            <a>{{page}}</a>
          </template>
        </sidebar>
      </aside>
      <main>
        <small><span class="blue">dashboard</span> / Overview</small>
        <Overview :quantityOfItemsSold='32' :totalSalesValue='197' bestSeller='Vue hoodie- medium'/>
      </main>
    </div>
  </div>
</template>

<script>
import Overview from './views/Overview'
import Sidebar from './components/Sidebar'
export default {
  name: 'App',
  components: {
    Overview,
    Sidebar
  } 
}
</script>

<style>
.app_wrapper {
  font-family: Avenir, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
header {
  background: white;
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
}

header h1 {
  font-size: 1.4rem;
}

.content {
  display: flex;
}

aside {
  flex: 1;
  border-right: 1px solid #ddd;
  min-height: 100vh;
}
main {
  flex: 3;
  padding: 1rem;
}

.blue {
  color: rgb(25,149,243);
}

h4 {
  margin: 0;
  padding-bottom: 1.6rem;
}

.light-text {
  font-weight: 300;
}

.stats {
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 1rem;
}

</style>
