// setInterval
// console.log("script start")
// const id = setInterval(()=>{
//     console.log(Math.random())
// },2);

// for(let i = 0; i<1000; i++){
//     console.log("....");
// }
// console.log("script end")

const body = document.body;
const button = document.querySelector("button")
const intervalId = setInterval(()=>{
    const red = Math.floor(Math.random() * 126);
    const green = Math.floor(Math.random() * 126);
    const blue = Math.floor(Math.random() * 126);
    const randomColor = `rgb(${red}, ${green}, ${blue})`;
    body.style.background = randomColor;
},1000);

button.addEventListener("click", ()=>{
    clearInterval(intervalId);
    button.textContent = body.style.background;
})

console.log(intervalId);