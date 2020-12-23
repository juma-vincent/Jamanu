
export let homeUrl = '';

if(process.env.NODE_ENV !== 'production'){
    homeUrl= 'http://localhost:5000';
}else{
    homeUrl='';
}

