<template>
    <h3 class="page-title">Orders</h3>
    <sales-total>
        <template #icon>
            <span>&#128176;</span>
        </template>
        <template #default>
            <span class="light-text">$ {{ totalSalesValue }}</span>
        </template>
    </sales-total>
    <section>
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
    </section>
</template>

<script>
import SalesTotal from '../components/SalesTotal'

export default {
    inject: ['orders'],
    components: {
        SalesTotal
    }    
}
</script>
<style scoped>
    ul {
        list-style: none;
        font-style: italic;
    }

    .order {
        padding: 10px;
        margin: 10px 0;
        border: 1px solid #ddd;
        border-radius: 5px;
    }

</style>