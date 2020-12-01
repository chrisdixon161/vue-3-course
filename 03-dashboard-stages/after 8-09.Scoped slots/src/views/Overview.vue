<template>
    <h3 class="page-title">Overview</h3>
    <section>
        <items-sold>
        <template #icon>
            <span>&#128200;</span>
        </template>
        <template #default>
            <span class="light-text">{{ quantityOfItemsSold }}</span>
        </template>
        </items-sold>
        <sales-total>  
        <template #icon>
        <span>&#128176;</span>
        </template>
        <template #default>
            <span class="light-text">$ {{totalSalesValue}}</span>
        </template>
        </sales-total>
        <best-seller>  
        <template #icon>
        <span>&#128293;</span>
        </template>
        <template #default>
            <span class="light-text">{{bestSeller}}</span>
        </template>
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