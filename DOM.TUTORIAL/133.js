const heading1 = document.querySelector(".heading1")
const heading2 = document.querySelector(".heading2")
const heading3 = document.querySelector(".heading3")
const heading4 = document.querySelector(".heading4")
const heading5 = document.querySelector(".heading5")
const heading6 = document.querySelector(".heading6")
const heading7 = document.querySelector(".heading7")
// setTimeout(() => {
//     heading1.textContent = "Job done"
//     heading1.style.color = "red"
//     setTimeout(() => {
//         heading2.textContent = "Doing well"
//         heading2.style.color = "blue"
//         setTimeout(() => {
//             heading3.textContent = "Three"
//             heading3.style.color = "purple"
//             setTimeout(() => {
//                 heading4.textContent = "Four"
//                 heading4.style.color = "green"
//                 setTimeout(() => {
//                     heading5.textContent = "Five"
//                     heading5.style.color = "orange"
//                     setTimeout(() => {
//                         heading6.textContent = "Six"
//                         heading6.style.color = "cyan"
//                         setTimeout(() => {
//                             heading7.textContent = "Seven"
//                             heading7.style.color = "yellow"
//                         }, 2000);
//                     }, 2000);
//                 }, 2000);
//             }, 2000);
//         }, 2000);
//     }, 2000);
// }, 1000);


function changeText(element,text,color,time,onSuccessCallback,onFailureCallback){
    setTimeout(()=>{
        if(element){
            element.textContent = text;
            element.style.color = color;
            if(onSuccessCallback){
                onSuccessCallback();
            }           
        }else{
            if(onFailureCallback){
                onFailureCallback();
            }
        }
    },time)
}



// pyramid of Doom

changeText(heading1, "one","red",1000,()=>{
    changeText(heading2, "Two","blue",1000,()=>{
        changeText(heading3, "Three","green",1000,()=>{
            changeText(heading4, "Four","pink",1000,()=>{
                changeText(heading5, "Five","cyan",1000,()=>{
                    changeText(heading6, "Six","violet",1000,()=>{
                        changeText(heading7, "seven","orange",1000,()=>{

                        },()=>{console.log("Heading7 does not exits")})
                    },()=>{console.log("Heading6 does not exits")})
                },()=>{console.log("Heading5 does not exits")})
            },()=>{console.log("Heading4 does not exits")})
        },()=>{console.log("Heading3 does not exits")})
    },()=>{console.log("Heading2 does not exits")})
},()=>{console.log("Heading1 does not exits")})

