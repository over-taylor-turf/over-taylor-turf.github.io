// This function is to toggle the hamburger dropdown menu when clicked. 
    $('.icon').on('click', function(event){
      event.preventDefault();
      $('.topnav #myLinks').toggle();
    });

// I want the welcome text to bounce! 
    $('.fa-html5').on('click', function(event){
      $('.fa-html5').effect( 'bounce', {times:3}, 'slow' );
    });

  //   $('.fa-html5').on("click", function () {
  //     action("bounce");
  //     return false;
  // });