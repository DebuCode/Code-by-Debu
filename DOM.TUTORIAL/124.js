console.log("script start")
const allButtons = document.querySelectorAll(".my-buttons button");

for (let button of allButtons){
    button.addEventListener("click", (e)=>{
        let num = 0;
        for(let i=0; i<= 10000; i++){
            num += i;
        }
        console.log(e.currentTarget.textContent, num);
    })
 }

 let outervar = 0;
 for(let i = 0; i<= 10000; i++){
    outervar += i;
 } 

 console.log("Value of outer variable is", outervar)
 console.log("script end")