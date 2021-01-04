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

    console.log(inp);
});

var quantity = document.querySelectorAll('.quantity__button').forEach(function (btn) {
    btn.addEventListener('click', function () {
        var direction = this.dataset.direction;
        var inp = this.parentElement.querySelector('.quantity');
        var currentValue = +inp.value;
        var clouserePrice = this.parentElement.parentElement.querySelector('.hidden__price');
        var price = this.parentElement.parentElement.querySelector('.current__price');
        var newValue = void 0;
        var newPrice = void 0;

        if (direction === 'plus') {
            newValue = currentValue + 1 < 99 ? currentValue + 1 : 99;
        } else {
            newValue = currentValue - 1 > 0 ? currentValue - 1 : 0;
        }

        inp.value = newValue;
        newPrice = clouserePrice.textContent * newValue;
        price.textContent = newPrice + ' ';
    });
});

var basket = document.querySelectorAll('.set__button').forEach(function (btn) {
    btn.addEventListener('click', function () {
        var basket = document.querySelector('.basket');
        var basketExit = document.querySelector('.basket__exit');
        var basketBg = document.querySelector('.basket__bg');

        var name = this.parentElement.querySelector('.set__name').innerHTML;

        var quantity = this.parentElement.querySelector('.quantity').value;

        var price = this.parentElement.querySelector('.current__price').innerHTML + 'руб.';

        var image = this.parentElement.parentElement.querySelector('.set__image img').getAttribute('src');

        console.log(image, name, price, quantity);

        var basketImage = document.querySelector('.basket__image');
        var basketName = document.querySelector('.basket__item-title');
        var basketQuantity = document.querySelector('.basket__item-quantity');
        var basketPrice = document.querySelector('.basket__item-price');

        if (quantity >= 1) {
            basketImage.src = image;
            basketName.value = name;
            basketQuantity.value = 'Количество: ' + quantity;
            basketPrice.value = 'Сумма заказа: ' + price;

            basket.classList.add('basket__active');
            basketBg.classList.add('basket__bg-active');
        } else {}

        basketExit.addEventListener('click', function () {
            basket.classList.remove('basket__active');
            basketBg.classList.remove('basket__bg-active');
        });
        basketBg.addEventListener('click', function (elem) {
            basket.classList.remove('basket__active');
            basketBg.classList.remove('basket__bg-active');
        });
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