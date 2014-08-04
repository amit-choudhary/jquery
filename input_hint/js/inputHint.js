function CreateInputHint(searchInputElement, labelElement, labelText) {
  this.searchInput = searchInputElement;
  this.labelElement = labelElement;
  this.hintText = labelText;
}

CreateInputHint.prototype.init = function() {
  this.searchInput
    .val(this.hintText)
    .addClass('hint');
  this.labelElement.remove();
  this.bindFocusEvent();
  this.bindBlurEvent();
}

CreateInputHint.prototype.bindFocusEvent = function() {
  var _this = this;
  _this.searchInput.focus(function() {
    _this.performOnFocus(this);
  } );
}

CreateInputHint.prototype.performOnFocus = function(searchElement) {
  $(searchElement)
    .val('')
    .removeClass('hint'); 
}

CreateInputHint.prototype.bindBlurEvent = function() {
  var _this = this;
  _this.searchInput.blur(function() {
    _this.performOnBlur(this); 
  } );
}

CreateInputHint.prototype.performOnBlur = function(searchElement) {
  if (searchElement.value.trim() == '' || this.val() == null) {
    $(searchElement)
      .val(this.hintText)
      .addClass('hint'); 
  }
  else {
    return;
  } 
}

$(function() {
  var searchInputElement = $(':text[name="q"]'),
      labelElement = $('label[for="q"]'),
      labelText = labelElement.text(),
      inputHint = new CreateInputHint(searchInputElement, labelElement, labelText);
  inputHint.init();
} );