const splash = document.querySelector('.splashscreen');

document.addEventListener('DOMContentLoaded' , (e)=>{
    setTimeout(()=>{
        splash.classList.add('display-none');
    }, 2000);
})



let petitTraitTop = document.getElementById('menu-toggle-trait-top');
let petitTraitBot = document.getElementById('menu-toggle-trait-bot');
let grosTrait = document.getElementById('menu-toggle-grosTrait');
let menuToggle = document.getElementById('menu-card')

function menuAnimOver(){
    petitTraitTop.style.height='2px';
    grosTrait.style.height='15px';
    petitTraitBot.style.height='2px';
    petitTraitTop.style.transition = "height 0.09s ease-in-out 0s";
    grosTrait.style.transition = "height 0.09s ease-in-out 0s";
    petitTraitBot.style.transition = "height 0.09s ease-in-out 0s";
}
function menuAnimOut(){
    petitTraitTop.style.height='5px';
    grosTrait.style.height='10px';
    petitTraitBot.style.height='5px';
}

function menuBurger(){
    if(menuToggle.style.display=='block') {
        menuToggle.style.display='none';
        petitTraitTop.style.height='5px';
        grosTrait.style.height='10px';
        petitTraitBot.style.height='5px';
    } else{
        menuToggle.style.display='block'
        petitTraitTop.style.height='2px';
        grosTrait.style.height='15px';
        petitTraitBot.style.height='2px';
        petitTraitTop.style.transition = "height 0.09s ease-in-out 0s";
        grosTrait.style.transition = "height 0.09s ease-in-out 0s";
        petitTraitBot.style.transition = "height 0.09s ease-in-out 0s";
    }
}




let card = document.getElementById('welcome-card');

function closeCard(){
    card.style.display='none';
}