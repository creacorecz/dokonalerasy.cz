$( document ).ready(function() {
$(document).ready(function(){
    var mySwiper = new Swiper ('.swiper-container', {
        // Optional parameters
        autoplay: 3000,
        loop: true,
        autoplayDisableOnInteraction: false,
        effect: 'fade',
        speed: 2000
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
        video();
    }
});
function video() {
    var position = window.pageYOffset;
    var offset = 1000;
    var video = $('#promo').offset().top - offset;
    if(position > video) {
        $('#promo').get(0).play();
    }
    else
    {
        if(!$('#promo').get(0).paused)
        {
            $('#promo').get(0).pause();
        }
    }
}
function menu() {
    if ($(window).scrollTop()>30) {
        $("#secondary").fadeIn();
    }
    else {
        $("#secondary").fadeOut(20);
    }
}

    $(function(){
        var $gallery = $('a[data-lightbox]').simpleLightbox({
            disableScroll: false,
            showCounter: false
        });
    });

});