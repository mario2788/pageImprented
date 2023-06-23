
import { fraccionarArray } from "../helpers/fraccionarArray"

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

   const numRand = () => parseInt(Math.random()*(20-5) + 5)

    const notasInterconsulta = [...Array( numRand() )].map( _ => ({ label: 'Especilista/Doctor', field: 'Mario Cuellar', label2: 'Interconsulta', field2: 'Ruidos cardiacos', label3: 'Fecha', field3: '2023-05-18' }))
    const notasTraslados = [...Array( numRand() )].map( _ => ({ label: 'Especilista/Doctor', field: 'Mario Cuellar', label2: 'Traslado', field2: 'Ruidos cardiacos', label3: 'Fecha', field3: '2023-05-18' } ))
    const notasEvolucion = [...Array( numRand() )].map( _ => ({ label: 'Especilista/Doctor', field: 'Mario Cuellar', label2: 'Evolución', field2: 'Ruidos cardiacos', label3: 'Fecha', field3: '2023-05-18' }))
    const examenes = [...Array( numRand() )].map( _ => ({ label: 'Exámen', field: 'Sangre', label2: 'Resumen', field2: 'Ruidos cardiacos', label3: 'Fecha', field3: '2023-05-18' }))
   
    // const notasInterconsulta = [...Array( 5 )].map( _ => ({ label: 'Especilista/Doctor', field: 'Mario Cuellar', label2: 'Interconsulta', field2: 'Ruidos cardiacos', label3: 'Fecha', field3: '2023-05-18' }))
    // const notasTraslados = [...Array( 5 )].map( _ => ({ label: 'Especilista/Doctor', field: 'Mario Cuellar', label2: 'Traslado', field2: 'Ruidos cardiacos', label3: 'Fecha', field3: '2023-05-18' } ))
    // const notasEvolucion = [...Array( 12 )].map( _ => ({ label: 'Especilista/Doctor', field: 'Mario Cuellar', label2: 'Evolución', field2: 'Ruidos cardiacos', label3: 'Fecha', field3: '2023-05-18' }))
    // const examenes = [...Array( 8 )].map( _ => ({ label: 'Exámen', field: 'Sangre', label2: 'Resumen', field2: 'Ruidos cardiacos', label3: 'Fecha', field3: '2023-05-18' }))


    const arrayData = [ 
        [ 'Notas de interconsulta', notasInterconsulta ],
        [ 'Notas de traslado', notasTraslados ],
        [ 'Notas de evolución', notasEvolucion ],
        [ 'Exámenes', examenes ]
    ]
    
    console.log( arrayData );
    
    let lenColumns = [ 600, 1080, ...[...Array(20)].map( () => 1650 ) ]
    let lenLista = (n) =>  64.9*n + 62.8 //64.2*n + 62.8 
    let lenRenglon = (n) => 21.6*n + 62
    const tempData = []

    let arr 
    for( let array of arrayData ){
        [ arr, lenColumns ]  =  fraccionarArray( 
                                    array[1], 
                                    lenColumns.reduce( (acc,act) => { 
                                        if( act > lenLista(1) ){ acc.push( act ) }
                                        return acc
                                        },[]), 
                                    lenLista 
                                )
        tempData.push( ...arr.map( item => [array[0], item, arr.length, lenLista] ) )
    }
    
    console.log( "Array Distancias", lenColumns );

    const reg = {
        count:1,
        title:''
    }

    const column = [ 
        [ 'Informacion personal', personalInfo, null, lenRenglon ],
        [ 'Informacion clínica', infoClinica, null, lenRenglon ],
        ...tempData
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
            parts: item[2],
            calAlt: item[3],
            part: reg.count,
        }
    })

    // Calculo de paginas:
    // const disRest =[  1065, ...[ ...Array(column.length)].map( () => 995*2 ) ]
    // let objectsData = [ column.slice(0,2) ]

    const disRest = [1400, ...[...Array(column.length)].map( () => 1050*2 ) ]
    console.log( disRest );
    let objectsData = [ [] ]
    let idxDis = 0 
    
    // column.slice(2).forEach( (obj, idx, array) => { 
    column.forEach( (obj, idx, array) => {
        
        objectsData[idxDis].push( obj )
        disRest[idxDis] = disRest[idxDis] - obj.calAlt(obj.data.length) 
        
        let flagEspaceMinimo = disRest[idxDis] < obj.calAlt(1)
        let flagEspaceNext = disRest[idxDis] < ( obj.calAlt(array[idx+1]?.data?.length)  )

        if( flagEspaceMinimo | flagEspaceNext ){
            idxDis = idxDis + 1    
            objectsData[idxDis] = []
        } 
        
    })

    if( objectsData[objectsData.length-1].length < 1 ) objectsData.pop();

    return objectsData
}