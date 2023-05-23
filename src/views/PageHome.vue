<script setup>
     
     import { useCounterStore } from '@/stores/counter' 
     import Page from '@/components/Page.vue';
     import PersonalInformation  from '@/views/PersonalInformation.vue';

     const counter = useCounterStore()
     counter.increment()

     const [date, month, day, year, hour] = new Date().toString().split(' ') 
     const array = [...Array(15)].map( (_,idx) => ("Texto") ) 

     console.log( counter.count );

</script>


<template>
     <Page  page="1" :pages="counter.count" >

          <template v-slot:header>

               <hr width=100% align="center" size=5 noshade="noshade" color="#00" />

               <div class="header">
                    <img src="../assets/images/logoHospital.jpeg" alt="El salvador" style="scale:65%" />

                    <img src="../assets/images/cropped-g52 1.png" alt="Waves-ai" style="scale:82%; margin-left:0rem" />
               </div>

               <hr width=100% align="center" size=5 noshade="noshade" color="#00" />

               <div class="py-2 txtCenter">
                    <h1>
                         Historia Clínica
                    </h1>

                    <h4>
                         {{ day }} de {{ month }} del {{ year }} - {{ hour }}
                    </h4>
               </div>

          </template>

          <template v-slot:content>
               <PersonalInformation/>
          </template>
          
     </Page>
</template>


<style scoped>
     .header {
          margin-block: 1rem;
          padding-block: 0.5rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          max-height: 6rem;
     }

     h1,
     h2,
     h4 {
          margin-block: 0.5rem;
     }

     .py-2 {
          padding-block: 1.3rem;
     }

     .txtCenter {
          text-align: center;
     }
</style>

