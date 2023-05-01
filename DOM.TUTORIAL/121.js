// this keyword
const btn = document.querySelector(".btn-headline");

// btn.addEventListener("click", function(){
//     console.log('you clicked me')
//     console.log("value of this")
//     console.log(this)
// })

// arrow function
btn.addEventListener("click", ()=>{
    console.log('you clicked me')
    console.log("value of this")
    console.log(this)
})