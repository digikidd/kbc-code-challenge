$(document).ready(function() {


    $(window).scroll(function() {

    	showImages('#girl');

        var height = $(window).height();

        if ($(window).scrollTop() > height) {
            $('#navbar').addClass('navbar-fixed');
        }
        if ($(window).scrollTop() < height + 1) {
            $('#navbar').removeClass('navbar-fixed');
        }
    });


    function scrollToAnchor(e) {
        var aTag = $("a[name='" + e + "']");
        $('html,body').animate({ scrollTop: aTag.offset().top }, 'slow');
    };


    $(".arrow").click(function() {
        scrollToAnchor('anchor1');
    });


    function showImages(e) {
        var windowHeight = jQuery(window).height();
        $(e).each(function() {
            var thisPos = $(this).offset().top;
            console.log(this);

            var topOfWindow = $(window).scrollTop();
            if (topOfWindow + windowHeight - 200 > thisPos) {
                $(this).addClass("fadeIn");

            }
            else {
            	$(this).removeClass('fadeIn');
            }

        });
    };
    
    showImages('#girl');


    


});
