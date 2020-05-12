console.log("Starting ...");

//assyn
setTimeout(()=>{
    console.log('Call back done after 2 sec.');
},2000);

setTimeout(()=>{
    console.log('Call back done after 0 sec.');
},0);

console.log("End ...");