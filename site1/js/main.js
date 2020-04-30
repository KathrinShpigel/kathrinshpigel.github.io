$(function(){
    $('.header__slider').slick({
        infinite: true,
        fade: true,
        prevArrow: '<img src="../images/arow-left.svg" alt="Prev" class="slider-arrows slider-arrow__left">',
        nextArrow: '<img src="../images/arow-right.svg" alt="Next" class="slider-arrows slider-arrow__right">',
        asNavFor: '.slider-dotshead',
        responsive: [
          {
            breakpoint: 470,
            settings: {
              arrows: false
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
    });
    $('.slider-dotshead').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        asNavFor: '.header__slider',
        responsive: [
          {
            breakpoint: 470,
            settings: "unslick"
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
    });
    $('.surf-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        centerMode: true,
        focusOnSelect: true,
        prevArrow: '<img src="../images/arow-left.svg" alt="Prev" class="slider-arrows slider-arrow__left">',
        nextArrow: '<img src="../images/arow-right.svg" alt="Next" class="slider-arrows slider-arrow__right">',
        asNavFor: '.slider-map',
        responsive: [
          {
            breakpoint: 1366,
            settings: {
              slidesToShow: 3
            }
          },
          {
            breakpoint: 970,
            settings: {
              slidesToShow: 2,
              centerMode: false
            }
          },
          {
            breakpoint: 720,
            settings: {
              slidesToShow: 1
            }
          },
          {
            breakpoint: 460,
            settings: {
              slidesToShow: 1,
              centerMode: false
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
    });
    $('.slider-map').slick({
        slidesToShow: 8,
        centerMode: true,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: '.surf-slider',
        focusOnSelect: true,
        // надо при 1340 добавить: slidesToShow: 3, centerMode: true,
        // а было: slidesToShow: 8, centerMode - не было
        responsive: [
          {
            breakpoint: 1340,
            settings: {
              slidesToShow: 3,
              centerMode: true
            }
          },
          {
            breakpoint: 970,
            settings: {
              slidesToShow: 2,
              centerMode: false
            }
          },
          {
            breakpoint: 720,
            settings: {
              slidesToShow: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
    });

    $('.holder__slider, .shop__slider').slick({
        infinite: true,
        fade: true,
        prevArrow: '<img src="../images/arow-left.svg" alt="Prev" class="slider-arrows slider-arrow__left">',
        nextArrow: '<img src="../images/arow-right.svg" alt="Next" class="slider-arrows slider-arrow__right">'
    });

    jQuery('<div class="quantity-nav"><div class="quantity-button quantity-up">+</div><div class="quantity-button quantity-down">-</div></div>').insertAfter('.quantity input');
    jQuery('.quantity').each(function() {
      var spinner = jQuery(this),
        input = spinner.find('input[type="number"]'),
        btnUp = spinner.find('.quantity-up'),
        btnDown = spinner.find('.quantity-down'),
        min = input.attr('min'),
        max = input.attr('max');

      btnUp.click(function() {
        var oldValue = parseFloat(input.val());
        if (oldValue >= max) {
          var newVal = oldValue;
        } else {
          var newVal = oldValue + 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
      });

      btnDown.click(function() {
        var oldValue = parseFloat(input.val());
        if (oldValue <= min) {
          var newVal = oldValue;
        } else {
          var newVal = oldValue - 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
      });
    });

    $('.quantity-button').on('click', function(){
        let summ = $('.nights').val() * $('.summ').data('nights') + $('.guests').val() * $('.summ').data('guests');
        $('.summ').html('$' + summ);
    });
    $('.slider-arrows').on('click', function(){
        let summ = $('.nights').val() * $('.summ').data('nights') + $('.guests').val() * $('.summ').data('guests');
        $('.summ').html('$' + summ);
    });
    let summ = $('.nights').val() * $('.summ').data('nights') + $('.guests').val() * $('.summ').data('guests');
    $('.summ').html('$' + summ);

    $('.surfboard-box__circle').on('click', function(){
        $(this).toggleClass('active');
    });

    $('.menu-btn').on('click', function(){
      $('.menu').toggleClass('active');
      $(this).toggleClass('close');
    });

});