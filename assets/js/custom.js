$(document).ready(function () {
    // Carousel JS
    $('.carousel').carousel({
        interval: 5000
    });
    // WOW JS
    wow = new WOW(
            {
                animateClass: 'animated',
                offset: 100,
                mobile: true
            }
    );
    wow.init();


// Sticky Header JS
    $(function () {
        $(window).on('scroll', function () {
            var scroll = $(window).scrollTop();
            if (scroll < 10) {
                $("#sticky-header").removeClass("sticky");
            } else {
                $("#sticky-header").addClass("sticky");
            }
        });
    });

    // OWL Carousel JS
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        items: 2,
        loop: true,
        center: true,
        navText: ['<img src="assets/images/left-arrow.png" class="img-fluid" alt="Left Arrow">', '<img src="assets/images/right-arrow.png" class="img-fluid" alt="Right Arrow">'],
        nav: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 3000,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                loop: true
            },
            575: {
                items: 1,
                loop: true
            },
            768: {
                items: 4,
                loop: true
            },
            992: {
                items: 4,
                loop: true
            },
            1200: {
                items: 4,
                loop: true
            }
        }
    });
    $('.play').on('click', function () {
        owl.trigger('play.owl.autoplay', [3000])
    })
    $('.stop').on('click', function () {
        owl.trigger('stop.owl.autoplay')
    });

    // Return to Top JS
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 50) {
            $('#return-to-top').fadeIn(200);
        } else {
            $('#return-to-top').fadeOut(200);
        }
    });
    $('#return-to-top').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 3000);
    });
});
