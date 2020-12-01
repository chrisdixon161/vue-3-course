<template>
    <article class="stats">
        <h4>Total sales: <span>&#128176;</span></h4>
        <span class="light-text">$ {{ totalSalesValue }}</span>
    </article>
</template>


<script>
export default {
    inject: ['totalSalesValue']
}
</script>