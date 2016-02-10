var isActive;
jQuery(window).focus(function () {
    isActive = true;
    video();
});
jQuery(window).blur(function () {
    isActive = false;
    video();
});
jQuery(window).on('scroll', function(){
    video();
});
function video(){
    if(jQuery(this).width()>=1100){
        var position = window.pageYOffset;
        var offset = 800;
        var video = jQuery('#promo').offset().top - offset;
        if(position > video && isActive) {
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
}
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