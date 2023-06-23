

<script setup>

    import { useCounterStore } from '@/stores/counter' 

    const counter = useCounterStore()
    counter.reset()

    import PageHome from '@/views/PageHome.vue';
    import Document from '@/views/Document.vue';

</script>


<template>

    <container>
        <PageHome/>

        <Document/>
    </container>

</template>


<style scope>

    .container{
        display: flex;
        flex-direction: column;
        background-color: white;
    }

</style>