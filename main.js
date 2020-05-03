/*var getNavbar = document.querySelector("#toolbar-toogle")
var getNavbarUl = document.querySelector("#toolbar-toogle ul")
var getNavbarLinks = document.querySelectorAll("#toolbar-toogle ul li button")

getNavbar.addEventListener('click', onClickToolbar)

function onClickToolbar() {
    if (getNavbarUl.classList.contains('hide')) {
        getNavbarUl.classList.remove('hide')
    } else {
        getNavbarUl.classList.add('hide')

    }*/

var photos = [
        { image: 'images/1.jpg', legend: 'Street Art' },
        { image: 'images/2.jpg', legend: 'Fast Lane' },
        { image: 'images/3.jpg', legend: 'Colorful Building' },
        { image: 'images/4.jpg', legend: 'Skyscrapers' },
        { image: 'images/5.jpg', legend: 'City by night' },
        { image: 'images/6.jpg', legend: 'Tour Eiffel la nuit' }
    ]
    //on vient cibler la 3eme ligne (index 2) et la propriété legend   
    //console.log(photo[2].legend)

var state = new Object() //variable qui va contenir toutes les infos du carousel
var intervalID

function refreshSlider() {
    //    	state.index -> contient l'ID de l'image qu'on souhaite afficher


    var caption = document.querySelector('.slider figcaption')
    var img = document.querySelector('.slider img')
    caption.textContent = photos[state.index].legend
    img.src = photos[state.index].image

    // document.querySelector('.slider figcaption').textContent = photos[state.index].legend
}

function onToolbarToggle() {
    //affiche ou cache la ul	
    document.querySelector('nav.toolbar ul').classList.toggle('hide')

    //changer icône dans le <a>
    var icone = document.querySelector('#toolbar-toggle i')
    icone.classList.toggle('fa-arrow-right')
    icone.classList.toggle('fa-arrow-down')
}

function onSliderGoToNext() {
    state.index++
        if (state.index == photos.length) {
            state.index = 0
        }
    refreshSlider()
}

function onSliderGoToPrevious() {
    state.index--
        if (state.index < 0) {
            state.index = photos.length - 1
        }
    refreshSlider()
}


function getRandomInteger(min, max) {
    // Renvoie un nombre entier aléatoire compris entre les arguments min et max inclus.
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function onSliderGoToRandom() {
    var aleatoire
    do {
        aleatoire = getRandomInteger(0, photos.length - 1)
    } while (aleatoire == state.index)
    state.index = aleatoire
    refreshSlider()

}



function onSliderGoToPlay() {
    var icone = document.querySelector("#slider-toggle i")
    icone.classList.toggle("fa-play")
    icone.classList.toggle("fa-pause")

    if (state.timer == null) {
        state.timer = setInterval(onSliderGoToNext, 1000)
            //console.log(state.timer)
        this.title = "Arrêter le carrousel"
    } else {
        clearInterval(state.timer)
        state.timer = null
        this.title = "Démarrer le carrousel"
    }
}








document.addEventListener('DOMContentLoaded', function() {
    state.index = 0

    //installer gestionnaires d'événement
    document.querySelector('#toolbar-toggle').addEventListener('click', onToolbarToggle)
    document.querySelector('#slider-next').addEventListener('click', onSliderGoToNext)
    document.querySelector('#slider-previous').addEventListener('click', onSliderGoToPrevious)
    document.querySelector('#slider-random').addEventListener('click', onSliderGoToRandom)
    document.querySelector('#slider-toggle').addEventListener('click', onSliderGoToPlay)







    //afficher la première photo : appeler une fonction qui charge la photo dans le HTML à partir de l'index stocké dans state
    refreshSlider()
})