<template>
    <h3 class="page-title">Overview</h3>
    <section>
        <items-sold>
            <span class="light-text">7</span>
        </items-sold>
        <sales-total>
            <span class="light-text">$ 138</span>
        </sales-total>
        <best-seller>
            <span class="light-text">Vue hoodie-medium</span>
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
    }    
}
</script>

<style scoped>
    section {
        display: flex;
        justify-content: space-between;
    }
</style>