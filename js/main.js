$(document).ready(function () {
    /*----------------------------
            顶部菜单背景控件
    ----------------------------*/
    $(window).scroll(function () {
        $('header').toggleClass('nav-active', $(this).scrollTop() > 10);
        $('.back-to-top').toggleClass('top-btn-active', $(this).scrollTop() > 400);
    })

    /*----------------------------
           Hamburger menu
    ----------------------------*/
    $('.hamburger-menu, .menu li a').on('click', function () {
        $('.line-top, .line-center, .line-bottom, .menu').toggleClass('current');
    })
    /*----------------------------
              轮播控件
    ----------------------------*/
    $('.owl-carousel.introduce-carousel').owlCarousel({
        dots: true,
        loop: true,
        margin: 30,
        nav: false,
        smartSpeed: 800,
        autoplay: true,
        responsive: {
            0: {
                items: 1
            },
            375: {
                items: 1
            },
            767: {
                items: 1
            },
            992: {
                items: 1
            },
            1200: {
                items: 1
            }
        }
    });
    /*----------------------------
              轮播控件
    ----------------------------*/
    $('.owl-carousel.work-carousel').owlCarousel({
        dots: true,
        loop: true,
        margin: 30,
        nav: false,
        autoplay: true,
        smartSpeed: 800,
        center: true,
        responsive: {
            0: {
                stagePadding: 15,
                items: 1
            },
            576: {

                items: 1
            },
            600: {
                items: 2
            },
            767: {
                items: 2
            },
            992: {
                items: 3
            },
            1200: {
                items: 3
            }
        }
    });
    /*----------------------------
              滚动动画
    ----------------------------*/
    $('.back-to-top').on('click', function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: 0,
        }, 600);
    });
    /*----------------------------
        wishlist animation
    ----------------------------*/
    $(".wishlist").click(function () {
        $(this).find(".b-tn").toggleClass("animate");
        $(this).find(".b-tn").toggleClass("active");
    });
    // ease intialize
    $('.menu li a').bind('click', function (event) {
        var $anchor = $(this);
        var headerH = '80';
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - headerH + "px"
        }, 600, 'easeInSine');
        event.preventDefault();
    });
});

