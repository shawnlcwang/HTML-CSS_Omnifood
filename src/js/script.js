// promise-like object that resolves when document is ready
$(document).ready(function() {
    /**
     * jQuery testing
     */
    // bind event handler to the “click” JavaScript event
    $('h1').click(function() {
        // get value of style property for first element in matched elements set
        // OR set one/more CSS properties for every matched element
        $(this).css('color', '#e67e22');
    })


    /**
     * sticky navigation 
     * http://imakewebthings.com/waypoints/guides/jquery-zepto/
     */
    // Waypoints jQuery lib: .waypoint
    $('.js--section-features').waypoint(function(direction) {
        if (direction == 'down') {
            // adds specified class(es) to each element in set of matched elements
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        // waypoint method offset
        offset: '60px'
    });


    /**
     * hero buttons scroll
     */
    $('.js--scroll-to-plans').click(function() {
        // perform custom animation of set of CSS properties.
        $('html, body').animate({ scrollTop: $('.js--section-plans').offset().top }, 1000)
    });

    $('.js--scroll-to-start').click(function() {
        // perform custom animation of set of CSS properties.
        $('html, body').animate({ scrollTop: $('.js--section-features').offset().top }, 1000)
    });


    /**
     * navigation buttons scroll 
     * https://css-tricks.com/snippets/jquery/smooth-scrolling/
     */
    // Select all links with hashes
    $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function(event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
                && 
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000, function() {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        };
                    });
                }
            }
        });

    /**
     * Animations on scroll 
     * https://animate.style/
     */
    $('.js--wp-1').waypoint(function(direction) {
        // adds specified class(es) to each element in set of matched elements
        $('.js--wp-1').addClass('animate__animated animate__fadeIn');
    }, {
        offset: '50%'
    });

    $('.js--wp-2').waypoint(function(direction) {
        // adds specified class(es) to each element in set of matched elements
        $('.js--wp-2').addClass('animate__animated animate__fadeInUp');
    }, {
        offset: '50%'
    });

    $('.js--wp-3').waypoint(function(direction) {
        // adds specified class(es) to each element in set of matched elements
        $('.js--wp-3').addClass('animate__animated animate__fadeIn');
    }, {
        offset: '50%'
    });

    $('.js--wp-4').waypoint(function(direction) {
        // adds specified class(es) to each element in set of matched elements
        $('.js--wp-4').addClass('animate__animated animate__pulse');
    }, {
        offset: '50%'
    });


    /**
     * mobile navigation 
     */
    $('.js--nav-icon').click(function() {
        const nav = $('.js--main-nav');
        const icon = $('.js--nav-icon menu')
        // display/hide matched elements with sliding motion
        nav.slideToggle(200);
        // determine whether any of matched elements assigned given name attribute
        // if ($("ion-icon[name='menu-outline']")) {
        //     console.log('here1');
        //     $('.menu').attr('name', 'close-outline');
        // } else {
        //     console.log('here2');
        //     $('.menu').attr('name', 'menu-outline');
        // }
    });
})