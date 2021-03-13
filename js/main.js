$(document).ready(function () {

    // banner slider js

    $('#banner_part').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
        fade: true,
        speed: 1200,
        cssEase: 'linear'
    });

    // sticky top js

    $(window).scroll(function () {
        var scrolling = $(this).scrollTop();
        var sticky = $(".sticky-top")
        if (scrolling >= 100) {
            sticky.addClass("menu_bg").css("padding", "7px 0px");
        } else {
            sticky.removeClass("menu_bg").css("padding", "35px 0px");
        }
    });

    // wow js

    new WOW().init();

    // Smooths scrolling
    $('body').scrollspy({
        target: ".navbar",
        offset: 50
    });

    //animation scroll js
    var html_body = $('html, body');
    $('nav a').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 45
                }, 1500);
                return false;
            }
        }
    });
    
    // scroll to top js
    
    $(window).scroll(function(){
        if($(this).scrollTop() > 100){
            $(".scroll_to_top").fadeIn();
        } else{
            $(".scroll_to_top").fadeOut();
        }
    });
    $(".scroll_to_top").click(function(){
        $("html, body").animate({
            scrollTop:0
        }, 1000);
    });
    
    // preloader js
    
    $(window).on("load", function(){
        $(".preloader").delay(2000).fadeOut(500);
    });
    
    // responsive menu js
    
    $(".closeNav").click(function(){
        $(".overlay").hide(500);
    });
    
    $(".openNav").click(function(){
        $(".overlay").show(500);
    });
    
    $(".overlay a img").click(function(){
        $(".overlay").hide(500);
    });
    
    $(".overlay_content ul li a").click(function(){
        $(".overlay").hide(500);
    });

});

// image filtering js

var mixer = mixitup('.cont');
var mixer = mixitup(containerEl);
var mixer = mixitup(containerEl, {
    selectors: {
        target: '.blog-item'
    },
    animation: {
        duration: 300
    }
});