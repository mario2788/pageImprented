

const Token = () => {

    localStorage.removeItem('token');

    if (document.cookie.split(';').length > 1) {

        return document.cookie.split(';').filter(arr => arr.indexOf('cocToken=') !== -1)[0].split('=')[1];

    } else {
        return document.cookie.split('=')[1].split(';')[0] 
    };

};


const makeRequest = async( params ) => {

    const token = Token() ;
    const urlServer = import.meta.env.VITE_urlServer ;

    const hdrs = new Headers();
    hdrs.append("Authorization", `Bearer ${token}`);

    const requestOptions = {
        method: 'GET',
        headers: hdrs,
        redirect: 'follow'
    };

    let resp = null ;

    try {
        resp = await fetch( `${urlServer}/api/usuarios/?${params}`, requestOptions ) ;
        resp = await resp.json() ;
    } catch (err) {
        console.log( err );
        return null
    }

    return( resp );

}

export const getParams = async() => {
   
    const { data } = await makeRequest( 'query=pagePrinted' );

    return data ;

}