$(function(){

    $(".menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
        top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 800);
    });

    $('.header-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        fade: true,
        arrows: false,
    });

    $('.popular-slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        prevArrow: '<button class="slider-arrows slider-arrows__left"></button>',
        nextArrow: '<button class="slider-arrows slider-arrows__right"></button>',
        responsive: [
            {
              breakpoint: 800,
              settings: {
                slidesToShow: 2,
              }
            },
            {
                breakpoint: 500,
                settings: {
                  slidesToShow: 1,
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
    });

    $('.flag').on('click', function(){
        $(this).toggleClass('active');
    });

    new WOW().init();

});