$(function () {
  //HEADER SLIDER START
  $('.header__slider').slick({
    arrows: false,
    slidesToShow: 1,
    infinite: true,
    draggable: true,
    dots: true,
    // autoplay: true,

    customPaging: function (slider, i) {
      var slideNumber = ['Дарим скидку в День рождения', 'Сладкие дни', 'Осетинский сыр', 'Бесплатная доставка'];
      return '<button class="header__slide-btn" type="button">' + slideNumber[i] + '</button>';
    }

  })
  //HEADER SLIDER END
  //RADIOBOX START
  $(document).ready(function () {
    $('.assort__content-item').each(function (index) {
      $(this).find('.weight-radio').attr('name', 'weight' + index);
    });
  });
  //RADIOBOX END
  //REWIEVS SLIDER START
  $('.rewievs__slider').slick({
    arrows: false,
    slidesToShow: 2,
    infinite: true,
    draggable: true,
    dots: true,
    variableWidth: true,
    centerMode: true,
    appendDots: ('.rewievs__slider-dots'),
    // autoplay: true,

  })
  //REWIEVS SLIDER END
  //POPULAR SLIDER START

  $('.popular__slider').slick({
    arrows: false,
    slidesToShow: 3,
    infinite: true,
    draggable: true,
    dots: true,
    // centerMode: true,
    // centerPadding: '0',
    appendDots: ('.popular__slider-dots'),
    responsive:
      [
        {
          breakpoint: 1255,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 830,
          settings: {
            slidesToShow: 1,
          },
        },
      ]
  });



  $('.popular__slider-arrow--prev').on('click', function (e) {
    e.preventDefault()
    $('.popular__slider').slick('slickPrev')
  })

  $('.popular__slider-arrow--next').on('click', function (e) {
    e.preventDefault()
    $('.popular__slider').slick('slickNext')
  })


  //POPULAR SLIDER END

  //STICKY MENU START

  $(document).ready(function () {
    // Переменная для хранения начальной позиции меню
    var menu = $('#header__menu'); // замените #yourMenuID на реальный ID вашего меню
    var menuOffset = menu.offset().top;

    // При прокрутке страницы
    $(window).scroll(function () {
      // Получаем текущую позицию прокрутки
      var scrollTop = $(window).scrollTop();

      // Проверяем, прокрутили ли страницу ниже позиции меню
      if (scrollTop >= menuOffset) {
        // Если да, добавляем класс .sticky
        menu.addClass('sticky');
      } else {
        // Если нет, убираем класс .sticky
        menu.removeClass('sticky');
      }
    });
  });


  //STICKY MENU END
  //SMOOTH SCROLL START

  $(".header__nav-link--anchor, .footer__nav-link--anchor").on("click", function (e) {
    e.preventDefault()
    var id = $(this).attr('href'),
      top = $(id).offset().top - 200
    $('body,html').animate({ scrollTop: top }, 1500)
  });


  //SMOOTH SCROLL END

  //BURGER-MENU START

  $('.header__burger-btn').on('click', function (e) {
    e.preventDefault()
    $('.overlay').toggleClass('overlay--open')
    $('.header__burger-btn--open').toggleClass('btn--hidden')
    $('.header__burger-btn--close').toggleClass('btn--hidden')
  })

  //BURGER-MENU END

  //ORDER BTN START

  $(document).ready(function() {
    $('.basket__btn-plus').click(function(event) {
      event.preventDefault();
      var $num = $(this).siblings('.basket__num');
      var currentValue = parseInt($num.text());
      $num.text(currentValue + 1);
    });
  
    $('.basket__btn-minus').click(function(event) {
      event.preventDefault();
      var $num = $(this).siblings('.basket__num');
      var currentValue = parseInt($num.text());
      if (currentValue > 1) {
        $num.text(currentValue - 1);
      }
    });
  });
  
  $(document).ready(function() {
    $('.quantity__btn-plus').click(function(event) {
      event.preventDefault();
      var $num = $(this).siblings('.quantity__num');
      var currentValue = parseInt($num.text());
      $num.text(currentValue + 1);
    });
  
    $('.quantity__btn-minus').click(function(event) {
      event.preventDefault();
      var $num = $(this).siblings('.quantity__num');
      var currentValue = parseInt($num.text());
      if (currentValue > 1) {
        $num.text(currentValue - 1);
      }
    });
  });
  
  //ORDER BTN END
});