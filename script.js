function toggleVideo(){
    const trailer = document.querySelector('.trailer')
    const video = document.querySelector('video')
    video.pause();
    trailer.classList.toggle('active')
}


const MOVIE = [
    {title:"My-demon-title.png",
    poster:"My-demon-poster.png",
    movieName:"my demon",
    name:"My demon DUAL audio hevc,Hindi,English",
    source:"Netflix",
    rating:"7.7/10",
    relese:"Nov 14, 2023 South-Korea",
    detailsSRC: 'My-demon-DE.html',
    background:"bg-My-demon-left.jpg",
    ageRestriction:"18+",
    year:"2023",
    genre:"K-Drama",
    duration:'16h 10min',
    trailer:"y2mate.com - IVE 아이브 I AM MV_1440p.mp4",
    description:"A pitiless demon becomes powerless after getting entangled with an icy heiress, who may hold the key to his lost abilities — and his heart.",
    },
    {title:"Rent-a-Girlfriend-title.png",
    poster:"Rent-a-Girlfriend-poster.jpg",
    movieName:"Rent a girlfriend",
    name:"Rent a girlfriend, multi-audio||Hindi,English,Japanese",
    source:"netflix",
    rating:"7/10",
    relese:"Jan. 30,2020 JAPAN",
    detailsSRC: 'Rent-a-Girlfrien-DE.html',
    background:"bg-Rent-a-Girlfriend.jpg",
    ageRestriction:"18+",
    year:"2020",
    genre:"Anime",
    duration:'26h 40min',
    trailer:"y2mate.com - IVE 아이브 I AM MV_1440p.mp4",
    description:"Rent a Girlfriend : After being dumped by his girlfriend, a college student enlists a dating service to “rent” a girlfriend who, unbeknownst to him, happens to be both a fellow student and his neighbor.",
    },
    {title:"Queen-of-Tears.png",
    poster:"queen-of-tears-poster.jpg",
    movieName:"Queen of tears",
    name:"Queen of tears multilingual||Hindi,Englis,Korean(original)",
    source:"netflix",
    rating:"8.3/10",
    relese:"Jan. 12,2024 Korea",
    detailsSRC: 'Queen-of-tears-DE.html',
    background:"bg-Queen-of-Tears.jpg",
    ageRestriction:"16+",
    year:"2024",
    genre:"K-drama",
    duration:'18h 25min',
    trailer:"y2mate.com - IVE 아이브 I AM MV_1440p.mp4",
    description:"A miraculous love story of a married couple overcoming a dizzying crisis. Hae-in found out about her illness and informs a tragic news to her husband then they both tryied to over come her illness ",
    },
    {title:"Spy_x_Family-2.png",
    poster:"Spy-X-Family.jpg",
    movieName:"Spy X Family",
    name:"Spay X Family multilingual||English,Japanese(origianal)",
    source:"netflix",
    rating:"8.3/100",
    relese:"May. 20,2020 Japan",
    detailsSRC: 'Spy-X-Family-DE.html',
    background:"Spy-X-Family.jpg",
    ageRestriction:"16+",
    year:"2018",
    genre:"Anime",
    duration:'10h 40min',
    trailer:"y2mate.com - Goodbye Earth  Official Trailer  Netflix_720p.mp4",
    description:"Spy x Family Spy × Family A spy on an undercover mission gets married and adopts a child as part of his cover. His wife and daughter have secrets of their own, and all three must strive to keep together.",
    },
    {title:"Spirited_Away-title.png",
    poster:"SpiritedAway.jpg",
    movieName:"Sprited Away",
    name:"Sprited away multilingual ||English,Hindi,Japanese(original)",
    source:"netflix",
    rating:"8.6/10",
    relese:"Jul. 12,2003 Japan",
    detailsSRC: 'Sprited-Away-DE.html',
    background:"bg-sprited-away.jpg",
    ageRestriction:"10+",
    year:"2003",
    genre:"Anime,Kids",
    duration:'2h 40min',
    trailer:"y2mate.com - Goodbye Earth  Official Trailer  Netflix_720p.mp4",
    description:"A young girl, Chihiro, becomes trapped in a strange new world of spirits. When her parents undergo a mysterious transformation, she must call upon the courage she never knew she had to free her family.",
    },
    {title:"Naruto_Shippūden-title.png",
    poster:"Naruto-Shippuden-poster.jpg",
    movieName:"Naruto Shippuden",
    name:"Naruto shippuden multilingual ||English,Japanese(original)",
    source:"netflix",
    rating:"8.4/10",
    relese:"Nov 17,2002 Japan",
    detailsSRC: 'Naruto-Shippuden-DE.html',
    background:"bg-naruto.jpg",
    ageRestriction:"10+",
    year:"2002",
    genre:"Anime",
    duration:'20h 40min',
    trailer:"y2mate.com - Goodbye Earth  Official Trailer  Netflix_720p.mp4",
    description:"Naruto Uzumaki, is a loud, hyperactive, adolescent ninja who constantly searches for approval and recognition, as well as to become Hokage, who is acknowledged as the leader and strongest of all ninja in the village.",
    },
    {title:"Goodbye-Earth-title.png",
    poster:"Goodbye_Earth-poster.jpg",
    movieName:"Goodbye Earth",
    name:"Goodbye Earth multilingual. English, Korean (original)",
    source:"netflix",
    rating:"4.3/10",
    relese:"May 26,2024 South-Korea",
    detailsSRC: 'Goodbye-Earth-DE.html',
    background:"bg-Gooodbye-Earth.jpg",
    ageRestriction:"18+",
    year:"2024",
    genre:"K-drama",
    duration:'7h 30min',
    trailer:"y2mate.com - Goodbye Earth  Official Trailer  Netflix_720p.mp4",
    description:"As an asteroid hurtles towards Earth with nothing to stop it, one determined teacher fights to keep her former students safe — no matter the cost.",
    },
    {title:"the-8-show-title.png",
    poster:"The_8_Show_poster.png",
    movieName:"The 8 show",
    name:"The 8 show (Dual Audio), ENG, HND",
    source:"netflix",
    rating:"7.2/10",
    relese:"May 20,2024 Korea",
    detailsSRC: 'The-8-show-DE.html',
    background:"bg-the-8-show.jpg",
    ageRestriction:"18+",
    year:"2024",
    genre:"Drama",
    duration:'8h 20min',
    trailer:"",
    description:"Eight individuals trapped in a mysterious 8-story building participate in a tempting but dangerous show where they earn money as time passes.",
    },
  
    ]

    let id;
