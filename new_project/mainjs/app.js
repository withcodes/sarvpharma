


const toggleButton = document.getElementsByClassName('navbar-toggle')[0];
const navbarLink = document.getElementsByClassName('navbar-link');

toggleButton.addEventListener('click', function (){
    for(var i=0; i<navbarLink.length; i++)
    navbarLink[i].classList.toggle('active')

});