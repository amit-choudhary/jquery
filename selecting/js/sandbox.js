$(function() {
  // Select all of the div elements that have a class of 'module'.
  $('div.module').css('background-color', 'red');
  // Come up with three selectors that you could use to get the third item in the #myList unordered list. 
  // Which is the best to use? Why?
  $('#myList li:eq(2)').css('background-color', 'yellow');
  $('#myList li:nth-of-type(3)').css('background-color', 'green');
  $('#myListItem').css('background-color', 'yellow');
  // direct id selector is best because it is independent of dom structure.
  // Select the label for the search input using an attribute selector.
  $('label[for = "q"]').css('background-color', 'green');
  // Figure out how many elements on the page are hidden
  alert('Number of hidden elements are: ' + $(':hidden').length);
  // Figure out how many image elements on the page have an alt attribute.
  alert('Number of image elements with alt attribute are: ' + $('img[alt]').length);
  // Select all of the odd table rows in the table body.
  $('tr:odd').css('background-color', 'green');
} );