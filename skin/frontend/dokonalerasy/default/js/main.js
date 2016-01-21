$(document).ready(function(){
    var mySwiper = new Swiper ('.swiper-container', {
        // Optional parameters
        autoplay: 3000,
        loop: true,
        autoplayDisableOnInteraction: false
    })
});
<!-- Smooth scrolling script -->
$(function () {

    $('a[href^="#"]').click(function(event) {
        var id = $(this).attr("href");
        var offset = 150;
        var target = $(id).offset().top - offset;

        $('html, body').animate({scrollTop:target}, 800);
        event.preventDefault();
    });

});

$(window).on('scroll', function(){
    if($(this).width()>=1100){
        menu();
    }
});

function menu() {
    if ($(window).scrollTop()>30) {
        $("#secondary").fadeIn();
    }
    else {
        $("#secondary").fadeOut(30);
    }
}