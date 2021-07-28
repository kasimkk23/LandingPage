const btnHamberger = document.querySelector('#btnHamburger');
const body = document.querySelector('body');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElems = document.querySelectorAll('.had-fade');


btnHamberger.addEventListener('click', function(){
    console.log('open hamburger');
    if(header.classList.contains('open')){ // open hambarger menu
        body.classList.remove('noscroll');
        header.classList.remove('open');
        fadeElems.forEach(function(element){
            element.classList.remove('fade-in');
            element.classList.add('fade-out');
        });
        
    } else {
        body.classList.add('noscroll')
        header.classList.add('open'); // close hambarger menu
        fadeElems.forEach(function(element){
            element.classList.remove('fade-out');
            element.classList.add('fade-in');
        });
        
    }

});