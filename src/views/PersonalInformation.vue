

<script setup>

    import { onBeforeMount } from 'vue';
    import { getParams } from '../serverRequest/getParams';
    import  Square  from '@/components/Square.vue' ;

    let params = null;

    onBeforeMount(async () => {
        console.log(`the component is now mounted.`)
        params = await getParams()
        console.log("On mounted:", params)
    });

    console.log("Paramns:", params)

</script>



<template>  


    <div class="row">
    
        <div class="column">
            <Square 
                title="Informacion personal" 
                :arrayContent="[
                    {label: 'Nombre:', field:'Mario Cuellar'},
                    {label: 'Sexo:', field:'Masculino'},
                    {label: 'Rh:', field:'O+'},
                    {label: 'Cuenta corriente:', field:'1022943159'},
                    {label: 'Edad', field:'35'},
                    {label: 'Peso', field:'78Kg'},
                ]"
                :lista="true"
            />

            <Square 
                title="Notas de evolución" 
                :arrayContent="[
                    {label: 'Especilista/Doctor', field:'Mario Cuellar', label2:'Evolución', field2:'Ruidos cardiacos', label3:'Fecha', field3:'2023-05-18' },
                    {label: 'Especilista/Doctor', field:'Mario Cuellar', label2:'Evolución', field2:'Ruidos cardiacos', label3:'Fecha', field3:'2023-05-18' },
                    {label: 'Especilista/Doctor', field:'Mario Cuellar', label2:'Evolución', field2:'Ruidos cardiacos', label3:'Fecha', field3:'2023-05-18' },
                ]"
                :lista="false"
            />

        </div>

        <div class="column">

            <Square 
                title="Informacion clínica" 
                :arrayContent="[
                    {label: 'Diagnostico:', field:'Sin clasificar'},
                    {label: 'Motivo consulta:', field:'Normal'},
                    {label: 'Estado:', field:'Normal'},
                    {label: 'Admisión:', field:'2023-05-15'},
                ]"
                :lista="true"
            />


            <Square 
                title="Notas de interconsulta" 
                :arrayContent="[
                    {label: 'Especilista/Doctor', field:'Mario Cuellar', label2:'Interconsulta', field2:'Ruidos cardiacos', label3:'Fecha', field3:'2023-05-18' },
                    {label: 'Especilista/Doctor', field:'Mario Cuellar', label2:'Interconsulta', field2:'Ruidos cardiacos', label3:'Fecha', field3:'2023-05-18' },
                    {label: 'Especilista/Doctor', field:'Mario Cuellar', label2:'Interconsulta', field2:'Ruidos cardiacos', label3:'Fecha', field3:'2023-05-18' },
                ]"
                :lista="false"
            />

            <Square 
                title="Notas de traslado" 
                :arrayContent="[
                    {label: 'Especilista/Doctor', field:'Mario Cuellar', label2:'Interconsulta', field2:'Ruidos cardiacos', label3:'Fecha', field3:'2023-05-18' },
                    {label: 'Especilista/Doctor', field:'Mario Cuellar', label2:'Interconsulta', field2:'Ruidos cardiacos', label3:'Fecha', field3:'2023-05-18' },
                    {label: 'Especilista/Doctor', field:'Mario Cuellar', label2:'Interconsulta', field2:'Ruidos cardiacos', label3:'Fecha', field3:'2023-05-18' },
                ]"
                :lista="false"
            />
        </div> 
    </div>
   
    
</template>



<style scoped>

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