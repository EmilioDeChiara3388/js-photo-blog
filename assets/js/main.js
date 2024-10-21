//console.log("Funzioni?");

let postEl = document.querySelector(".row");
let overlayEl = document.querySelector(".overlay");
let buttonEl = document.querySelector("button");
let overlayImageEl = document.querySelector(".zoomedPic");
let overlayPicEl = document.querySelector(".overlayPic");

axios.get("https://jsonplaceholder.typicode.com/photos?_limit=6").then(response => {
    let posts = response.data;
    //console.log(posts);

    posts.forEach(post => {
        let { title, thumbnailUrl } = post;
        //console.log(post);
        //console.log(thumbnailUrl);
        //console.log(title);

        const capitalizedTitle = title.split();
        for (let i = 0; i < capitalizedTitle.length; i++) {
            capitalizedTitle[i] = capitalizedTitle[i][0].toUpperCase() + capitalizedTitle[i].substr(1);
        }
        //console.log(capitalizedTitle);
        let rightTitle = capitalizedTitle.join(" ");

        postEl.innerHTML += `
            <div class="col-3 debug">
                <img src="./assets/img/pin.svg" alt="" class="cardPin">
                <img src=${thumbnailUrl} alt="" class="cardImage">
                <p class="cardText">${rightTitle}</p>
            </div>
        `
        let cardImageEl = document.querySelectorAll(".cardImage");
        //console.log(cardImageEl);
        for (let i = 0; i < cardImageEl.length; i++) {
            cardImageEl[i].addEventListener("click", () => {
                overlayEl.classList.remove("hiddenOverlay");
                posts.forEach(element => {
                    overlayImageEl.src = posts[i].thumbnailUrl;
                })
            })
        }
        buttonEl.addEventListener("click", () => {
            overlayEl.classList.add("hiddenOverlay");
        })
    })
}).catch(err => console.error(err));