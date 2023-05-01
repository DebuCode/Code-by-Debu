// Promise

const bucket = ['coffee','chips','vegetable','salt','rice'];

// Promise ---> Executor Function
const friedRicePromise = new Promise((resolve,reject)=>{
    if(bucket.includes('vagetable') && bucket.includes('salt') && bucket.includes('rice')){
        resolve({value:"Fried Rise"});
    }else{
        reject("Couldn't do it");
    }

})

// produce

//comsume
// how to consume

friedRicePromise.then((myfriedRice)=>{
    console.log("Let's eat", myfriedRice);
}).catch((error)=>{
    console.log(error);
})
