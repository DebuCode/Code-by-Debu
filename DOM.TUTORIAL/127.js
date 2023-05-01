const body = document.body;

body.addEventListener("keypress" , (e) =>{
   // console.log(e);
   console.log(e.key);
})

// const mainButton = document.querySelector(".btn-headline")
const mainButton = document.querySelector(".signup-btn")
// console.log(mainButton)
mainButton.addEventListener("mouseover", ()=>{
    console.log("mouseover event ocuuerd");
})

mainButton.addEventListener("mouseleave", ()=>{
    console.log("mouseleave event ocuuerd");
})


