$(document).ready(function(){

    // navigation_button
    var navButton = $('#navigation_button');
    var navBlock = $('.main-nav');

	navButton.on('click', function(e){
        navBlock.toggleClass('main-nav-mobile');
        if (navButton.hasClass("active")) {
            navButton.removeClass("active");
        } else{
            navButton.addClass("active");
        }
    })

    // slick
    $('.slick').slick({
        arrows: false,
        dots: true,
        // fade: true,
        speed: 1000
    });

})