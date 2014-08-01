function LoadJson(specialsDiv, specialsForm, selectElement) {
this.specialsDiv = specialsDiv;
this.specialsForm = specialsForm;
this.selectElement = selectElement;
this.targetDiv = $('<div></div>');
}

LoadJson.prototype.init = function() {
  this.specialsForm.after(this.targetDiv);
}

LoadJson.prototype.loadJsonContent = function() {
  var _this = this;
  this.selectElement.change(function(event) {
    var jsonTarget = event.target.value;
    $.ajax( { 
        dataType : 'json',
        url: './data/specials.json',
        cache: true,
        success:function(result, status, xhr) {
          _this.targetDiv.html('<h3>' + result[jsonTarget].title + '</h3>' +
            '<h4>' + result[jsonTarget].text + '</h4>' +
            '<img src=.' + result[jsonTarget].image + '></img>');
          _this.specialsForm.find(':submit').remove();
        }
      } );
  } );
}

$(function() {
  var specialsDiv = $('#specials');
  var specialsForm = specialsDiv.find('form');
  var selectElement = specialsDiv.find('select');
  var loadJson = new LoadJson(specialsDiv, specialsForm, selectElement);
  loadJson.init();
  loadJson.loadJsonContent();
} );
