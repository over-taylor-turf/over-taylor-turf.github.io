// HAMBURGER DROPDOWN SECTION 

  // This function is to toggle the hamburger dropdown menu when clicked. 
        $('.icon').on('click', function(event){
          $('#myLinks').toggle();
        });

        $('#myLinks').on('click', function(event){
          $('#myLinks').toggle();
        });




// ANIMATION SECTION 


  // BOUNCE EFFECTS! 

          $('.welcome').on('click', function(event){
            $('.welcome').effect( 'bounce', {times: 5}, 'slow' );
          });

          $('.name').on('click', function(event){
            $('.name').effect( 'bounce', {times: 5}, 'slow' );
          });


  // SHAKE EFFECTS! 

      $('#html').on('click', function(event){
        $('#html').effect('shake', {times: 2, distance: 10}, 450);
      });

      $('#css').on('click', function(event){
        $('#css').effect('shake', {times: 2, distance: 10}, 450);
      });

      $('#javascript').on('click', function(event){
        $('#javascript').effect('shake', {times: 2, distance: 10}, 450);
      });

      $('#node').on('click', function(event){
        $('#node').effect('shake', {times: 2, distance: 10}, 450);
      });

      $('#bootstrap').on('click', function(event){
        $('#bootstrap').effect('shake', {times: 2, distance: 10}, 450);
      });

      $('#git').on('click', function(event){
        $('#git').effect('shake', {times: 2, distance: 10}, 450);
      });

      $('#github').on('click', function(event){
        $('#github').effect('shake', {times: 2, distance: 10}, 450);
      });

      $('#vscode').on('click', function(event){
        $('#vscode').effect('shake', {times: 2, distance: 10}, 450);
      });

      $('#commandline').on('click', function(event){
        $('#commandline').effect('shake', {times: 2, distance: 10}, 450);
      });

      $('#secret').on('click', function(event){
        $('#secret').effect('shake', {times: 2, distance: 10}, 450);
      });
    

      // TESTIMONIALS 

      // practice with fades 

      // $('#testimonial1').on('click', function(event){
      //   $('#testimonial1').fadeToggle('slow');
      // });

      
      // $("button").click(function(){
      //   $("p").hide(1000);
      // });

      // $('#testimonial1').on('click', function(event){
      //   $('#testimonial1').hide(1000);
      // });
      
      // $('#testimonial1').on('click', function(event){
      //   $('#testimonial1').fadeOut('slow');
      // });


      $("#slideshow > div:gt(0)").hide();

            setInterval(function() {
              $('#slideshow > div:first')
                .fadeOut(1000)
                .next()
                .fadeIn(1000)
                .end()
                .appendTo('#slideshow');
            }, 3000);