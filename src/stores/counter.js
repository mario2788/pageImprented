import { ref } from 'vue'
import { defineStore } from 'pinia'


export const useCounterStore = defineStore('counter', () => {

    const count = ref(0)

    function reset(){
        count.value = 0
    } 

    function increment(payload){
        if( payload ){
            count.value = count.value + payload            
        }
        count.value++
    }

  return { count, reset, increment }
})
