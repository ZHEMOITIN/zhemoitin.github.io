const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});


const procent = document.querySelectorAll('.progress__procent'),
      rectangle = document.querySelectorAll('.progress__rectangle span');

procent. forEach((item, i) => {
    rectangle[i].style.width = item.innerHTML;  
});