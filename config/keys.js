if(process.env.NODE_ENV === 'production'){
    //We are in production, return prod keys
    module.exports = require('./dev');

}else{
     //We are in development, return dev keys
     module.exports = require('./dev'); // we require dev keys, and immediately export it
}