const heading1 = document.querySelector(".heading1")
const heading2 = document.querySelector(".heading2")
const heading3 = document.querySelector(".heading3")
const heading4 = document.querySelector(".heading4")
const heading5 = document.querySelector(".heading5")
const heading6 = document.querySelector(".heading6")
const heading7 = document.querySelector(".heading7")

function changeText(element, text, color, time){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(element){
                element.textContent = text;
                element.style.color = color;
                resolve();
            }else{
                reject();
            }
        },time)
    })
}

changeText(heading1, "one", "red", 1000)
    .then(()=> changeText(heading2, "two", "purple", 1000))
    .then(()=> changeText(heading3, "three", "green", 1000))
    .then(()=> changeText(heading4, "four", "pink", 1000))
    .then(()=> changeText(heading5, "five", "cyan", 1000))
    .then(()=> changeText(heading6, "six", "yellow", 1000))
    .then(()=> changeText(heading7, "seven", "brown", 1000))
    .catch((error)=>{
        alart(error);
    })
    
    