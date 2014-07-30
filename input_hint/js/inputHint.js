function searchElement() {
  this.searchInput = $(':text[name="q"]');
  this.labelElement = $('label[for="q"]');
  labelText = this.labelElement.text();
}

searchElement.prototype.init = function() {
  this.searchInput.val(labelText);
  this.searchInput.addClass('hint');
  this.bindFocusEvent();
  this.bindBlurEvent();
}

searchElement.prototype.bindFocusEvent = function() {
  this.searchInput.focus(function() {
    $(this).val('');
    $(this).removeClass('hint');
  } );
}

searchElement.prototype.bindBlurEvent = function() {
  this.searchInput.blur(function() {
    if($(this).val() == '' || $(this).val() == null){
      $(this).val(labelText);
      $(this).addClass('hint'); 
    }
    else {
      return;
    }
  } );
}

$(function() {
  var searchInput = new searchElement();
  searchInput.init();
} );