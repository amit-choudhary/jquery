function DynamicDivs(mainSection) {
  this.mainSection = mainSection
  this.count = 0 ;
}

DynamicDivs.prototype.init = function() {
  this.bindEvents();
}

DynamicDivs.prototype.bindEvents = function() {
  var _this = this;
  $('#add-stack').on('click', function(){
    _this.addDiv();
  } );
  _this.mainSection.on('click','.innerDiv' ,function() {
    _this.divClickHandler(this);
  } );
}

DynamicDivs.prototype.addDiv = function() {
  this.count += 1;
  var currentDiv = $('<div/>').addClass('innerDiv').attr('id', 'divInner' + this.count)
                     .appendTo(this.mainSection);
}

DynamicDivs.prototype.divClickHandler = function(div) {
  if(div.id == $('.innerDiv:last').attr('id')) {
    div.remove();
    this.count -= 1;
  }
  else {
    $(div).addClass('highlight');
  }
}

$(document).ready(function() {
  var mainSection = $('.section'),
      dynamicDiv = new DynamicDivs(mainSection);
  dynamicDiv.init();
} );