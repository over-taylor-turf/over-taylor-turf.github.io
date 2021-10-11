// This function is to toggle the hamburger dropdown menu when clicked. 
$('.icon').on('click', function(event){
  event.preventDefault();
  $('.topnav #myLinks').toggle();
});
