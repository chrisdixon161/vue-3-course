<template>
    <article class="stats">
        <h4>Items sold: <span>&#128200;</span></h4>
        <span class="light-text">{{ quantityOfItemsSold }}</span>   
    </article>
</template>

<script>
export default {
    inject: ['quantityOfItemsSold']
}
</script>
