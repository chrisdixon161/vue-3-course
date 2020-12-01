<template>
  <div class="app_wrapper">
    <header>
      <h1>Chris's Dashboard</h1>
    </header>
    <div class="content">
      <aside>
        <sidebar>
           <template #default="{page}">
               <a >{{ page }}</a>
           </template>
        </sidebar>
      </aside>
      <main>
        <small><span class="blue">dashboard</span> / Overview</small>
        <!-- <Overview :quantityOfItemsSold='32' :totalSalesValue='197' bestSeller='Vue hoodie- medium'/> -->
        <!-- <orders>
          <template #total>
            <sales-total>
              <template #icon>
                  <span>&#128176;</span>
              </template>
              <template #default>
                  <span class="light-text">$ {{ totalSalesValue }}</span>
              </template>
          </sales-total>
          </template>
          <template #default>
            <div class="order_wrapper">
              <div class="order" v-for="order in orders" :key="order.id">
                <p>Order: {{order.id}}</p>
                <ul>
                  <li v-for="(item, index) in order.items" :key="item+index">
                    <p>{{ item.name }} - $ {{item.price}}</p>
                  </li>
                </ul>
              </div>
            </div>
          </template>
        </orders> -->
        <best-sellers>
          <table>
            <thead>
              <tr>
                <th>Quantity sold</th>
                <th>Product name</th>
                <th>Product ID</th>
                <th>Product price</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="{id, name, price, quantity} in sortedItems" :key="id">
                <td>{{quantity}}</td>
                <td>{{name}}</td>
                <td>{{id}}</td>
                <td>{{price}}</td>
              </tr>
            </tbody>
          </table>
        </best-sellers>
      </main>
    </div>
  </div>
</template>

<script>
// import Overview from './views/Overview'
import Sidebar from './components/Sidebar'
// import Orders from './views/Orders'
import BestSellers from './views/BestSellers'
// import SalesTotal from './components/SalesTotal'
import {orders} from '../orders'

export default {
  name: 'App',
  components: {
    // Overview,
    Sidebar,
    // Orders,
    // SalesTotal,
    BestSellers
  },
  data() {
    return {
      orders
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
