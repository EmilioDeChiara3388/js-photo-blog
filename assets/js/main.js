//console.log("Funzioni?");

let postEl = document.querySelector(".row");
let overlayEl = document.querySelector(".overlay");
let buttonEl = document.querySelector("button");



axios.get("https://jsonplaceholder.typicode.com/photos?_limit=6").then(response => {
    let posts = response.data;
    console.log(posts);

    posts.forEach(post => {
        let { title, thumbnailUrl } = post;
        console.log(post);
        
        postEl.innerHTML += `
            <div class="col-3 debug">
                <img src="./assets/img/pin.svg" alt="" class="cardPin">
                <img src=${thumbnailUrl} alt="" class="cardImage">
                <p class="cardText">${title}</p>
            </div>
        `
        let cardImageEl = document.querySelectorAll(".cardImage");
        console.log(cardImageEl);
            
        for (let i = 0; i < cardImageEl.length; i++) {
            cardImageEl[i].addEventListener("click", () => {
                overlayEl.classList.remove("hiddenOverlay");
            })
        }
        
        /* overlayEl.addEventListener("click", () => {
            overlayEl.classList.add("hiddenOverlay");
        }) */

        buttonEl.addEventListener("click", () => {
            overlayEl.classList.add("hiddenOverlay");
        })
    })
}).catch(err => console.error(err));

