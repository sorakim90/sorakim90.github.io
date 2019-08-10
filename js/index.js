$().ready(function(){
    var h=$(window).height();
    $('.header').css({height:h+'px'});

    $(window).resize(function(){
        var resizeh=$(window).height();
        $('.header').css({height:h+'px'});
        h=resizeh;

    });

    
});