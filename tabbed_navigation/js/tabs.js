function TabbedNavigation(divModules) {
  this.divModules = divModules;
  this.newList = $('<ul></ul>');
}

TabbedNavigation.prototype.init = function() {
  var arr = []
  var _this = this;
  _this.divModules.hide();
  _this.divModules.first().before(_this.newList);
  _this.divModules.each(function() {
    _this.newList.append($('<li></li>').text($(this).find('h2').text()));
  } );
  _this.newList.find('li').click(function(event) {
     $(this).addClass('current').siblings().removeClass('.current');
    _this.showRelatedModule(event); 
  } );
}

TabbedNavigation.prototype.showRelatedModule = function(listElement) {
  var text = $(listElement.target).text();
  this.divModules.each(function() {
    if ($(this).find('h2').text() == text) {
      $(this).show().siblings('div.module').hide();
      return;
    }
  } );
}

$(function() {
  var divModules = $('div.module');
  var newNavigation = new TabbedNavigation(divModules);
  newNavigation.init();
} );
