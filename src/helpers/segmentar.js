


export const segmentar = ( arr, seg, rtn_n=false) => {

    const arrayRtn = []
    let celdas = []
    let part = 0 
    let n = 0

    for( let idx = 0 ; idx < arr.length ; idx++ ){

        celdas.push( arr[idx] )
        part++
        if( part === seg ){
            arrayRtn.push( celdas )
            celdas = []
            part = 0
            n++
        }
    }
    
    if( celdas.length > 0 ){
        arrayRtn.push( celdas )
        n++
    }

    if( rtn_n ){
        return arrayRtn.map( arg => [arg,n] )
    }

    return arrayRtn

}