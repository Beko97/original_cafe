$(function(){
    var windowW = parseInt($(window).innerWidth());
    if (windowW < 767) {
        var windowH = parseInt($(window).height());
        $('.mainVisual-sp').css('min-height', windowH);
    }

    $(window).scroll(function(){
        $('.fadeUp').each(function(){
            var topH = parseInt($(this).offset().top);
            var scroll = parseInt($(window).scrollTop());
            if (scroll > (topH - windowH)) {
                $(this).addClass('fadeUp-appeared');
            }
        });
    });

    var topH = parseInt($('.about').offset().top);
    console.log('topHは' + topH);

    //To top
    $(window).scroll(function(){
        var topH = parseInt($('.menu').offset().top);
        var scroll = parseInt($(window).scrollTop());
        if (scroll > (topH - windowH)) {
            $('.pageUp').fadeIn();
        } else if (scroll < (topH - windowH)) {
            $('.pageUp').fadeOut();
        }
    });

    $('.pageUp').on('click', function(){
        $('body, html').animate({scrollTop: 0}, 500);
        return false;
    });

    //hamburger menu
    $('#hamburger').on('click', function(){
        $('span,.mainNav_list').toggleClass('clicked');
    });
});