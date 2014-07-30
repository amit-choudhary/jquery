$(function() {
  // Add five new list items to the end of the unordered list #myList.
  var list1 = $('<li></li>');
  var list2 = $('<li></li>');
  var list3 = $('<li></li>');
  var list4 = $('<li></li>');
  var list5 = $('<li></li>');
  $('#myList').append(list1, list2, list3, list4, list5);
  // Remove the odd list items.
  $('li:odd').remove();
  // Add another h2 and another paragraph to the last div.module.
  var newHeader = $('<h2></h2>').text('New Header');
  $('div .module').prepend(newHeader);
  var newParagraph = $('<p></p>').text('New Paragraph');
  $('div .module').append(newParagraph);
  // Add another option to the select element; give the option the value "Wednesday".
  var newOption = $('<option></option>').val('Wednesday');
  newOption.text('Wednesday');
  $('select').append(newOption);
  // Add a new div.module to the page after the last one; put a copy of one of the existing images inside of it.
  var newDiv = $('<div></div>').addClass('module');
  $('div .module').after(newDiv);
  var newImage = $('<img></img>').attr('src', "images/fruit.jpg");
  newDiv.append(newImage);
} );