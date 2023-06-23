import { ref } from 'vue'
import { defineStore } from 'pinia'


export const usePageStore = defineStore( 'pages', () => {

    const pageList = ref([])

    function addPage( arg ){

        const idx = pageList.value.findIndex( obj => {
            return obj.id === arg.id 
        }) 

        if( idx >= 0 ){
            pageList.value[idx] = arg 
        }else{
            pageList.value.push( arg )
        }
    }

    return { pageList, addPage }
})
