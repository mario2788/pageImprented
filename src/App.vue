<script setup>

     import { RouterLink, RouterView } from 'vue-router' 

</script>

<template >

     <div class="container">

          <RouterView/>
           
     </div>

</template>



<style scope>

     .container{
          padding-inline: 0.8rem;
          padding-block: 1rem;
     }

</style>