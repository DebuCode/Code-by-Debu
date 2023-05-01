// console.log("script start");

// for(let i = 1; i < 10000; i++){
//     console.log("inside for loop")
// }

// console.log("script end")


// setTimeout
console.log("script start")
const id = setTimeout(()=>{
    console.log("hello world")
},2);

for(let i = 1; i<1000; i++){
    console.log("....");
}
console.log("settimeout is ", id)
// clearTimeout(id)
console.log("script end")