// header transparent-------------------------------------------		
$(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if (scroll > 500) {
      // $(".header_menu").css("background" , "#343a40");
      $(".header_menu").addClass('color-menubar');

      $('.back-to-top').fadeIn('slow');  
          // back-to-top
    }

    else{
        $(".header_menu").removeClass('color-menubar');

        $('.back-to-top').fadeOut('slow');
            // back-to-top	
    }
});