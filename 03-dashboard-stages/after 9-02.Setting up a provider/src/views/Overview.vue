<template>
    <h3 class="page-title">Overview</h3>
    <section>
        <items-sold></items-sold>
        <sales-total></sales-total>
        <best-seller></best-seller>
    </section>
</template>

<script>
import ItemsSold from '@/components/ItemsSold'
import SalesTotal from '@/components/SalesTotal'
import BestSeller from '@/components/BestSeller'

export default {
    name: 'Overview',
    components: {
        ItemsSold,
        SalesTotal,
        BestSeller
    } ,
    props: {
        totalSalesValue: {
            type: Number
        },
        quantityOfItemsSold: {
            type: Number
        },
        bestSeller: {
            type: String
        }
    }   
}
</script>

<style scoped>
    section {
        display: flex;
        justify-content: space-between;
    }
</style>