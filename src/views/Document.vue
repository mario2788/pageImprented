<script setup>
     
     import { useCounterStore } from '@/stores/counter' 
     import { usePageStore }  from '@/stores/pages'

     import Page from '@/components/Page.vue';
     import  Square  from '@/components/Square.vue' ;


     const counter = useCounterStore()
     const thisCounter = counter.count +1;
     counter.increment()

     const pagesList = usePageStore();
     pagesList.addPage({
          id: 'doc',
          desborda: false
     })

     const [date, month, day, year, hour] = new Date().toString().split(' ') 
     const array = [...Array(15)].map( (_,idx) => ("Texto") ) 

</script>


<template>
     
     <Page id="document" :page="thisCounter" :pages="counter.count" >

          <template v-slot:header>
               
               <div class="py-2 txtCenter">
                    <h1>
                         Historia Clínica
                    </h1>
     
                    <h4>
                         {{ day }} de {{ month }} del {{ year }} - {{ hour.split(':').slice(0,2).join(':') }}
                    </h4>
               </div>

          </template>

          <template v-slot:content>
               
               <div class="row">
    
                    <div class="column">
                         <Square 
                              title="Informacion personal" 
                              :arrayContent="[
                                   { label: 'Nombre:', field: 'Mario Cuellar' },
                                   { label: 'Sexo:', field: 'Masculino' },
                                   { label: 'Rh:', field: 'O+' },
                                   { label: 'Cuenta corriente:', field: '1022943159' },
                                   { label: 'Edad', field: '35' },
                                   { label: 'Peso', field: '78Kg' },
                              ]"
                              :lista="false"
                         />

                         <Square 
                              title="Notas de evolución" 
                              :arrayContent="[
                                   { label: 'Especilista/Doctor', field: 'Mario Cuellar', label2: 'Evolución', field2: 'Ruidos cardiacos', label3: 'Fecha', field3: '2023-05-18' },
                                   { label: 'Especilista/Doctor', field: 'Mario Cuellar', label2: 'Evolución', field2: 'Ruidos cardiacos', label3: 'Fecha', field3: '2023-05-18' },
                                   { label: 'Especilista/Doctor', field: 'Mario Cuellar', label2: 'Evolución', field2: 'Ruidos cardiacos', label3: 'Fecha', field3: '2023-05-18' },
                              ]"
                              :lista="true"
                         />

                         <Square 
                              title="Exámenes" 
                              :arrayContent="[
                                   { label: 'Exámen', field: 'Sangre', label2: 'Resumen', field2: 'Ruidos cardiacos', label3: 'Fecha', field3: '2023-05-18' },
                                   { label: 'Exámen', field: 'Sangre', label2: 'Resumen', field2: 'Ruidos cardiacos', label3: 'Fecha', field3: '2023-05-18' },
                                   { label: 'Exámen', field: 'Sangre', label2: 'Resumen', field2: 'Ruidos cardiacos', label3: 'Fecha', field3: '2023-05-18' },
                                   { label: 'Exámen', field: 'Sangre', label2: 'Resumen', field2: 'Ruidos cardiacos', label3: 'Fecha', field3: '2023-05-18' },
                                   { label: 'Exámen', field: 'Sangre', label2: 'Resumen', field2: 'Ruidos cardiacos', label3: 'Fecha', field3: '2023-05-18' },
                              ]"
                              :lista="true"
                         />

                    </div>

                    <div class="column">

                         <Square 
                              title="Informacion clínica" 
                              :arrayContent="[
                                   { label: 'Diagnostico:', field: 'Sin clasificar' },
                                   { label: 'Motivo consulta:', field: 'Normal' },
                                   { label: 'Estado:', field: 'Normal' },
                                   { label: 'Admisión:', field: '2023-05-15' },
                              ]"
                              :lista="false"
                         />


                         <Square 
                              title="Notas de interconsulta" 
                              :arrayContent="[
                                   { label: 'Especilista/Doctor', field: 'Mario Cuellar', label2: 'Interconsulta', field2: 'Ruidos cardiacos', label3: 'Fecha', field3: '2023-05-18' },
                                   { label: 'Especilista/Doctor', field: 'Mario Cuellar', label2: 'Interconsulta', field2: 'Ruidos cardiacos', label3: 'Fecha', field3: '2023-05-18' },
                                   { label: 'Especilista/Doctor', field: 'Mario Cuellar', label2: 'Interconsulta', field2: 'Ruidos cardiacos', label3: 'Fecha', field3: '2023-05-18' },
                                   { label: 'Especilista/Doctor', field: 'Mario Cuellar', label2: 'Interconsulta', field2: 'Ruidos cardiacos', label3: 'Fecha', field3: '2023-05-18' },
                                   { label: 'Especilista/Doctor', field: 'Mario Cuellar', label2: 'Interconsulta', field2: 'Ruidos cardiacos', label3: 'Fecha', field3: '2023-05-18' },
                              ]"
                              :lista="true"
                         />

                         <Square 
                              title="Notas de traslado" 
                              :arrayContent="[
                                   { label: 'Especilista/Doctor', field: 'Mario Cuellar', label2: 'Interconsulta', field2: 'Ruidos cardiacos', label3: 'Fecha', field3: '2023-05-18' },
                                   { label: 'Especilista/Doctor', field: 'Mario Cuellar', label2: 'Interconsulta', field2: 'Ruidos cardiacos', label3: 'Fecha', field3: '2023-05-18' },
                                   { label: 'Especilista/Doctor', field: 'Mario Cuellar', label2: 'Interconsulta', field2: 'Ruidos cardiacos', label3: 'Fecha', field3: '2023-05-18' },
                              ]"
                              :lista="true"
                         />
                    </div> 
               </div>

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

     .column{
        display: flex;
        flex-direction: column;
        width: 50%;
    }

    .row{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }

</style>

