function JsonContent() {
  this.targetDiv = $('<div></div>');
  this.jsonResult = '';
  this.jsonTarget = '';
}

JsonContent.prototype.init = function() {
  this.removeSubmitButton();
  this.insertDiv();
  this.loadcontent();
}

JsonContent.prototype.removeSubmitButton = function() {
  $('#specials form li.buttons').remove();
}

JsonContent.prototype.insertDiv = function() {
  $('#specials form').after(this.targetDiv);
}

JsonContent.prototype.loadcontent = function() {
  var _this = this;
  $('#specials select').change(function(event) {
    _this.jsonTarget = event.target.value;
    _this.loadUsingAjax();
    _this.writeHtml(_this.jsonTarget, _this.jsonResult);
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

JsonContent.prototype.writeHtml = function(jsonTarget, result) {
  this.targetDiv.html('<font color=' + result[jsonTarget].color + '>' + 
    '<h3>' + result[jsonTarget].title + '</h3>' +
    '<h4>' + result[jsonTarget].text + '</h4>' +
    '<img src=.' + result[jsonTarget].image + '></img></font>');
}

$(function() {
  var jsonContent = new JsonContent();
  jsonContent.init();
} );
