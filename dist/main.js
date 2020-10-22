'use strict';

var disableScroll = function disableScroll() {
    var paddingOffset = window.innerWidth - document.body.offsetWidth + 'px';
    document.body.classList.toggle('scroll-lock');
    document.body.style.paddingRight = paddingOffset;
};

var burger = document.querySelector('.menu-icon').addEventListener('click', function () {
    var _this = this;

    var menu = document.querySelector('.menu');
    var secondMenu = document.querySelector('.second-menu');
    this.classList.toggle('menu-icon__active');
    menu.classList.toggle('menu__active');
    secondMenu.classList.toggle('menu__active-second');
    disableScroll();

    var links = document.querySelectorAll('.menu__link').forEach(function (element) {
        element.onclick = function () {
            menu.classList.toggle('menu__active');
            _this.classList.toggle('menu-icon__active');
            secondMenu.classList.toggle('menu__active-second');
            disableScroll();
        };
    });
});

var buy = document.querySelector('.set__sumbit-button').addEventListener('click', function (e) {
    e.preventDefault;
    var popup = document.querySelector('.success');
    var exit = document.querySelector('.success__exit');
    var bg = document.querySelector('.success__bg');

    popup.classList.add('success__active');
    bg.classList.add('success__bg-active');

    exit.addEventListener('click', function (elem) {
        popup.classList.remove('success__active');
        bg.classList.remove('success__bg-active');
    });
    bg.addEventListener('click', function (elem) {
        popup.classList.remove('success__active');
        bg.classList.remove('success__bg-active');
    });
});

$(document).ready(function () {
    $('.feedback__list').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        responsive: [{
            breakpoint: 421,
            settings: {
                slidesToShow: 1
            }
        }]
    });
});