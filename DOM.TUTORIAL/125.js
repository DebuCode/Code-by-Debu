const allButtons = document.querySelectorAll(".my-buttons button");

allButtons.forEach(button =>{
    button.addEventListener("click", (e)=>{
        e.target.style.backgroundColor = "red";
        e.target.style.color= "#333";
    })
})