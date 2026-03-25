// ----------------------------------------------------- Базовые скрипты --------------------------------------------------------
import { BaseHelpers } from './helpers/base-helpers';
BaseHelpers.addLoadedClass();
BaseHelpers.checkWebpSupport();
BaseHelpers.calcScrollbarWidth();
BaseHelpers.addTouchClass();
BaseHelpers.headerFixed();

import autoREM from './helpers/autoRem.js';
autoREM(1440,16);

// ----------------------------------- Section 1 - Slider ----------------------------------------------------
import carouselSplideInit from './modules/carousel-splide.js';
carouselSplideInit()
new Splide( '#slider', {
    type : 'slide',       // (slide, loop, fade) - соответственно (незацикленное, зацикленное, замена путем fade эффекта)
    direction: 'ltr' ,   // направление карусели (ltr, rtl, ttb) соответсвенно (слева на право, справа на лево, сверху вниз)
    drag: false,          // разрешать перетаскивать слайдер
    autoplay: true,      // включить авто перелистывание
    interval: 6000,      // интервал автоматического перелистывания слайдов в м\сек
    pauseOnHover: true,  // остановить автоматическое перелистывание при наведении курсора мыши

    perMove: 1,          // количество перемещаемых слайдов за раз
    perPage: 1,          // Количество слайдов 

    arrows: true,        // отображать стрелки
    // heightRatio : 0.3,   // кэф высоты стрелок

    pagination: true,   // отображать пагинацию

    speed: 2000,         // скорость перелистывания в м\сек
    rewindSpeed: 2000,   // скорость перемотки слайдов

    rewind     : true,   // позволяет вообще перемотку слайдов
    rewindByDrag: true,  // позволяет делать перемотку слайдов перетаскиванием мыши

  } ).mount();
// ------------------------ Header navigation -------------------------------------

import headerNav from './modules/header-nav.js';
headerNav();

// ---------- Images adaptive Resize to constant attitude of parties use [attitude-img="0.4"] in html --------------------------
import { ImgResponsive } from './myJsClasses/wl-img-responsive.js'

new ImgResponsive({
  delay: 200,
  attitude: 0.71,
  element: '.attitude__071'
})

// --------------------------------------------------- Popup images -------------------------------------------------------------
import { WLPopUp } from './myJsClasses/wl-popup.js'
new WLPopUp({
  id: 'parent',                 // -- обязательно указывать (нужно для создания модального окна и должен совпадать с аттрибутом родителя--)
  parent: false,                 // -- true чтобы сгруппировать галлерейки по родителю, если false то все popup-item="child" в одном списке  
  item: 'child',                // -- аттрибут для дочерних эллементов 
  overlay: '' // -- кнопка для открытия popup (появл. при наведении курсора)
}).init()
// ------------------------------------------------- АНИМАЦИЯ ПРИ СКРОЛЛЕ ОТ ВЕБЛЕГКО --------------------------------------------------
import { WLScrollAnimation } from './myJsClasses/wl-scroll-animation.js'
new WLScrollAnimation({
  point: 0,                 // координаты по Y снизу на экране, когда начнет срабатывать скрипт(при скроле)
  delay: 150,                  // нарастающая задержка для элементов вряду
  parent: '.reveal-row',      // родительский элемент для организации цикла вряду
  child: '.reveal-item',         // элементы к которым будет применена анимация
  activeClass: 'active'       // активный класс для стилизации анимации
}).init()
new WLScrollAnimation({
  point: 100,
  child: '.reveal-opacity',
  activeClass: 'active'
}).init()
new WLScrollAnimation({
  point: 100,
  child: '.reveal-left',
  activeClass: 'active'
}).init()
new WLScrollAnimation({
  point: 100,
  child: '.reveal-right',
  activeClass: 'active'
}).init()

// ------------------------------------------------- Текстовы модальное окно --------------------------------------------------
import textPopup from './modules/text-popup.js';
textPopup()
// доступ через классы : 
// #popup #popupClose - для кликов, 
// .popup--show - для отображения
// .popup-title .popup-content - для вставки HTML


import buttonsListener from './modules/buttons-listener.js'
buttonsListener()