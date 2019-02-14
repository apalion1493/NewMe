$(document).ready(function() {
    $('.form-group input').focus(function(){
        $(this).parent().addClass('active');
    });

    $('.form-group input').focusout(function(){
        $(this).parent().removeClass('active');
    });

    $('.form-group__input').change(function(){
        if ($(this).val()) {
            $(this).parent().addClass('input-text');
        } else {
            $(this).parent().removeClass('input-text');
        }
    });

    $(".form-group__input").blur(function(){
        if($(this).val() !== ''){
            $(this).parent().addClass('show');
        } else {
            $(this).parent().removeClass('show');
        }
    });

    $(".form-control").blur(function(){
        if($(this).val() !== ''){
            $(this).parent().addClass('show');
        } else {
            $(this).parent().removeClass('show');
        }
    });


});

$(document).ready(function() {
    $(".pers-acc__header-burger").click(function() {
        $(".pers-acc__header-nav").addClass("active");
    });
});

$(document).ready(function() {
    $(".top-main-menu__burger").click(function() {
        $(".top-main-menu__items").addClass("active");
    });
});

jQuery(function($){
    $(document).mouseup(function (e){ // событие клика по веб-документу
        var div = $(".pers-acc__header-nav"); // тут указываем ID элемента
        if (!div.is(e.target) // если клик был не по нашему блоку
            && div.has(e.target).length === 0) { // и не по его дочерним элементам
            // div.hide(); // скрываем его
            $(".pers-acc__header-nav").removeClass("active");
        }
    });

    $(document).mouseup(function (e){ // событие клика по веб-документу
        var div = $(".top-main-menu__items"); // тут указываем ID элемента
        if (!div.is(e.target) // если клик был не по нашему блоку
            && div.has(e.target).length === 0) { // и не по его дочерним элементам
            // div.hide(); // скрываем его
            $(".top-main-menu__items").removeClass("active");
        }
    });
});

/////////// кнопка на странице настойки акк
$('.switch-btn').click(function(){
    $(this).toggleClass('switch-on');
    if ($(this).hasClass('switch-on')) {
        $(this).trigger('on.switch');
    } else {
        $(this).trigger('off.switch');
    }
});
//////////

$(window).width(function() {
    if(document.documentElement.clientWidth < 767.98) {
        $(".main-header__animation-human img").remove();
        $('.main-header__animation-human').append('<img src="img/index-page/human-header-mobil.png" alt="">');

        $('.new-me-main-text__first p').html('NEW ME — твой персональный помощник моделирования тела');

        $('.new-me-main-text__second p').html('<p>Индивидуально подобранные:</p>' +
            '<ul><li>питание</li><li>тренировки</li><li>организация режима</li></ul>');
    }

    if (document.documentElement.clientWidth < 1199.98 && document.documentElement.clientWidth > 767.98 ) {
        jQuery(document).ready(function(){
            $('.row.benefits-list.benefits-list__first').insertAfter('.test1');
            $('.row.benefits-list.benefits-list__second').insertAfter('.test2');
            $(".people-bg__first img").remove();
            $('.people-bg__first').append('<img src="img/index-page/first-piple-pln.svg" alt="">');
            $(".people-bg__second img").remove();
            $('.people-bg__second').append('<img src="img/index-page/second-people__pln.svg" alt="">');
            $(".people-bg__three img").remove();
            $('.people-bg__three').append('<img src="img/index-page/three-people__pln.svg" alt="">');
        });
    }

});

$(document).ready(function () {

    $('.pers-acc-nutrition__switch-checkbox').click(function () {

        if ($(this).prop('checked')) {
            $(".accordion").css("display","none");
            $(".shopping-list").css("display","block");
        }
        else {
            $(".accordion").css("display","block");
            $(".shopping-list").css("display","none");
        }
    });



});

// $('#accordionExample').on('shown.bs.collapse', function () {
//     $(".card-header__radio").addClass("table-nutrition-accordion__top");
// });



// $(document).ready(function () {
//     $('.card-header').click(function () {
//         if($(".table-nutrition-accordion__collapse").hasClass('show')) {
//             $(this).parent().removeClass('test');
//         } else {
//             $(this).parent().addClass('test');
//         }
//     })
// });























// $('.form-group').find('input').each(function(){
//     if(!$(this).prop('required')){
//         alert('1');
//     } else {
//         alert('2');
//     }
// });



// $(document).ready(function() {
//     if ($('#weightForm3').is(':disabled')) {
//         $(this).parent().addClass('test');
//     }
// });


//
// $(".form-group").change(function() {
//     if ($(this).val().trim().length) {
//         $(this).addClass("ui-placeholder");
//     } else {
//         $(this).removeClass("ui-placeholder");
//     }
// });
//
// $('.form-control').change(function(){
//     tmpval = $(this).val();
//     if(tmpval == '') {
//         $('.form-group').removeClass('active');
//     } else {
//         $('.form-group').addClass('active');
//     }
// });





// $('.pers-acc-profile__input').on('blur', function(){
//     $(this).parent().removeClass('input-desc-hover');
// }).on('focus', function(){
//     $(this).parent().addClass('input-desc-hover');
// });











// function setHeiHeight() {
//     $('#main-header').css({
//         height: $(window).height() + 'px'
//     });
// }
//
// setHeiHeight(); // устанавливаем высоту окна при первой загрузке страницы
// $(window).resize( setHeiHeight ); // обновляем при изменении размеров окна

