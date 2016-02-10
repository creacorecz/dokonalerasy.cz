
<!-- Smooth scrolling script -->
jQuery(function () {
    jQuery('a[href^="#"]').click(function(event) {
        var id = jQuery(this).attr("href");
        var offset = 85;
        var target = jQuery(id).offset().top - offset;

        jQuery('html, body').animate({scrollTop:target}, 800);
        event.preventDefault();
    });

});

jQuery(window).on('scroll', function(){
    if(jQuery(this).width()>=1100){
        if (jQuery(window).scrollTop()>30) {
            jQuery("#secondary").fadeIn();
        }
        else {
            jQuery("#secondary").fadeOut(20);
        }
    }
});
jQuery(function(){
    var jQuerygallery = jQuery('a[data-lightbox]').simpleLightbox({
        disableScroll: false,
        showCounter: false
    });
});
