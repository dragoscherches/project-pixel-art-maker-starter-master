$('#sizePicker').submit(function makeGrid(event) {
  $('table tr').remove();

  var rows=$('#inputHeight').val();
  var cells=$('#inputWeight').val();

  for (var i = 1; i <= rows; i++) {
    $('table').append("<tr></tr>");
    for (var j = 1; j <= cells; j++) {
      $( 'tr:last' ).append("<td></td>");
      $('td').attr('class','pixel');
    }
  }
    event.preventDefault();

});

$("#pixelCanvas").on('click','.pixel',function(){
  var paint=$("#colorPicker").val();
  $( this ).css("background-color",paint);
});