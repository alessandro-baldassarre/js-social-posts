// Descrizione
// Ricreiamo un feed social aggiungendo al layout di base fornito, il nostro script JS in cui:
// Milestone 1 - Creiamo il nostro array di oggetti che rappresentano ciascun post. Ogni post dovrà avere le informazioni necessarie per stampare la relativa card: id del post, numero progressivo da 1 a n nome autore, foto autore, data in formato americano (mm-gg-yyyy), testo del post, immagine (non tutti i post devono avere una immagine), numero di likes.
// Non è necessario creare date casuali, per le immagini va bene utilizzare qualsiasi servizio di placeholder ad es. Unsplash (https://unsplash.it/300/300?image=<id>)
// Milestone 2 - Prendendo come riferimento il layout di esempio presente nell'html, stampiamo i post del nostro feed.
// Milestone 3 - Se clicchiamo sul tasto "Mi Piace" cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo. Salviamo in un secondo array gli id dei post ai quali abbiamo messo il like.
// **BONUS
// 1 - Formattare le date in formato italiano (gg/mm/aaaa)
// 2 - Gestire l'assenza dell'immagine profilo con un elemento di fallback che contiene le iniziali dell'utente (es. Luca Formicola > LF).
// 3 - Al click su un pulsante "Mi Piace" di un post, se abbiamo già cliccato dobbiamo decrementare il contatore e cambiare il colore del bottone.


const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    },
    {
        "id": 6,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=580",
        "author": {
            "name": "Tom Brady",
            "image": null
        },
        "likes": 1000,
        "created": "2021-02-10"
    },
    {
        "id": 7,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=590",
        "author": {
            "name": "Payton Manning",
            "image": "https://unsplash.it/300/300?image=50"
        },
        "likes": 89,
        "created": "2021-04-10"
    },
    {
        "id": 8,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=580",
        "author": {
            "name": "Elia Manning",
            "image": "https://unsplash.it/300/300?image=91"
        },
        "likes": 95,
        "created": "2021-01-16"
    },
    {
        "id": 9,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=978",
        "author": {
            "name": "Aaron Rodgers",
            "image": "https://unsplash.it/300/300?image=87"
        },
        "likes": 800,
        "created": "2021-04-05"
    },
    {
        "id": 10,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=832",
        "author": {
            "name": "Russel Wilson",
            "image": null
        },
        "likes": 90,
        "created": "2021-05-05"
    },
    {
        "id": 11,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=999",
        "author": {
            "name": "Dirk Cusins",
            "image": "https://unsplash.it/300/300?image=22"
        },
        "likes": 45,
        "created": "2021-06-05"
    },
    {
        "id": 12,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=654",
        "author": {
            "name": "Trevor Lawrance",
            "image": "https://unsplash.it/300/300?image=21"
        },
        "likes": 43,
        "created": "2021-08-05"
    },
    {
        "id": 13,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=789",
        "author": {
            "name": "Zach Wilson",
            "image": null
        },
        "likes": 90,
        "created": "2021-08-12"
    },
    {
        "id": 14,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=987",
        "author": {
            "name": "Mac Jones",
            "image": "https://unsplash.it/300/300?image=99"
        },
        "likes": 43,
        "created": "2021-09-05"
    },
    {
        "id": 15,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=326",
        "author": {
            "name": "Matthew Stafford",
            "image": null
        },
        "likes": 700,
        "created": "2021-02-18"
    }
];

const domContainer = document.getElementById("container");


posts.forEach(element => {

    let picProfile;

    if(element.author.image == null){

        let initials = "";

        for (let i = 0; i < element.author.name.length; i++){
            if(isUpperCase(element.author.name.charAt(i))){

                initials += element.author.name.charAt(i);
            }

        }



        picProfile = `<div class="profile-pic-default ">
                        <span>${initials}</span></div>`;

    }
    else{
        picProfile = `<img class="profile-pic" src="${element.author.image}" alt="${element.author.name}>  `;
    }

    const newPost = document.createElement("div");
    newPost.classList.add("post");
    newPost.innerHTML = `
    <div class="post__header">
    <div class="post-meta">                    
        <div class="post-meta__icon">
            ${picProfile}                  
        </div>
        <div class="post-meta__data">
            <div class="post-meta__author">${element.author.name}</div>
            <div class="post-meta__time">4 mesi fa</div>
        </div>                    
    </div>
    </div>
    <div class="post__text">Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.</div>
    <div class="post__image">
        <img src="${element.media}" alt="">
    </div>
    <div class="post__footer">
        <div class="likes js-likes">
            <div class="likes__cta">
                <a class="like-button  js-like-button" data-postid="1">
                    <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                    <span class="like-button__label">Mi Piace</span>
                </a>
            </div>
            <div class="likes__counter">
                Piace a <b id="like-counter-1" class="js-likes-counter">${element.likes}</b> persone
            </div>
        </div> 
    </div>            
    `
    
    domContainer.appendChild(newPost);

});




const likesButtons = document.querySelectorAll(".js-like-button");
const likesCounter = document.querySelectorAll(".js-likes-counter");
let likesId = [];

likesButtons.forEach((element, key) => {

    element.style.cursor = "pointer";

    element.addEventListener("click", function(){

        if(this.style.color == "blue"){
            this.style.color = "black";
            likesCounter[key].innerHTML = (parseInt((likesCounter[key].innerHTML))-1);
            likesId = likesId.filter(element => {
                if(element != (key + 1)){
                    return true;
                }
            })
            console.table(likesId);
        }
        else{

            this.style.color = "blue";
            likesCounter[key].innerHTML = (parseInt((likesCounter[key].innerHTML))+1);
            likesId.push(key + 1);
            console.table(likesId);
        }
    });
});

function italianDate(americanDate) {
    const year = americanDate.split("").slice(0,4).join("");
    const month= americanDate.split("").slice(5,7).join("");
    const day= americanDate.split("").slice(8,10).join("");
    const newDate = day + "/" + month + "/" + year;
    return newDate;
  }


  const italianPosts = posts.map(element =>{
      element.created = italianDate(element.created);
      return element;
  })

  console.table(italianPosts);


  function isUpperCase(ch) {
    if (!isNaN(ch * 1)){
       return false;
    }
     else {
       if (ch == ch.toUpperCase()) {
          return true;
       }
       else{
           return false;
       }
       
    }
 }