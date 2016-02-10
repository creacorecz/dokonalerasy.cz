jQuery(document).ready(function(){
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
jQuery(function () {

    jQuery('a[href^="#"]').click(function(event) {
        var id = jQuery(this).attr("href");
        var offset = 150;
        var target = jQuery(id).offset().top - offset;

        jQuery('html, body').animate({scrollTop:target}, 800);
        event.preventDefault();
    });

});

jQuery(window).on('scroll', function(){
    if(jQuery(this).width()>=1100){
        menu();
        video();
    }
});
function video() {
    var position = window.pageYOffset;
    var offset = 1000;
    var video = jQuery('#promo').offset().top - offset;
    if(position > video) {
        jQuery('#promo').get(0).play();
    }
    else
    {
        if(!jQuery('#promo').get(0).paused)
        {
            jQuery('#promo').get(0).pause();
        }
    }
}
function menu() {
    if (jQuery(window).scrollTop()>30) {
        jQuery("#secondary").fadeIn();
    }
    else {
        jQuery("#secondary").fadeOut(20);
    }
}

jQuery(function(){
    var jQuerygallery = jQuery('a[data-lightbox]').simpleLightbox({
        disableScroll: false,
        showCounter: false
    });
});
