$(function(){var a=$(".navbar"),b=a.offset().top,c="navbar-fixed-top";$(window).scroll(function(d){var e=$(this);e.scrollTop()>=b?a.hasClass(c)||a.addClass(c):a.removeClass(c),d.preventDefault()})});