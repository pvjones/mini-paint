$(document).ready(function() {


  var color = 'white';

  var allcolors = 'red blue green yellow white'; 


  $('#red').on('click', function() {
    color = 'red';
  });

  $('#green').on('click', function() {
    color = 'green';
  });

  $('#blue').on('click', function() {
    color = 'blue';
  });

  $('#yellow').on('click', function() {
    color = 'yellow';
  });

  $('#white').on('click', function() {
    color = 'white';
  })




  var $box = $('.box');

  $box.on('click', function() {
    $(this).addClass(color);
    // console.log("HOWDY") Use something like this to check if you click event is being logged.
  });

  $box.on('dblclick', function() {
    $(this).removeClass(allcolors);
  });

  /* alternatively, you could use toggleClass :
  $box.on('click', function() {
    $(this).toggleClass('white');
  });
  */

  $('#reset').on('click', function() {
    $box.removeClass(allcolors);
  });




});