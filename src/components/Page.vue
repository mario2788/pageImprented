


<script setup>

    const props = defineProps( [ 'page', 'pages' ] ) ;

</script>

<template>

    <section>

        <header>
            <slot name="header"></slot>
        </header>
        
        <div class="content">
            <slot name="content"></slot>
        </div>

        <footer class="center">
            Página {{ page }} de {{ pages }}
        </footer>
        
    </section>
    
</template>


<style scoped>

    section{
        height: 29.7cm;
        display: flex;
        flex-direction: column;
    }

    .pagination{
        text-align: center;
    }

    .content{
        height:100% /* height: v-bind(height); */
    }

    .center{
        align-self: center;
    }

</style>