


export const dataPageHome = () => {

    const personalInfo = [
        { label: 'Nombre', field: 'Mario Cuellar' },
        { label: 'Sexo', field: 'Masculino' },
        { label: 'Rh', field: 'O+' },
        { label: 'Cuenta corriente', field: '1022943159' },
        { label: 'Edad', field: '35' },
        { label: 'Peso', field: '78Kg' },
   ]

   const infoClinica = [
       { label: 'Diagnostico', field: 'Sin clasificar' },
       { label: 'Motivo consulta', field: 'Normal' },
       { label: 'Estado', field: 'Normal' },
       { label: 'Admisión', field: '2023-05-15' },
   ]

    const notasEvolucion = [...Array(12)].map( _ => ({ label: 'Especilista/Doctor', field: 'Mario Cuellar', label2: 'Evolución', field2: 'Ruidos cardiacos', label3: 'Fecha', field3: '2023-05-18' }))
    const examenes = [...Array(7)].map( _ => ({ label: 'Exámen', field: 'Sangre', label2: 'Resumen', field2: 'Ruidos cardiacos', label3: 'Fecha', field3: '2023-05-18' }))

    const notasInterconsulta = [...Array(20)].map( _ => ({ label: 'Especilista/Doctor', field: 'Mario Cuellar', label2: 'Interconsulta', field2: 'Ruidos cardiacos', label3: 'Fecha', field3: '2023-05-18' }))
    const notasTraslados = [...Array(14)].map( _ => ({ label: 'Especilista/Doctor', field: 'Mario Cuellar', label2: 'Traslado', field2: 'Ruidos cardiacos', label3: 'Fecha', field3: '2023-05-18' } ))

  
    let disRest = [ 378, 700, ...[...Array(20)].map( () => 980) ]
    let idx = 0 
    let h = (n) => 64.2*n + 62.8 

    const dim = (len) => {

        let d = 0

        do{
            d = d + 1  
        }while( h(d) < disRest[idx] & d < len )

        if( d < len ){
            d = d - 1  
            idx = idx + 1
        }else{
            disRest[idx] = disRest[idx] - h(d)
            if( disRest[idx] < 20 ){ //h(2) ){
                idx = idx + 1
            }
        }

        return d
    }

    const cut = (arr, calDim, getLen) => {

        let num = 0
        const rtn = []
        let rst = arr
        let id = 0

        let dimension =  0 
        do {
            dimension = calDim( getLen(arr) ) //dim(arr.length) //calcDim(rst.length)
            rtn.push( arr.slice(id, dimension+id) )
            rst = arr.slice( dimension+id )
            id = dimension+id 
            num++
        } while ( dimension <= rst.length )

        if( rst.length > 0 ){
            rtn.push( rst )
            // Revisar 
            disRest[idx] = disRest[idx] - h(rst.length)
            // Revisar 
            num++
        }

        return rtn.map( arg => [arg,num] )        
    }

    const reg = {
        count:1,
        title:''
    }

    const column = [ 
        ['Informacion personal', personalInfo, null, false],
        ['Informacion clínica', infoClinica, null, false],
        ...[ 
            [ 'Notas de interconsulta', notasInterconsulta ],
            [ 'Notas de traslado', notasTraslados ],
            [ 'Notas de evolución', notasEvolucion ],
            [ 'Exámenes', examenes ]
        ].sort( (a,b)=> a[1].length - b[1].length )
            .map( lbls_dta => cut( lbls_dta[1], dim, (arg)=>arg.length).map( dta => [ lbls_dta[0], ...dta, true ] ) )
            .reduce( (acc,act) => {
                act.forEach( v => acc.push(v) )
                return acc
            },[]),
    ].map( item => { 

        if( reg.title === item[0] ){
            reg.count++    
        }else{
            reg.title = item[0] 
            reg.count=1
        }

        return {
            title: item[0],
            data: item[1],
            part: reg.count,
            parts: item[2],
            lista: item[3]
        }
    })

    // Calculo de paginas:
    disRest =[ 379+718, ...[ ...Array(column.length)].map( () => 980*2) ]
    let idxDis = 0 
    let objectsData = [ column.slice(0,2) ]
    
    for( let obj of column.slice(2)){
        
        objectsData[idxDis].push( obj )
        disRest[idxDis] = disRest[idxDis] - h(obj.data.length)

        if( disRest[idxDis] < h(2) ){
            idxDis = idxDis + 1    
            objectsData[idxDis] = []
        } 
        
    }

    return objectsData
}