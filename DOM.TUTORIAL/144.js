// async await

// fetch(URL)
// .then(responce =>{
//     return responce.json()
// })
// .then(data =>{
//     console.log(data)
// })

const URL = "https://jsonplaceholder.typicode.com/posts"

async function getPosts(){
    const responce = await fetch(URL);
    if(!responce.ok){
        throw new Error("Something went worng")
    }
    const data = await responce.json();
    return data;

}

getPosts()
 
.then(myData =>{
        console.log(myData);
    })
    .catch(error=>{
        console.log(error)
    })
// const returned = getPosts();
// console.log(returned);


