// HAMBURGER DROPDOWN SECTION 

  // This function is to toggle the hamburger dropdown menu when clicked. 
        $('.icon').on('click', function(event){
          event.preventDefault();
          $('.topnav #myLinks').toggle();
        });


  // This function should hide the hamburger dropdown once a selection is made... 
  // How can I get this to work? 
      // $('.aboutNav').on('click', function(event){
      //   event.preventDefault();
      //   $('.topnav #myLinks').hide();
      // });




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