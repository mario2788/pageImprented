import { h } from "vue"



export const fraccionarArray = ( array, dimension, func ) => {

    const arr = [[]]
    let idex = 0
    let id = 0

    for( let obj of array ){

        arr[id].push( obj )
        dimension[id] = dimension[id] - func(1)
        idex = idex + 1

        if( dimension[id]<func(1) & idex<array.length ){
            id = id + 1
            arr[id] = []
        }

    }
    
    if( arr.length < 13){
        dimension[0] = dimension[0] - 30
    }

    return [ arr, dimension ]
}