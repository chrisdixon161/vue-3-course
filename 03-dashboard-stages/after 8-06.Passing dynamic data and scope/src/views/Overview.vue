<template>
    <h3 class="page-title">Overview</h3>
    <section>
        <items-sold>
            <span class="light-text">{{ quantityOfItemsSold }}</span>
        </items-sold>
        <sales-total>
            <span class="light-text">$ {{ totalSalesValue }}</span>
        </sales-total>
        <best-seller>
            <span class="light-text">{{ bestSeller}}</span>
        </best-seller>
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