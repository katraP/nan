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
    function animationOn(el, time) {
        var scope = $(el);

        scope.each(function(i){
            var self = $(this);
            if(!self.hasClass('finished')) {
                setTimeout(function(){
                   self.addClass('active').addClass('finished');
                }, i*time);
                if(self.hasClass('backstate')) {
                    setTimeout(function(){
                       self.removeClass('active');
                    }, i*time + time/1.5);
                }
            }
        });
    }
    function openLoginPopup(el) {
        $('body').addClass('nonactive');
        $(el).css('display', 'block');
        setTimeout(function(){
            $(el).addClass('active');
        }, 10);
    }
    function closeLoginPopup(){
        $('body').removeClass('nonactive');
        $('.login-layer').removeClass('active');
        setTimeout(function(){
            $('.login-layer').css('display', 'none');
        }, 700);
    }
    $('.sign__link').click(function(){
        openLoginPopup('.sign-area');
    });
    $('.header-login__toggle').on('click', function(){
        openLoginPopup('.login-area');
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
        //return false;
    });
    function popupLayer() {
        var siteUrl = location.href;
        console.log(siteUrl);
        if(siteUrl.indexOf('#login') !=-1) {
            console.log('ura');
            openLoginPopup('.login-area');
        }
        else if(siteUrl.indexOf('#signup') !=-1) {
            openLoginPopup('.sign-area');
        }
        else {
            return false;
        }
    }
    popupLayer();
    $(window).on('scroll', function(){
        //console.log($(this).scrollTop());
       if($(this).scrollTop() >= $('.w-us__title').offset().top) {
            animationOn('.w-us-features-item', 3000);
           setInterval(function(){
               animationOn('.w-us-features-item', 3000);
           }, 12000)
       }
        if($(this).scrollTop() >= $('.about-presentation__link').offset().top) {
            animationOn('.contact__link', 700);
        }
    });

})
