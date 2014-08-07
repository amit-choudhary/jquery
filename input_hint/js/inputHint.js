function InputHint(elements) {
  this.searchInput = elements.searchInputElement;
  this.labelElement = elements.labelElement;
  this.hintText = this.labelElement.text();
}

InputHint.prototype.init = function() {
  this.addHint();
  this.removeLabelElement();
  this.bindEvents();
}

InputHint.prototype.bindEvents = function() {
  var _this = this;
  _this.searchInput.on({
    focus: function() { _this.onFocus(); },
    blur: function() { _this.onBlur(); }
  } );
}

InputHint.prototype.addHint = function() {
  this.searchInput
    .val(this.hintText)
    .addClass('hint');
}

InputHint.prototype.removeLabelElement = function() {
  this.labelElement.remove();
}

InputHint.prototype.onFocus = function() {
  if(this.searchInput.val() == this.hintText) {
    this.searchInput
      .val('')
      .removeClass('hint'); 
  }
}

InputHint.prototype.onBlur = function() {
  if (!(this.searchInput.val().trim()) || this.searchInput.val() == null) {
    this.searchInput
      .val(this.hintText)
      .addClass('hint'); 
  } 
}

$(function() {
  var elements = {
    searchInputElement : $(':text[name="q"]'),
    labelElement : $('label[for="q"]')
  }
  var inputHint = new InputHint(elements);
  inputHint.init();
} );