function CreateStack(elements) {
  this.addStackButton = elements.addStackButton;
  this.mainSection = elements.mainSection
  this.count = 0 ;
}

CreateStack.prototype.init = function() {
  this.addStackHandler();
  this.divClickHandler();
}

CreateStack.prototype.addDiv = function() {
  this.count += 1;
  var currentDiv = $('<div/>').addClass('innerDiv').attr('id', 'divInner' + this.count)
                     .appendTo(this.mainSection);
};

CreateStack.prototype.addStackHandler = function() {
  var _this = this;
  _this.addStackButton.on('click', function(){
    _this.addDiv();
  } );
};

CreateStack.prototype.divClickHandler = function() {
  var _this = this;
  _this.mainSection.on('click','.innerDiv' ,function() {
    if(this.id == $('.innerDiv:last').attr('id')) {
      this.remove();
      _this.count -= 1;
    }
    else {
      $(this).addClass('highlight');
    }
  } );
};

$(document).ready(function() {
  var elements = {
    addStackButton : $('#add-stack'),
    mainSection : $('.section')
  };
  var createStackObj = new CreateStack(elements);
  createStackObj.init();
} );