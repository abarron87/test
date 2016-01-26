// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    //var html
    //var scrollTop =
    var nav = $('.navbar'),
        navOffset = nav.offset().top,
        fixedClass = 'navbar-fixed-top';

    $(window).scroll(function(event) {
        var $elem = $(this);

        if($elem.scrollTop() >= navOffset){
            if(!nav.hasClass(fixedClass)) {
                nav.addClass(fixedClass);
            }
        }
        else{
            nav.removeClass(fixedClass);
        }

        //$('html, body').stop().animate({
        //    scrollTop: $($anchor.attr('href')).offset().top
        //}, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});