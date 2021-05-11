
    /* Snackbar */

    var snack = null;
    var snackTimeout = null;

    function showSnackbar(message, time = 3000) {

    if (snack == null) {

        createSnackbar();

    }

    clearTimeout(snackTimeout);

    snack.innerHTML = message;

    snack.classList.remove('hide');
    snack.classList.add('show');

    snackTimeout = setTimeout(closeSnackbar, time);

}

    function closeSnackbar() {

    if (snack != null) {

        snack.classList.remove('show');
        snack.classList.add('hide');

    }

}

    function createSnackbar() {

    snack = document.createElement('div');

    snack.id = 'snackbar';
    snack.innerHTML = 'Empty';

    document.body.appendChild(snack);

    }

    //   all ------------------
function initParadoxWay() {
    "use strict";
   
    if ($(".testimonials-carousel").length > 0) {
        var j2 = new Swiper(".testimonials-carousel .swiper-container", {
            preloadImages: false,
            slidesPerView: 1,
            spaceBetween: 20,
            loop: true,
            grabCursor: true,
            mousewheel: false,
            centeredSlides: true,
            pagination: {
                el: '.tc-pagination',
                clickable: true,
                dynamicBullets: true,
            },
            navigation: {
                nextEl: '.listing-carousel-button-next',
                prevEl: '.listing-carousel-button-prev',
            },
            breakpoints: {
                1024: {
                    slidesPerView: 3,
                },
                
            }
        });
    }
    
// bubbles -----------------
    
    
    setInterval(function () {
        var size = randomValue(sArray);
        $('.bubbles').append('<div class="individual-bubble" style="left: ' + randomValue(bArray) + 'px; width: ' + size + 'px; height:' + size + 'px;"></div>');
        $('.individual-bubble').animate({
            'bottom': '100%',
            'opacity': '-=0.7'
        }, 4000, function () {
            $(this).remove()
        });
    }, 350);
    
}

//   Init All ------------------
$(document).ready(function () {
    initParadoxWay();
});