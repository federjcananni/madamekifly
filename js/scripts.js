/*!
    * Start Bootstrap - Agency v6.0.3 (https://startbootstrap.com/theme/agency)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
    */
    (function ($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, "") ==
                this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length
                ? target
                : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top - 72,
                    },
                    1000,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });
      //Prevents "pull to reload" behaviour in Chrome. Assign to child scrollable elements.
angular.module('hereApp.directive').directive('noPullToReload', function() {
    'use strict';

    return {
        link: function(scope, element) {
            var initialY = null,
                previousY = null,
                bindScrollEvent = function(e){
                    previousY = initialY = e.touches[0].clientY;

                    // Pull to reload won't be activated if the element is not initially at scrollTop === 0
                    if(element[0].scrollTop <= 0){
                        element.on("touchmove", blockScroll);
                    }
                },
                blockScroll = function(e){
                    if(previousY && previousY < e.touches[0].clientY){ //Scrolling up
                        e.preventDefault();
                    }
                    else if(initialY >= e.touches[0].clientY){ //Scrolling down
                        //As soon as you scroll down, there is no risk of pulling to reload
                        element.off("touchmove", blockScroll);
                    }
                    previousY = e.touches[0].clientY;
                },
                unbindScrollEvent = function(e){
                    element.off("touchmove", blockScroll);
                };
            element.on("touchstart", bindScrollEvent);
            element.on("touchend", unbindScrollEvent);
        }
    };
});

    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").click(function () {
        $(".navbar-collapse").collapse("hide");
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $("body").scrollspy({
        target: "#mainNav",
        offset: 74,
    });

    // Collapse Navbar
    var navbarCollapse = function () {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);


    function fade(element) {
        var op = 1;  // initial opacity
        var timer = setInterval(function () {
            if (op <= 0.1){
                clearInterval(timer);
                element.style.display = 'none';
            }
            element.style.opacity = op;
            element.style.filter = 'alpha(opacity=' + op * 100 + ")";
            op -= op * 0.1;
        }, 50);
    }
    
    function unfade(element) {
        var op = 0.1;  // initial opacity
        element.style.display = 'block';
        var timer = setInterval(function () {
            if (op >= 1){
                clearInterval(timer);
            }
            element.style.opacity = op;
            element.style.filter = 'alpha(opacity=' + op * 100 + ")";
            op += op * 0.1;
        }, 10);
    }
})(jQuery); // End of use strict


