<template>
    <h3 class="page-title">Orders</h3>
    <slot name="total"></slot>
    <section>
        <slot></slot>
    </section>
</template>

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