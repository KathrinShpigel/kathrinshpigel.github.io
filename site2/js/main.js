$(function(){
    $('.slider').slick({
        nextArrow: '<button class="slick-arrow slick-next"><img src="images/next.svg" alt="next arrow"></button>',
        prevArrow: '<button class="slick-arrow slick-prev"><img src="images/prev.svg" alt="prev arrow"></button>',
        responsive: [
            {
            breakpoint: 441,
            settings: {
                arrows: false
                }
            }
        ]
    });
    $(window).scroll(function(){
        if ($(this).scrollTop() > 500) {
            $('.scrollUp').fadeIn();
        } else {
            $('.scrollUp').fadeOut();
        }
    });     
    $('.scrollUp').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 700);
        return false;
    });
});
