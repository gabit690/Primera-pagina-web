'use strict'

let btn_up = $('#ir-arriba');

btn_up.click(function(){
    $('body, html').animate({
        scrollTop: '0px'
    }, 1000);
});

$(window).scroll(function(){
    let pantalla = $(window).width();
    if(pantalla>=400){  // La pantalla tiene que ser superior al tamanio mobile de la pagina.
        if( $(this).scrollTop()>0 ){
            btn_up.slideDown(1000);
        }
        else{
            btn_up.slideUp(1000);
        }
    }
    else{
        btn_up.css("display", "none");
    }
});