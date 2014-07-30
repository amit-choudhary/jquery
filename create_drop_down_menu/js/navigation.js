function DropDownMenu(dropDownList) {
  this.dropDownList = dropDownList;
}

DropDownMenu.prototype.bindEvents = function() {
  this.dropDownList.hover(function() {
    $(this).find('ul')
      .show()
        .addClass('hover');
  },
  function() {
    $(this).find('ul')
      .hide()
        .removeClass('hover');
  } );
}

$(function() {
  var dropDownList = $('#nav li')
  var dropDownObject = new DropDownMenu(dropDownList);
  dropDownObject.bindEvents();
} );