// get all navigation__link 
var navigation__link = document.querySelectorAll('.navigation__link');

// get first input element
var input = document.querySelector('input');

//get element with id home,services,about and contact
var home = document.getElementById('home');
var services = document.getElementById('services');
var about = document.getElementById('about');
var contact = document.getElementById('contact');



//onclick naviagation__link uncheck input
for (var i = 0; i < navigation__link.length; i++) {
    navigation__link[i].onclick = function () {
        input.checked = false;
    };
}


home.scrollIntoView({
    behavior: 'smooth'
});

services.scrollIntoView({
    behavior: 'smooth'
});

about.scrollIntoView({
    behavior: 'smooth'
});

contact.scrollIntoView({
    behavior: 'smooth'
});