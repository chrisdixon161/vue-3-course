<template>
    <h3 class="page-title">Best Sellers</h3>
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
</template>

<script>
export default {
    inject: ['sortedItems']
}
</script>

<style scoped>
    table {
        border: 1px solid #ddd;
        text-align: center;
        border-radius: 5px;
    }

    th, td {
        padding: 20px;
    }
</style>