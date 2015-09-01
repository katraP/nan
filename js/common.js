/**
 * Created by Ekaterina.Porkhun on 01.09.2015.
 */
$(function(){
    $('.header-login__toggle').on('click', function(){
       $('body').addClass('nonactive');
        $('.login-layer').css('display', 'block');
        setTimeout(function(){
            $('.login-layer').addClass('active');
        }, 10);
    });
    $('.close').on('click', function(){
        $('body').removeClass('nonactive');
        $('.login-layer').removeClass('active');
        setTimeout(function(){
            $('.login-layer').css('display', 'none');
        }, 700);
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
    $('.login-layer').click(function(){
        $('body').removeClass('nonactive');
        $('.login-layer').removeClass('active');
        setTimeout(function(){
            $('.login-layer').css('display', 'none');
        }, 700);
    })
})
