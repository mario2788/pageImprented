
<script setup>

    const [_, month, day, year, hour] = new Date().toString().split(' ') 
    
</script>

<template>

    <hr width=100% align="center" size=5 noshade="noshade" color="#00" />

    <div class="header">
        <img src="../assets/images/cabecera.png" alt="imagenes Corp"/>
        <!-- <img src="../assets/images/logoHospital.jpeg" alt="El salvador" style="scale:65%" />
        <img src="../assets/images/cropped-g52 1.png" alt="Waves-ai" style="scale:82%; margin-left:0rem" /> -->
    </div>

    <hr width=100% align="center" size=5 noshade="noshade" color="#00" />

    <div class="py-2 txtCenter">
        <h1>
            Historia Clínica
        </h1>

        <h4>
            {{ day }} de {{ month }} del {{ year }} - {{ hour.split(':').slice(0,2).join(':') }}
        </h4>
    </div>

</template>


<style scoped>

    .header {
        margin-block: 1rem;
        padding-block: 0.5rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        max-height: 6rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .py-2 {
          padding-block: 1.3rem;
     }

     .txtCenter {
          text-align: center;
     }
</style>