//console.log("Funzioni?");

//Seleziono elementi dall' HTML:
let postEl = document.querySelector(".row");
let overlayEl = document.querySelector(".overlay");
let buttonEl = document.querySelector("button");
let overlayImageEl = document.querySelector(".zoomedPic");


//Ottengo gli oggetti da aggiungere in pagina:
axios.get("https://jsonplaceholder.typicode.com/photos?_limit=6").then(response => {
    let posts = response.data;
    //console.log(posts);

    //Destrutturo oggetti ottenuti prendendo le keys da stampare in pagina:
    posts.forEach(post => {
        let { title, thumbnailUrl } = post;
        //console.log(post);
        //console.log(thumbnailUrl);
        //console.log(title);

        //Rendo maiuscole le iniziali di ogni parola del titolo:
        let capitalizedTitle = title.split(" ");
        for (let i = 0; i < capitalizedTitle.length; i++) {
            capitalizedTitle[i] = capitalizedTitle[i][0].toUpperCase() + capitalizedTitle[i].substr(1);
        }
        //console.log(capitalizedTitle);
        let rightTitle = capitalizedTitle.join(" ");

        //Aggiungo dinamicamente gli oggetti in pagina:
        postEl.innerHTML += `
            <div class="col-3 col-6-md col-12-sm debug">
                <img src="./assets/img/pin.svg" alt="" class="cardPin">
                <img src=${thumbnailUrl} alt="" class="cardImage">
                <p class="cardText">${rightTitle}</p>
            </div>
        `

        //Aggiungo l'event listener su ogni immagine in pagina, per far apparire l'overlay con l'immagine cliccata zoommata:
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

        //Aggiungo l'event listener sul bottone per chiudere l'overlay:
        buttonEl.addEventListener("click", () => {
            overlayEl.classList.add("hiddenOverlay");
        })
    })
}).catch(err => console.error(err));