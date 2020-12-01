<template>
  <div class="app_wrapper">
    <header>
      <h1>Chris's Dashboard</h1>
    </header>
    <div class="content">
      <aside>
        <sidebar></sidebar>
      </aside>
      <main>
        <small><span class="blue">dashboard</span> / {{selectedPage}}</small>
        <component :is="selectedPage.replace(/\s/, '')"></component>
      </main>
    </div>
  </div>
</template>

<script>
import Overview from './views/Overview'
import Sidebar from './components/Sidebar'
import Orders from './views/Orders'
import BestSellers from './views/BestSellers'
import SalesTotal from './components/SalesTotal'
import {orders} from '../orders'

export default {
  name: 'App',
  components: {
    Overview,
    Sidebar,
    Orders,
    SalesTotal,
    BestSellers
  },
  data() {
    return {
      orders,
      selectedPage: 'Overview'
    }
  },
  provide() {
    return {
      quantityOfItemsSold: this.quantityOfItemsSold,
      totalSalesValue: this.totalSalesValue,
      bestSeller: this.sortedItems[0],
      orders: this.orders,
      sortedItems: this.sortedItems,
      changePage: this.changePage
    }
  },
  methods: {
    changePage(page) {
      this.selectedPage = page
    }
  },
  computed: {
    sortedItems() {
      const sortedItems = []
      this.orders.map(order => {
        order.items.map(item => {
          const itemExists = sortedItems.find(sortedItem => sortedItem.id === item.id)
          if(itemExists) {
            itemExists.quantity++
            return
          }
          const newItem = {
            quantity: 1,
            ...item
          }
          sortedItems.push(newItem)
        })
      })
      sortedItems.sort((a,b) => (a.quantity > b.quantity) ? -1 : 1)
        return sortedItems
    },
    quantityOfItemsSold() {
      let qty = 0
      this.sortedItems.map((item) => {
        qty += item.quantity
      })
      return qty
    },
    totalSalesValue() {
    let total = 0
    this.orders.map((order) => {
      order.items.map((item) => {
        console.log({item});
        total += item.price
      })
    })
    return total
  }
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
