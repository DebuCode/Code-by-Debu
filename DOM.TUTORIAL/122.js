const allButtons = document.querySelectorAll(".my-buttons button")

 for (let button of allButtons){
    button.addEventListener("click", function(){
        console.log(this);
    })
 }