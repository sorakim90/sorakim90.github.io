$(document).ready(function(){
    $('#fullpage').fullpage({
        //이동
        lockAnchors: false,
        //anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'fifthPage', 'sixthPage', 'lastPage'],
        //menu: '#tgIndxnavUl',
        navigation: true,
        //navigationPosition: 'top',
        //navigationTooltips: ['firstSlide', 'secondSlide'],
        showActiveTooltip: false,
        slidesNavigation: true,
        slidesNavPosition: 'bottom',

        //스크롤
        css3: true,
        scrollingSpeed: 700,
        autoScrolling: true,
        fitToSection: true,
        fitToSectionDelay: 1000,
        scrollBar: false,
        easing: 'easeInOutCubic',
        easingcss3: 'ease',
        loopBottom: false,
        loopTop: false,
        loopHorizontal: true,
        continuousVertical: false,
        continuousHorizontal: false,
        scrollHorizontally: false,
        interlockedSlides: false,
        dragAndMove: false,
        offsetSections: false,
        resetSliders: false,
        fadingEffect: false,
        normalScrollElements: '#element1, .element2',
        scrollOverflow: false,
        scrollOverflowReset: false,
        scrollOverflowOptions: null,
        touchSensitivity: 15,
        normalScrollElementTouchThreshold: 5,
        bigSectionsDestination: null,

        //접근성
        keyboardScrolling: true,
        animateAnchor: true,
        recordHistory: true,

        //디자인
        controlArrows: true,
        verticalCentered: true,
        sectionColor : ['#d02657','#ec5355','#cd6461'],
        fixedElements: '#header, .footer',
        responsiveWidth: 0,
        responsiveHeight: 0,
        responsiveSlides: false,
        parallax: false,
        parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},
        //맞춤 선택자
        sectionSelector: '.section',
        slideSelector: '.slide',
        lazyLoading: true,
        onLeave:function(index, nextIndex, direction){
            console.log(index, nextIndex, direction)
            if(nextIndex==2){
                $('.content_1').addClass('start_ani');
            }else{
                $('.content_1').removeClass('start_ani');
            }
        }
    });
});