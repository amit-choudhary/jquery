function LoadJson(specialsDiv, elements) {
this.specialsDiv = specialsDiv;
this.specialsForm = elements.specialsForm;
this.selectElement = elements.selectElement;
this.targetDiv = $('<div></div>');
}

LoadJson.prototype.init = function() {
  this.insertDiv();
}

LoadJson.prototype.insertDiv = function() {
  this.specialsForm.after(this.targetDiv);
}

LoadJson.prototype.loadJsonContent = function() {
  var _this = this;
  this.selectElement.change(function(event) {
    var jsonTarget = event.target.value;
    _this.loadcontentUsingAjax(jsonTarget);
  } );
}

LoadJson.prototype.loadcontentUsingAjax = function(jsonTarget) {
  var _this = this;
  $.ajax( { 
    dataType : 'json',
    url: './data/specials.json',
    cache: true,
    success:function(result, status, xhr) {
      _this.writeHtml(jsonTarget, result);
    }
  } ); 
}

LoadJson.prototype.writeHtml = function(jsonTarget, result) {
  this.targetDiv.html('<font color=' + result[jsonTarget].color + 
    '<h3>' + result[jsonTarget].title + '</h3>' +
    '<h4>' + result[jsonTarget].text + '</h4>' +
    '<img src=.' + result[jsonTarget].image + '></img></font>');
  this.removeSubmitButton();
}

LoadJson.prototype.removeSubmitButton = function() {
  this.specialsForm.find(':submit').remove();
}

$(function() {
  var specialsDiv = $('#specials');
  var elements = {
    specialsForm: specialsDiv.find('form'),
    selectElement: specialsDiv.find('select')
  }
  var loadJson = new LoadJson(specialsDiv, elements);
  loadJson.init();
  loadJson.loadJsonContent();
} );
