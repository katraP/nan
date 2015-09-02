/**
 * Created by Ekaterina.Porkhun on 01.09.2015.
 */
$(function(){
    var scrollTopBut = function(el, stopEl){

        var stopElement = $(stopEl);
        var stopPoint = stopElement.offset().top;
        var scrolllTopValue = $(window).scrollTop(), buttonHeight = 86;
        if(scrolllTopValue > 50) {
            console.log('dd');
            $(el).addClass('visible');
            if(scrolllTopValue + $(window).height()> stopPoint) {
                $(el).css({position: 'absolute', top: stopPoint - buttonHeight + 'px', bottom: 'auto'});
            }
            else {
                $(el).css({position: 'fixed', top: 'auto', bottom: '10px'});
            }
        }
        else {
            $(el).removeClass('visible');
        }
    };
    $(window).scroll(function(){
        scrollTopBut('.button-top', '.footer');
    });
    $('.button-top').click(function(){
        $('body, html').animate({scrollTop: 0}, 500);
    });
    function closeLoginPopup(){
        $('body').removeClass('nonactive');
        $('.login-layer').removeClass('active');
        setTimeout(function(){
            $('.login-layer').css('display', 'none');
        }, 700);
    }
    $('.header-login__toggle').on('click', function(){
       $('body').addClass('nonactive');
        $('.login-layer').css('display', 'block');
        setTimeout(function(){
            $('.login-layer').addClass('active');
        }, 10);
    });
    $('.close, .login-layer').on('click', function(){
        closeLoginPopup();
    });
    $(document).keyup(function(e){
        var code = e.keyCode || e.which;
        if(code == 27){
            closeLoginPopup();
        }
    });
    $('.login-toggle').on('click','.login__but, .sign__but', function(){
       if($(this).hasClass('active')) {
           return false;
       }
        else {
           var login = $(this).parent().parent().find('.login'),
               sign = $(this).parent().parent().find('.sign');
           if($(this).hasClass('login__but')) {
               $(this).addClass('active');
               $('.sign__but').removeClass('active');
               sign.removeClass('active').css('display', 'none');
               login.css('display', 'block');
               setTimeout(function(){
                   login.addClass('active');
               },10);

           }
           else {
               $(this).addClass('active');
               $('.login__but').removeClass('active');
               login.removeClass('active').css('display', 'none');
               sign.css('display', 'block');
               setTimeout(function(){
                   sign.addClass('active');
               },10);
           }
       }
    });
    $('.login-container').click(function(e){
        e.stopPropagation();
        return false;
    });
})
