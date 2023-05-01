const URL = "https://jsonplaceholder.typicode.com/posts"
fetch(URL)
.then(responce =>{
    return responce.json()
})
.then(data =>{
    console.log(data)
})