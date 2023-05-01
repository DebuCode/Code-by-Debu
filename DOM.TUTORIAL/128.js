console.log("hello world")

const grandparent = document.querySelector(".grandparent")
const parent = document.querySelector(".grandparent")
const Child = document.querySelector(".grandparent")
Child.addEventListener("click", ()=>{
    console.log("you clicked on Child")
})
parent.addEventListener("click", ()=>{
    console.log("you clicked on parent")
})
grandparent.addEventListener("click", ()=>{
    console.log("you clicked on Grandparent")
})
document.body.addEventListener("click", ()=>{
    console.log("you clicked on body")
})