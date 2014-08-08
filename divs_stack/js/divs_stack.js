function DynamicDiv(mainSection) {
  this.mainSection = mainSection;
  this.count = 0;
}

DynamicDiv.prototype.init = function() {
  this.bindEvents();
}

DynamicDiv.prototype.bindEvents = function() {
  var _this = this;
  $('#add-stack').on('click', function(){
    _this.addDiv();
  } );
  _this.mainSection.on('click', '.innerDiv', function() {
    _this.divClickHandler(this);
  } );
}

DynamicDiv.prototype.addDiv = function() {
  this.count += 1;
  var currentDiv = $('<div/>').addClass('innerDiv').attr('id', 'divInner' + this.count)
                     .appendTo(this.mainSection);
}

DynamicDiv.prototype.divClickHandler = function(dynamicdiv) {
  if (dynamicdiv.id == $('.innerDiv:last').attr('id')) {
    dynamicdiv.remove();
    this.count -= 1;
  }
  else {
    $(dynamicdiv).addClass('highlight');
  }
}

$(document).ready(function() {
  var mainSection = $('.section'),
      dynamicDiv = new DynamicDiv(mainSection);
  dynamicDiv.init();
} );