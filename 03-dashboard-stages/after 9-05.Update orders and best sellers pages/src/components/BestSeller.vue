<template>
    <article class="stats">
        <h4>Top selling item: <span>&#128293;</span></h4>
        <span class="light-text">{{ bestSeller.name }}</span>
    </article>
</template>

<script>
export default {
    inject: ['bestSeller']
}
</script>