function TabbedNavigation(divModules) {
  this.divModules = divModules;
  this.newList = $('<ul></ul>');
}

TabbedNavigation.prototype.init = function() {
  var _this = this;
  _this.divModules.hide();
  $(_this.divModules[0]).before(_this.newList);
  _this.divModules.each(function() {
    _this.newList.append($('<li></li>')
                    .text($(this).find('h2')
                                    .text()));
  } );
  _this.newList.click(function(event) {
     $(this).find('li').removeClass('current');
     $(event.target).addClass('current');
    _this.showRelatedModule(event); 
  } );
}

TabbedNavigation.prototype.showRelatedModule = function(listElement) {
  this.divModules.hide();
  var text = $(listElement.target).text();
  this.divModules.each(function() {
    if ($(this).find('h2').text() == text) {
      $(this).show();
      return;
    }
  } );
}

$(function() {
  var divModules = $('.module');
  var newNavigation = new TabbedNavigation(divModules);
  newNavigation.init();
} );
