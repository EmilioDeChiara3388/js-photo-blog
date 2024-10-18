//console.log("Funzioni?");

axios.get("https://jsonplaceholder.typicode.com/photos?_limit=6").then(response =>{
    let post = response.data;
    console.log(post);
    
})
