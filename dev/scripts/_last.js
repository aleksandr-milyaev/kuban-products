/*
 * Custom scripts
 */
(function ($) {
    $('.reviews-carousel').slick({
        arrows: false,
        slidesToShow: 2,
        dots: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    slidesToShow: 1
                }
            }
        ]
    });



})(jQuery);