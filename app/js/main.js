$(function(){
    $('.header__slider').slick({
        infinite: true,
        fade: true,
        prevArrow:'<img src="./img/arrows-left.svg" alt="" class=" slider__arrows arrows-left"></img>',
        nextArrow:'<img src="./img/arrows-right.svg" alt="" class=" slider__arrows arrows-right"></img>',
        asNavFor: '.slider-dots',
    });

    $('.slider-dots').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        asNavFor: '.header__slider',
    })

    $('.serf-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow:'<img src="./img/arrows-left.svg" alt="" class=" slider__arrows arrows-left"></img>',
        nextArrow:'<img src="./img/arrows-right.svg" alt="" class=" slider__arrows arrows-right"></img>',
        asNavFor: '.map-dots',
    })

    $('.map-dots').slick({
        slidesToShow: 8,
        slidesToScroll: 1,
        focusOnSelect: true,
        asNavFor: '.serf-slider',
    })

    $('<div class="quantity-nav"><div class="quantity-button quantity-up"><img src="./img/plus.svg" alt=""></div></div><div class="quantity-button quantity-down"><img src="./img/minus.svg" alt=""></div></div></div>').insertAfter('.quantity input');
    $('.quantity').each(function() {
      var spinner = $(this),
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
        let sum = $('.night').val() * $('.sum').data('night') + ($('.guests').val() - 1) * $('.sum').data('guests');
        $('.sum').html('$' + sum);
    });
    
    let sum = $('.night').val() * $('.sum').data('night') + ($('.guests').val() - 1) * $('.sum').data('guests');
    $('.sum').html('$' + sum);

    $('.surfboard__circle').on('click', function(){
      $(this).toggleClass('active');
    })

    new WOW().init();
});