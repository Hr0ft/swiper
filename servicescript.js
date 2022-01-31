let swiper = new Swiper('.swiper-container', {
    slidesPerView: 'auto',
            a11y: true,
            keyboardControl: true,
            grabCursor: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            }
    
});


const body = window.screen.width;
const swipers = document.querySelectorAll('.swiper-container');

    swipers.forEach ( function() {
        if(body >= 768) { 
            swiper.disable();
        }
    });

let change = document.querySelector('.btn__open');
let openItem = document.querySelector('.brand__slider');

    change.addEventListener('click', function() {
        let changeText = document.getElementById('btn__open');
        if (changeText.innerHTML == 'Показать все' ) {
            changeText.innerHTML = 'Скрыть';
            openItem.style.height = 'auto';
            change.classList.add('open__button--reverse')
        }
        else {
            changeText.innerHTML = 'Показать все';
            openItem.style.height = '200px';
            change.classList.remove('open__button--reverse');
        }
    });    

    // (function() {

    //     'use strict';
      
    //     const breakpoint = window.matchMedia( '(min-width:768px)' );
    //     let mySwiper;
    
    //     function enableSwiper() {
    //         mySwiper = new Swiper('.swiper-container', {
    //             slidesPerView: 'auto',
    //             a11y: true,
    //             keyboardControl: true,
    //             grabCursor: true,
    //             pagination: {
    //                 el: '.swiper-pagination',
    //                 clickable: true,
    //             }
    //         })
    //     };
    //     const breakpointChecker = function() {
    //       if ( breakpoint.matches === true ) {
    //         if ( mySwiper !== undefined ) mySwiper.destroy( true, true );
    //         return;
    //         } else if ( breakpoint.matches === false ) {
    //           return enableSwiper();
    //         }
    //     };
    //     breakpoint.addListener(breakpointChecker);
    //     breakpointChecker();
    //   })(); 
      
    // //          brand btn open
    // let changeBrandBtn = document.querySelector('.read-more__js--brand');
    // let openBrand = document.querySelector('.brand-swiper .swiper-container--js--close');
    
    // changeBrandBtn.addEventListener('click', function() {
    //         let changeText = document.getElementById('read-more--brand');
    //         if (changeText.innerHTML == 'Показать все' ) {
    //             changeText.innerHTML = 'Скрыть';
    //             openBrand.style.height = 'auto';            
    //             changeText.classList.add('read-more__btn--open');
    //             changeText.classList.remove('read-more__btn--close');
    //            } else {
    //             changeText.innerHTML = 'Показать все';
    //             openBrand.style.height = '195px';
    //             changeText.classList.remove('read-more__btn--open');
    //             changeText.classList.add('read-more__btn--close');
            
    //         }
    //     });