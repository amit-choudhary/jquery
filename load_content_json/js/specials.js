function JsonContent() {
  this.specialsSection = $('#specials');
  this.targetDiv = $('<div></div>');
  this.jsonResult = null;
  this.jsonTarget = '';
}

JsonContent.prototype.init = function() {
  this.removeSubmitButton();
  this.insertDiv();
  this.loadcontent();
}

JsonContent.prototype.removeSubmitButton = function() {
  this.specialsSection.find('form li.buttons').remove();
}

JsonContent.prototype.insertDiv = function() {
  this.specialsSection.find('form').after(this.targetDiv);
}

JsonContent.prototype.loadcontent = function() {
  var _this = this;
  _this.specialsSection.find('select').change(function() {
    _this.jsonTarget = this.value;
    _this.loadUsingAjax();
    _this.showContent();
  } );
}

JsonContent.prototype.loadUsingAjax = function() {
  var _this = this;
  $.ajax( { 
    async: false,
    dataType : 'json',
    url: './data/specials.json',
    cache: true,
    success:function(result) {
      _this.jsonResult = result;
    }
  } ); 
}

JsonContent.prototype.showContent = function() {
  this.targetDiv.html('<font color=' + this.jsonResult[this.jsonTarget].color + '>' + 
    '<h3>' + this.jsonResult[this.jsonTarget].title + '</h3>' +
    '<h4>' + this.jsonResult[this.jsonTarget].text + '</h4>' + '</font>' +
    '<img src=.' + this.jsonResult[this.jsonTarget].image + '></img>');
}

$(function() {
  var jsonContent = new JsonContent();
  jsonContent.init();
} );
