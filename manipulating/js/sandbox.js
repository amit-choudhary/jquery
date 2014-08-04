$(function() {
  // Add five new list items to the end of the unordered list #myList.
  for (var i = 8; i < 13 ; i++) {
    var newList = $('<li>List item ' + i + '</li>');
    $('#myList').append(newList);
  }
  // Remove the odd list items.
  $('#myList li:odd').remove();
  // Add another h2 and another paragraph to the last div.module.
  var newHeader = $('<h2></h2>').text('New Header');
  var newParagraph = $('<p></p>').text('New Paragraph');
  $('div.module').append(newHeader, newParagraph);
  // Add another option to the select element; give the option the value "Wednesday".
  $('<option>', {
    value: 'Wednesday',
    text: 'Wednesday'
  }).appendTo('select[name=day]')
  // Add a new div.module to the page after the last one; put a copy of one of the existing images inside of it.
  $('div.module').last().after($('<div>', {
    html: $("img").eq(0).clone(),
    class: 'module'
  } ));
} );