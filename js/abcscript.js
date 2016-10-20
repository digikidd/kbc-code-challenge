$(document).ready(function() {


    $(window).scroll(function() {

    	showImages();

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


    function showImages() {
        var scroll = $(window).scrollTop();
      
        if (scroll >= 400) {
        	
        	$("#girl").removeClass("fadeOut");
        	 $("#girl").addClass("fadeIn");
        }
        else {
        	$("#girl").addClass("fadeOut");
        	$("#girl").removeClass("fadeIn");
        	 
        }
    };
    


});
