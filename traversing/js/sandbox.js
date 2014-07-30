$(function() {
  //Select all of the image elements on the page; log each image's alt attribute.
  $('img').each(function() {
    console.log($(this).attr('alt'));
  } );

  // Select the search input text box, then traverse up to the form and add a class to the form.
  $('label[for = q]').parents('form').addClass('newClass');

  // Select the list item inside #myList that has a class of "current" and remove that class from it; add a class of "current" to the next list item.
  var listItem = $('#myList').find('.current');
  listItem.removeClass();
  listItem.next().addClass('current');

  //Select the select element inside #specials; traverse your way to the submit button.
  var selectElement = $('#specials').find('select');
  selectElement.closest('ul').find('input').css('background-color', 'green');

  // Select the first list item in the #slideshow element; add the class "current" to it, and then add a class of "disabled" to its sibling elements.
  var firstListItem = $('#slideshow li:eq(0)');
  firstListItem.addClass('current');
  var siblingElements = firstListItem.siblings();
  siblingElements.each(function() {
    $(this).addClass('disabled');
  } );
} );