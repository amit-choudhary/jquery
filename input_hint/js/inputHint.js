function CreateInputHint(searchInputElement, labelElement, labelText) {
  this.searchInput = searchInputElement;
  this.labelElement = labelElement;
  this.hintText = labelText;
}

CreateInputHint.prototype.init = function() {
  this.addHint();
  this.removeLabelElement();
  this.bindEvents();
}

CreateInputHint.prototype.bindEvents = function() {
  var _this = this;
  _this.searchInput.on({
    focus: function() { _this.performOnFocus(); },
    blur: function() { _this.performOnBlur(); }
  } );
}

CreateInputHint.prototype.addHint = function() {
  this.searchInput
    .val(this.hintText)
    .addClass('hint');
}

CreateInputHint.prototype.removeLabelElement = function() {
  this.labelElement.remove();
}

CreateInputHint.prototype.performOnFocus = function() {
  if(this.searchInput.val() == this.hintText) {
    this.searchInput
      .val('')
      .removeClass('hint'); 
  }
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