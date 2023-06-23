<script setup>
     // Vue
     import {  onMounted } from 'vue'
     
     // Store
     import { useCounterStore } from '@/stores/counter' 
     import { usePageStore }  from '@/stores/pages'

     // Elements/Components
     import Page from '@/components/Page.vue';
     import Square  from '@/components/Square.vue' ;
     import Head from '@/helpers/Head.vue' ;

     // Data
     import { dataPageHome } from '@/serverRequest/dataPageHome.js'


     const objectsData = dataPageHome()

     console.log(objectsData)

     const counter = useCounterStore()
     const thisCounter = counter.count + 1
     counter.increment( objectsData.length -1 )

     const { pageList , addPage } = usePageStore();

     addPage({
          id: 'personal',
          desborda: false,
     })
  


     onMounted( () => {
          // console.log( "Montado PageHome", pageList.filter( obj => obj.id === 'personal' ) );
          const objPage = pageList.filter( obj => obj.id === 'personal' )[0]

          if( objPage.desborda ){
               for( let obj in state ){
                    if( state[obj].flag === false ){
                         
                         if( state[obj].num <= 2 ){
                              state[obj].flag = true
                         }else{
                              state[obj].num = state[obj].num - 1
                         }

                         console.log("Dentro", obj, state[obj] );
                    }
               }
               console.log( Object.keys(state) );
          }
     })

</script>


<template>

     <Page 
          v-for="(array,idx) in objectsData"
          id="personal" 
          :page="thisCounter + idx" 
          :pages="counter.count" 
     >

          <template v-slot:header>
               <div v-if="idx===0">
                   <Head/>
               </div>
               <p v-else ></p>
          </template>

          <template v-slot:content>
               
               <div class="row" :style="{height: idx===0 ? '19cm' : '26cm' }" >
                    <div class="column" v-for="obj in array" >
                         <Square 
                              :title="obj.title" 
                              :arrayContent="obj.data"
                              :lista="obj?.parts != null"
                              :part="obj?.parts ? obj?.part : null"
                              :parts="obj?.parts"
                         />
                    </div>
               </div>

          </template>
          
     </Page>

</template>


<style scoped>
    
     .column{
        width: 50%;
    }

    .row{
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
    }

</style>

