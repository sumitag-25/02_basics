// Immediate Invoked Function Expression 

(function chai() {
    // Named IIFE 
    console.log(`DB CONNECTED`)
})();               //We need to end this function especially

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )("Sumit");


(function extraFunction(){
    console.log(`This is the last function of IIFE here`)
})();

( (user) => {
    console.log(`This is also a last function by ${user}`)
})("Sumit")