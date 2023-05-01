// get multiple elements using getElements by class name
// get multiple elements items using querySeletorAll
// const navItems = document.getElementsByTagName("a"); // HTMLCollection
// console.log(navItems);
// console.log(Array.isArray(navItems));
// const navItems = document.querySelectorAll(".nav-item");
// console.log(navItems[1]);

// we can't use foreach method to iterate through HTMLCollection

// for (let i=0; i< navItems.length; i++){
//     const navItem = navItems[i];
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.color = "red";
//     navItem.style.fontWeight = "bold";
// }

// for (let navItem of navItems){
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.color = "red";
//     navItem.style.fontWeight = "bold";
// }


let navItems = document.querySelectorAll("a");
navItems = Array.from(navItems);
console.log(Array.isArray(navItems));

// for (let i=0; i< navItems.length; i++){
//     const navItem = navItems[i];
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.color = "red";
//     navItem.style.fontWeight = "bold";
// }

// for (let navItem of navItems){
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.color = "red";
//     navItem.style.fontWeight = "bold";
// }
