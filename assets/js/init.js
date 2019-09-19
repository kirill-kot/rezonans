jQuery(document).ready(function ($) {
    //    шкерим блоки при инициализации
    //    пригодится при анимации, запиленной ниже
    $('#ruslan').animate({
        left: "-100%"
    });
    $('#ruslan .master').animate({
        left: "63%"
    });
    $('#ruslan .speech').animate({
        left: "38%"
    });
    $('#vitaly').animate({
        right: "-100%"
    });
    $('#vitaly .master').animate({
        right: "63%"
    });
    $('#vitaly .speech').animate({
        right: "38%"
    });
    $('#rishat').animate({
        left: "-100%"
    });
    $('#rishat .master').animate({
        left: "63%"
    });
    $('#rishat .speech').animate({
        left: "38%"
    });
    $('#nina').animate({
        right: "-100%"
    });
    $('#nina .master').animate({
        right: "63%"
    });
    $('#nina .speech').animate({
        right: "38%"
    });
    $('#alexander').animate({
        left: "-100%"
    });
    $('#alexander .master').animate({
        left: "63%"
    });
    $('#alexander .speech').animate({
        left: "38%"
    });
    $('#tatyana').animate({
        right: "-100%"
    });
    $('#tatyana .master').animate({
        right: "63%"
    });
    $('#tatyana .speech').animate({
        right: "38%"
    });
    $('#how-we-work').animate({
        bottom: "-100%"
    });

    $('#reasons').animate({
        bottom: "-200%"
    });
        $('#about .reason1').animate({
        left: "-200%"
    });
    $('#about .reason2').animate({
        left: "-200%"
    });
    $('#about .reason3').animate({
        left: "-200%"
    });
    $('#about .reasons').animate({
        right: "-200%"
    });

    (function () {
        var widget_id = 'hWIPoNzBuX';
        var d = document;
        var w = window;

        function l() {
            var s = document.createElement('script');
            s.type = 'text/javascript';
            s.async = true;
            s.src = '//code.jivosite.com/script/widget/' + widget_id;
            var ss = document.getElementsByTagName('script')[0];
            ss.parentNode.insertBefore(s, ss);
        }
        if (d.readyState == 'complete') {
            l();
        } else {
            if (w.attachEvent) {
                w.attachEvent('onload', l);
            } else {
                w.addEventListener('load', l, false);
            }
        }
    })();

    //    материалайз дефолтные скрипты
    $('ul.tabs').tabs();
    $('.parallax').parallax();
    $('.button-collapse').sideNav({
        menuWidth: 300, // Default is 240
        edge: 'left', // Choose the horizontal origin
        closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
    });
if ($(window).width() > 992) {
    window.sr = ScrollReveal().reveal('.section', {
        duration: 500,
        delay: 100,
        scale: 0.95,
        distance: '5px',
        mobile: true,
        reset: true,
        viewOffset: { top: 5, right: 0, bottom: 5, left: 0 },
    });
}
    //    свайпер слайдеры на всей странице //

    //    наши работы
    var tattoo = new Swiper('.tattoo', {
        nextButton: '.custom-1',
        prevButton: '.custom-2',
        slidesPerView: 'auto',
        mousewheelControl: false,
        freeMode: true,
        centeredSlides: true,
        spaceBetween: 0,
        observer: true,
        autoplay: 3000,
        loop: true
    });
    var removal = new Swiper('.removal', {
        nextButton: '.custom-3',
        prevButton: '.custom-4',
        slidesPerView: 'auto',
        mousewheelControl: false,
        freeMode: true,
        centeredSlides: true,
        spaceBetween: 0,
        observer: true,
        autoplay: 3000,
        loop: true
    });
    var piercing = new Swiper('.piercing', {
        nextButton: '.custom-5',
        prevButton: '.custom-6',
        slidesPerView: 'auto',
        mousewheelControl: false,
        freeMode: true,
        centeredSlides: true,
        spaceBetween: 0,
        observer: true,
        autoplay: 3000,
        loop: true
    });
    var tattooage = new Swiper('.tattooage', {
        nextButton: '.custom-7',
        prevButton: '.custom-8',
        slidesPerView: 'auto',
        mousewheelControl: false,
        freeMode: true,
        centeredSlides: true,
        spaceBetween: 0,
        observer: true,
        autoplay: 3000,
        loop: true
    });

    //
    //    при каждом нажатии на вкладку приходится реинициализировать слайдеры, иначе они не работают без манипуляций со стороны пользователя.
    //Вот такое вот кривео говно этот ваш свайпер иногда
    $('ul.tabs a').each(function () {
        $(this).on('click', function () {
            var currTab = $('ul.tabs a.active');
            var aHref = currTab.attr('href');
            if (aHref = "tattoo") {
                var tattoo = new Swiper('.tattoo', {
                    nextButton: '.custom-1',
                    prevButton: '.custom-2',
                    slidesPerView: 'auto',
                    mousewheelControl: false,
                    freeMode: true,
                    centeredSlides: true,
                    spaceBetween: 0,
                    observer: true,
                    autoplay: 3000,
                    loop: true
                });
                tattoo.update();
            }
            if (aHref = "removal") {
                var removal = new Swiper('.removal', {
                    nextButton: '.custom-3',
                    prevButton: '.custom-4',
                    slidesPerView: 'auto',
                    mousewheelControl: false,
                    freeMode: true,
                    centeredSlides: true,
                    spaceBetween: 0,
                    observer: true,
                    autoplay: 3000,
                    loop: true
                });
                removal.update();
            }
            if (aHref = "piercing") {
                var piercing = new Swiper('.piercing', {
                    nextButton: '.custom-5',
                    prevButton: '.custom-6',
                    slidesPerView: 'auto',
                    mousewheelControl: false,
                    freeMode: true,
                    centeredSlides: true,
                    spaceBetween: 0,
                    observer: true,
                    autoplay: 3000,
                    loop: true
                });
                piercing.update();
            }
            if (aHref = "tattooage") {
                var tattooage = new Swiper('.tattooage', {
                    nextButton: '.custom-7',
                    prevButton: '.custom-8',
                    slidesPerView: 'auto',
                    mousewheelControl: false,
                    freeMode: true,
                    centeredSlides: true,
                    spaceBetween: 0,
                    observer: true,
                    autoplay: 3000,
                    loop: true
                });
                tattooage.update();
            }
        });
    });

    //    руслан
    var ruslan = new Swiper('.swiper_ruslan', {
        slidesPerView: 1,
        centeredSlides: true,
        spaceBetween: 0,
        observer: true,
        autoplay: 5000,
        loop: true
    });
    var mobile_ruslan = new Swiper('.swiper_ruslan_m', {
        slidesPerView: 1,
        centeredSlides: true,
        spaceBetween: 0,
        autoplay: 4000,
        loop: true
    });

    //    виталий
    var vitaly = new Swiper('.swiper_vitaly', {
        slidesPerView: 1,
        centeredSlides: true,
        spaceBetween: 0,
        observer: true,
        autoplay: 5000,
        loop: true
    });
    var mobile_vitaly = new Swiper('.swiper_vitaly_m', {
        slidesPerView: 1,
        centeredSlides: true,
        spaceBetween: 0,
        autoplay: 4000,
        loop: true
    });

    //    ришат
    var rishat = new Swiper('.swiper_rishat', {
        slidesPerView: 1,
        centeredSlides: true,
        spaceBetween: 0,
        observer: true,
        autoplay: 5000,
        loop: true
    });
    var mobile_rishat = new Swiper('.swiper_rishat_m', {
        slidesPerView: 1,
        centeredSlides: true,
        spaceBetween: 0,
        autoplay: 4000,
        loop: true
    });

    //    нина
    var nina = new Swiper('.swiper_nina', {
        slidesPerView: 1,
        centeredSlides: true,
        spaceBetween: 0,
        observer: true,
        autoplay: 5000,
        loop: true
    });
    var mobile_nina = new Swiper('.swiper_nina_m', {
        slidesPerView: 1,
        centeredSlides: true,
        spaceBetween: 0,
        autoplay: 4000,
        loop: true
    });

    //    александр
    var alexander = new Swiper('.swiper_alexander', {
        slidesPerView: 1,
        centeredSlides: true,
        spaceBetween: 0,
        observer: true,
        autoplay: 5000,
        loop: true
    });
    var mobile_alexander = new Swiper('.swiper_alexander_m', {
        slidesPerView: 1,
        centeredSlides: true,
        spaceBetween: 0,
        autoplay: 4000,
        loop: true
    });

    //    татьяна
    var tatyana = new Swiper('.swiper_tatyana', {
        slidesPerView: 1,
        centeredSlides: true,
        spaceBetween: 0,
        observer: true,
        autoplay: 4000,
        loop: true
    });
    var mobile_tatyana = new Swiper('.swiper_tatyana_m', {
        slidesPerView: 1,
        centeredSlides: true,
        spaceBetween: 0,
        autoplay: 4000,
        loop: true
    });

    //    отзывы
    var feedback = new Swiper('.swiper_feedback', {
        nextButton: '.swiper-button-next-custom-2',
        prevButton: '.swiper-button-prev-custom-2',
        autoHeight: true,
        slidesPerView: 1,
        centeredSlides: true,
        spaceBetween: 0,
        observer: true,
        loop: true
    });
    var feedback_m = new Swiper('.swiper_feedback_m', {
        autoHeight: true,
        slidesPerView: 1,
        centeredSlides: true,
        spaceBetween: 0,
        observer: true,
        loop: true
    });


    //    2гис карта
    DG.then(function () {
        var map = DG.map('map', {
            center: [46.351198, 48.025755],
            zoom: 18
        });
        var myIcon = DG.icon({
            iconUrl: 'assets/images/spritesheet/svg/customPin.svg',
            iconSize: [64, 64]
        });

        DG.marker([46.351328, 48.025625], {
            icon: myIcon
        }).addTo(map);
    });
    //кусок материалайза подпиленный под страницу
    //    добавлен активатор - анимированная иконка
//и еще пара костылей, чтобы скрытое содержимое карточек вылезало и пряталось корректно
//    вывод. меньше знаешь - больше ломаешь
    //    используется в мобильных версиях слайдеров для мастеров
    if ( $(window).width() < 992 ) {
    $(document).on('click.card', '.card', function (e) {
        if ($(this).find('> .card-reveal').length) {
            if ($(e.target).is($('.card-reveal .card-title')) || $(e.target).is($('.card-reveal .close-reveal'))) {
                // Make Reveal animate down and display none
                $(this).find('.card-reveal').velocity({
                    translateY: 0
                }, {
                    duration: 225,
                    queue: false,
                    easing: 'easeInOutQuad',
                    complete: function () {
                        $(this).css({
                            display: 'none'
                        });
                    }
                });
            } else if ($(e.target).is($('.card .activator')) ||
                $(e.target).is($('.card .activator i'))) {
                $(e.target).closest('.card').css({
                    'overflow': 'hidden',
                    "z-index":'30'
                });
                $(this).find('.card-reveal').css({
                    'position': 'absolute',
                    "z-index": '35',
                    display: 'flex'
                }).velocity("stop", false).velocity({
                    translateY: '-100%'
                }, {
                    duration: 300,
                    queue: false,
                    easing: 'easeInOutQuad'
                });
                //           обратить внимание,
                //               если мастера добавляются,
                //                   для корректной работы слайдеров в мобильной версии
                //                   надо слайдеры мобильной версии обновлять, как это сделано ниже!
                mobile_ruslan.update();
                mobile_rishat.update();
                mobile_vitaly.update();
                mobile_nina.update();
                mobile_alexander.update();
                mobile_tatyana.update();
            }
        }
        $('.card-reveal').closest('.card').css('overflow', 'hidden');
    });

    //навбар мобильная версия - кнопка
    $('#nav-icon').click(function () {
        $(this).toggleClass('open');
    });

    }
    //    скролл до формы
    var target = $('#contact');
    var button = $('button.flat-custom');

    $(button).click(function () {
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 2000);
    });

    //    перемотка до карты
    $("a[href^='#map']").click(function () {
        $('html, body').animate({
            scrollTop: $('#contacts').offset().top
        }, 2000);
    });

    //    анимация блоков мастеров

    //    руслан

    var ruslanDown = new Waypoint({
        element: document.getElementById('ruslan'),
        handler: function () {
            $('#ruslan').animate({
                left: "0"
            }, 1500, 'easeInOutBack');
            $('#ruslan .master').delay(750).animate({
                left: "0"
            }, 1000, "easeInOutQuad");
            $('#ruslan .speech').delay(1000).animate({
                left: "0"
            }, 750, "easeInOutQuad");
            this.destroy();
        },
        offset: "95%"
    });
    //    виталий

    var vitalyDown = new Waypoint({
        element: document.getElementById('vitaly'),
        handler: function () {
            $('#vitaly').animate({
                right: "0"
            }, 1500, 'easeInOutBack');
            $('#vitaly .master').delay(750).animate({
                right: "0"
            }, 1000, "easeInOutQuad");
            $('#vitaly .speech').delay(1000).animate({
                right: "0"
            }, 750, "easeInOutQuad");
            this.destroy();
        },
        offset: "95%"
    });
    //    ришат

    var rishatDown = new Waypoint({
        element: document.getElementById('rishat'),
        handler: function () {
            $('#rishat').animate({
                left: "0"
            }, 1500, 'easeInOutBack');
            $('#rishat .master').delay(750).animate({
                left: "0"
            }, 1000, "easeInOutQuad");
            $('#rishat .speech').delay(1000).animate({
                left: "0"
            }, 750, "easeInOutQuad");
            this.destroy();
        },
        offset: "95%"
    });
    //    нина

    var ninaDown = new Waypoint({
        element: document.getElementById('nina'),
        handler: function () {
            $('#nina').animate({
                right: "0"
            }, 1500, 'easeInOutBack');
            $('#nina .master').delay(750).animate({
                right: "0"
            }, 1000, "easeInOutQuad");
            $('#nina .speech').delay(1000).animate({
                right: "0"
            }, 750, "easeInOutQuad");
        },
        offset: "bottom-in-view"
    });
    //    александр

    var alexanderDown = new Waypoint({
        element: document.getElementById('alexander'),
        handler: function () {
            $('#alexander').animate({
                left: "0"
            }, 1500, 'easeInOutBack');
            $('#alexander .master').delay(750).animate({
                left: "0"
            }, 1000, "easeInOutQuad");
            $('#alexander .speech').delay(1000).animate({
                left: "0"
            }, 750, "easeInOutQuad");
            this.destroy();
        },
        offset: "95%"
    });
    //    татьяна

    var tatyanaDown = new Waypoint({
        element: document.getElementById('tatyana'),
        handler: function () {
            $('#tatyana').animate({
                right: "0"
            }, 1500, 'easeInOutBack');
            $('#tatyana .master').delay(750).animate({
                right: "0"
            }, 1000, "easeInOutQuad");
            $('#tatyana .speech').delay(1000).animate({
                right: "0"
            }, 750, "easeInOutQuad");
            this.destroy();
        },
        offset: "95%"
    });
//    блок онанас

    var reasons = new Waypoint ({
        element: document.getElementById('reasons'),
        handler: function () {
            $('#reasons').animate({
        bottom: "0"
    }, 1000, 'easeInOutQuad' );
            $('.reason1').animate({
                    left: '0'
                }, 1500, 'easeInOutBack');
            $('.reason2').animate({
                    left: '0'
                }, 2750, 'easeInOutBack');
            $('.reason3').animate({
                    left: '0'
                }, 4000, 'easeInOutBack');
            setTimeout(function () {
                $('.reasons').animate({
                    right: '0'
                }, 2000, 'easeInOutQuint');
            }, 2000);

                setTimeout(function () {
                $('.reason1 .icon-block').animate({
                    backgroundColor: "#340306"
                }, 1000, 'easeInOutBack');
            setTimeout(function () {
                $('.reason1 .icon-block img').attr('src', 'assets/images/spritesheet/svg/question_almost.svg');
            }, 500);
            }, 2000);
                setTimeout(function () {
                $('.reason2 .icon-block').animate({
                    backgroundColor: "#340306"
                }, 1000, 'easeInOutBack');
            setTimeout(function () {
                $('.reason2 .icon-block img').attr('src', 'assets/images/spritesheet/svg/question_almost.svg');
            }, 500);
            }, 3000);
                setTimeout(function () {
                $('.reason3 .icon-block').animate({
                    backgroundColor: "#340306"
                }, 1000, 'easeInOutBack');
            setTimeout(function () {
                $('.reason3 .icon-block img').attr('src', 'assets/images/spritesheet/svg/question_almost.svg');
            }, 500);
            }, 4000);
            this.destroy();
        },
        offset: "95%"
    });

    //    блок как мы работаем
    var howWeWork = new Waypoint({
        element: document.getElementById('how-we-work'),
        handler: function () {
            $('#how-we-work')
                .removeClass('hiddens')
                .addClass('visibled')
                .animate({
                    bottom: "0"
                }, 1000, 'easeInOutBack');
            setTimeout(function () {
                $('.call .big').animate({
                    backgroundColor: "#de1d20"
                }, 2000, 'easeInOutBack');
            }, 2500);
            setTimeout(function () {
                $('.call .big img').attr('src', 'assets/images/spritesheet/svg/phone2_almost.svg');
            }, 3500);
            setTimeout(function () {
                $('.come .big').animate({
                    backgroundColor: "#de1d20"
                }, 2000, 'easeInOutBack');
            }, 5000);
            setTimeout(function () {
                $('.come .big img').attr('src', 'assets/images/spritesheet/svg/handshake_almost.svg');
            }, 6000);
            setTimeout(function () {
                $('.make .big').animate({
                    backgroundColor: "#de1d20"
                }, 2000, 'easeInOutBack');
            }, 7500);
            setTimeout(function () {
                $('.make .big img').attr('src', 'assets/images/spritesheet/svg/like_almost.svg');
            }, 8500);
            this.destroy();
        },
        offset: "95%"
    });


    //при нажатии кнопки "отправить"
    $('.submit').on('click', function () {
        //    получаем значение ответа сервера гуглкаптчи
        var response = grecaptcha.getResponse();
        //    если значение равно нулю
        if (response.length == 0) {
            //            показываем предупреждающую табличку
            $('.error').removeClass('hidden').slideDown(500, 'easeInOutBack');
            //            и убиваем отправку формы
            $("#form").submit(function () {
                return false;
            });
            //            либо
        } else {
            $("#form").submit(function (e) { //устанавливаем событие отправки для формы с id=form
                e.preventDefault(); //запрет поведения по дефолту
                var name = $("#name").val(); //собираем значения из полей имя
                var telephone = $("#telephone").val(); //номер телефона
                var message = $("#message").val(); //сообщение
                var dataString = 'name=' + name + '&telephone=' + telephone + '&message=' + message; //передаём переменные в глобальную переменную
                $.ajax({ //делаем аякс отправку данных в пхп
                    type: "POST", //Метод отправки
                    url: "send.php", //путь до php фаила отправителя
                    data: dataString, //данные - переменная определённая выше
                    success: function () {
                        //код в этом блоке выполняется при успешной отправке сообщения
                        $("#form")[0].reset(); //сбрасываем содержимое полей
                        $('#form').slideUp(500, 'easeInOutBack'); //прячем форму
                        $('.thanks').removeClass('hidden').slideDown(750, 'easeInOutBack'); //показываем блок спасибок
                    }
                });

            });
            //            и убираем блок ошибок
            $('.error').addClass('hidden').slideUp(500, 'easeInOutBack');
        }
    });
});
