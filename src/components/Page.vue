

<script setup>

    import { ref, onMounted } from 'vue'

    // Stores
    import { usePageStore }  from '@/stores/pages'



    const { addPage } = usePageStore();

    const props = defineProps( ['id', 'page', 'pages' ] ) ;


    // // const pagevalues = []
    
    // // pageList.forEach( (obj,idx) => {
    // //     pagevalues.push( {
    // //         idx:idx,
    // //         id: obj.id,
    // //         desborda: obj.desborda
    // //     } )
    // // })

    // // console.log( "value", pagevalues.length ,  pagevalues );

    // // Elementos del DOM
    // const section = ref();
    // const content = ref();

    // onMounted( () => {

    //     const cont1 = section.value.clientHeight
    //     const cont2 = props.id==='personal' ? content.value.clientHeight+96 : content.value.clientHeight 

    //     console.log( 
    //         "Diferencia de alturas \n",
    //         `${section.value.id} \n` ,
    //         `${cont1} \n` ,
    //         `${cont2} \n` ,
    //         `Diferencia: ${cont1 - cont2} \n` ,
    //         content.value
    //     );

    //     if( cont1 - cont2 < 50 ){
    //         addPage(
    //             {
    //                 id: props.id,
    //                 desborda: true
    //             }
    //         )
    //     }

    // });

</script>


<template>

    <section :id="id" ref="section">

        <div class="body">
            <div :id="`_${id}`" ref="content">
    
                <header>
                    <slot name="header"></slot>
                </header>
                
                <div class="content">
                    <slot name="content"></slot>
                </div>
    
            </div>
        </div>
        
        <footer id="footerPersonal" class="center">
            Página {{ page }} de {{ pages }}
        </footer>
        
    </section>
    

</template>


<style scoped>

    section{
        height: 27.8cm;
        display: flex;
        flex-direction: column;
        page-break-after: always;
        background: white;
        margin-bottom: 2rem;
        padding-bottom: 0.8rem;
        padding-inline: 0.8rem;
    }

    .body{
        height: 27cm;
    }

    .content{
        height:100% /* height: v-bind(height); */
    }

    .center{
        align-self: center;
    }

</style>