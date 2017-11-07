$(document).ready(function () {

    //Mobile menu
    $('.icon').click(function () {
        $('.icon').toggleClass('active');
        $('.slideout-menu').toggleClass('show');
        $('body').toggleClass('body-overflow');
    });

    //Sticky navigation
    $(window).scroll(function () {
        if ($(this).scrollTop() > 1) {
            $('.header__top--nav').addClass("fixed");
        }
        else {
            $('.header__top--nav').removeClass("fixed");
        }
    });

    //Smooth scrolling by anchors
    $("#menu").on("click", "a", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top - 66}, 1500);
    });

    //Carousel
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        items: 1,
        loop: true,
        margin: 0,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true
    });
    $('.play').on('click', function () {
        owl.trigger('play.owl.autoplay', [5000])
    });
    $('.stop').on('click', function () {
        owl.trigger('stop.owl.autoplay')
    });

    //Active Tabs
    var menu_selector = ".steps";

    function onScroll() {
        var scroll_top = $(document).scrollTop();
        $(menu_selector + " a").each(function () {
            var hash = $(this).attr("href");
            var target = $(hash);
            if (target.position().top - 66 <= scroll_top && target.position().top + target.outerHeight() > scroll_top) {
                $(menu_selector + " a.active").removeClass("active");
                $(this).addClass("active");
            } else {
                $(this).removeClass("active");
            }
        });
    }

    $(document).ready(function () {
        $(document).on("scroll", onScroll);
        $("a[href^=#]").click(function (e) {
            e.preventDefault();
            $(document).off("scroll");
            $(menu_selector + " a.active").removeClass("active");
            $(this).addClass("active");
            var hash = $(this).attr("href");
            var target = $(hash);
            $("html, body").animate({
                scrollTop: target.offset().top
            }, 500, function () {
                window.location.hash = hash;
                $(document).on("scroll", onScroll);
            });

        });
    });
})