function ChangeContent(indexPosition){
    id = parseInt(indexPosition)
    const titleImage = document.getElementById('title')
    const trailerAddress = document.getElementById('video')
    const trailer = MOVIE[id].trailer
    const title  = MOVIE[id].title
    const movieDetails = MOVIE[id].detailsSRC
    const release = MOVIE[id].year
    const ageRestriction = MOVIE[id].ageRestriction
    const duration = MOVIE[id].duration
    const summary = MOVIE[id].description
    const genre = MOVIE[id].genre
    const backgroundImage = MOVIE[id].background
    const backgroundAddress = document.getElementById('background')
    document.getElementById('release').innerHTML = release
    document.getElementById('age-restriction').innerHTML = ageRestriction
    document.getElementById('genre').innerHTML = genre
    document.getElementById('duration').innerHTML = duration
    document.getElementById('description').innerHTML =summary
    const details= document.getElementById('ref')
    details.href = `details/${movieDetails}`
    titleImage.src = `details/images/title/${title}` 
    trailerAddress.src = `trailer/${trailer}`
    backgroundAddress.style.background = `url('details/images/bg/${backgroundImage}')`
    backgroundAddress.style.backgroundSize = 'cover';
    backgroundAddress.style.backgroundPosition = 'center';
}

function sliderButton(){
    document.getElementById('nav-bar').style.right = '0';
}

function slidebarDeactive(){
    document.getElementById('nav-bar').style.right = '-100%';
}

function searchBarToggleDown(){
    
    document.querySelector('.search-function').style.top = '50%';
}

function searchBarToggleUp(){
    
    document.querySelector('.search-function').style.top = '-100%';
}

function addInfo(){
    document.getElementById('title-h4').innerHTML = MOVIE[id].name
}

function showInfo(){
    document.getElementById('content').style.display = 'none'
    document.getElementById('box').style.display = 'none'
    document.getElementById('trailer').style.display = 'none'
    document.getElementById('sci').style.display = 'none'
    document.getElementById('display-form').style.display = 'block'

}

let randomNumber = 0;
let position = 1
;
function changeSuggestion(){
    let GetPoster = MOVIE[randomNumber].poster
    let GetHrefAddress = `details/${MOVIE[randomNumber].detailsSRC}`
    let AddressToChange= document.getElementById('poster'+position)
     AddressToChange.src =`details/images/${GetPoster}`
     let movieSource = MOVIE[randomNumber].source
     if(movieSource === '0'){
        movieSource = 'Watch'
     }
     document.getElementById('REF'+position).href = GetHrefAddress 
     document.getElementById('source'+ position).innerHTML = movieSource
     if(MOVIE[randomNumber].movieName.length >16 ){
        let X = MOVIE[randomNumber].movieName.slice(0,15) 
        let Y = X+'...'
        MOVIE[randomNumber].movieName = Y
     }
      document.getElementById('movie'+ position).innerHTML = MOVIE[randomNumber].movieName
      document.getElementById('rating'+ position).innerHTML = MOVIE[randomNumber].rating
     if( position < 6 ){
        position++
     }
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let DuplicateNumbers = [];

for (let i = 0; i <= MOVIE.length; i++){
    randomNumber++
    if(randomNumber == 8){
        randomNumber = 7
    }
    DuplicateNumbers.push(randomNumber)
    changeSuggestion()
    console.log("here is the for loop ans", randomNumber, position)
}

changeSuggestion()

let PosterAddress1;
let PosterAddress2;
let PosterAddress3;
let PosterAddress4;
let PosterAddress5;
let PosterAddress6;

let PosterNameBySRC;

let index;

function logic(){
   
}
  
function findInfo(array, posterName) {
    for (let i = 0; i < array.length; i++) {
        if (array[i].poster === posterName ) {
            return i; // Return the index if either Name or LastName matches
         }
     }
    return -1; // Return -1 if the full name is not found
 }

function findIndexByFullName(array, fullName) {
    for (let i = 0; i < array.length; i++) {
        if (array[i].poster === fullName ) {
            return i; // Return the index if either Name or LastName matches
         }
     }
    return -1; // Return -1 if the full name is not found
 }

console.log(MOVIE[5].movieName.length)
