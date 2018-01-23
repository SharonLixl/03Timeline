var totalEvents = 42;
var defaultDays = 1;

$(document).ready(function(){
  console.log('started');

  $('#daysInput').submit(function(){
   return false;
  });

  for (var i = 0; i < totalEvents-defaultDays; i++){
    var k = totalEvents - i;
    $('li:nth-child('+ k +')').addClass('invisible');
  }

  $('#inputbox').keypress(function(e) {
    if(e.which == 13) {
      console.log('enter pressed');
      let currentdays = $('input[name=daysInput]').val();
      console.log(currentdays);

      for (var i = 0; i < totalEvents - currentdays; i++){
        var k = totalEvents - i;
        $('li:nth-child('+ k +')').addClass('invisible');
      }

      for (var i = 0; i < currentdays; i++){
        var k = i + 1;
        $('li:nth-child('+ k +')').removeClass('invisible');
      }

      $('.footer').empty();

      $('.footer').append('<p>---- only ' + currentdays + ' items of moments are viewable ----</p>')

    }
  });

});
