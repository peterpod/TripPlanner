$(function() {
    $( "input[type=submit], input[type=button]" )
      .button()
  });

$(document).ready(function(){
$('input[type=text]')
  .button()
  .css({
          'font' : 'inherit',
         'color' : 'inherit',
    'text-align' : 'left',
       'outline' : 'none',
        'cursor' : 'text'
  });
});