import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useHeigthPages = defineStore('heigtPages', () => {

  const heigth = ref([0])

  function assignHeight(id,h){

    console.log( "store", heigth );
    heigth.value.push( {id:id , height: h} )
    console.log( "store", heigth.value );
    
  }

  return { heigth, assignHeight }
})
