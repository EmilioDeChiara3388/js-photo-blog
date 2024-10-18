//console.log("Funzioni?");

let postEl = document.querySelector(".card");

axios.get("https://jsonplaceholder.typicode.com/photos?_limit=6").then(response => {
    let posts = response.data;
    console.log(posts);

    posts.forEach(post => {
        let { title, thumbnailUrl } = post;
        console.log(post);
        postEl.innerHTML = `
        <img src="./assets/img/pin.svg" alt="" class="cardPin">
                        <img src=${thumbnailUrl} alt="" class="cardImage">
                        <p class="cardText">${title}</p>
        `
    })
    

    






}).catch(err => console.error(err));

