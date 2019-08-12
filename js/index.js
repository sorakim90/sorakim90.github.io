$().ready(function(){
    var h=$(window).height();
    
    $(window).scroll(function(){
        $('.header .box').click(function(){
            $('html').stop().animate({scrollTop:752},500);
            
        });
    });
    
});