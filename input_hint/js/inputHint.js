function CreateInputHint(searchInputElement, labelElement, labelText) {
  this.searchInput = searchInputElement;
  this.labelElement = labelElement;
  this.hintText = labelText;
}

CreateInputHint.prototype.init = function() {
  this.addHint();
  this.removeLabelElement();
  this.bindFocusEvent();
  this.bindBlurEvent();
}

CreateInputHint.prototype.addHint = function() {
  this.searchInput
    .val(this.hintText)
    .addClass('hint');
}

CreateInputHint.prototype.removeLabelElement = function() {
  this.labelElement.remove();
}

CreateInputHint.prototype.bindFocusEvent = function() {
  var _this = this;
  _this.searchInput.focus(function(event) {
    _this.performOnFocus();
  } );
}

CreateInputHint.prototype.performOnFocus = function() {
  if(this.searchInput.val() == this.hintText) {
  this.searchInput
    .val('')
    .removeClass('hint'); 
  }
}

CreateInputHint.prototype.bindBlurEvent = function() {
  var _this = this;
  _this.searchInput.blur(function() {
    _this.performOnBlur(); 
  } );
}

CreateInputHint.prototype.performOnBlur = function() {
  if (this.searchInput.val().trim() == '' || this.searchInput.val() == null) {
    this.searchInput
      .val(this.hintText)
      .addClass('hint'); 
  } 
}

$(function() {
  var searchInputElement = $(':text[name="q"]'),
      labelElement = $('label[for="q"]'),
      labelText = labelElement.text(),
      inputHint = new CreateInputHint(searchInputElement, labelElement, labelText);
  inputHint.init();
} );