function LoadExternalContent(blogHeadings) {
  this.blogHeadings = blogHeadings;
  this.newDiv = '';
}

LoadExternalContent.prototype.init = function() {
  var _this = this;
  _this.insertDiv();
  _this.blogHeadings.click(function(event) {
    event.preventDefault();
    _this.getContent($(this));
  });
};

LoadExternalContent.prototype.insertDiv = function() {
  var _this = this;
  _this.blogHeadings.each(function() {
      _this.newDiv = $('<div></div>').insertAfter($(this));
      $(this).data('newDiv', _this.newDiv);
    });
};

LoadExternalContent.prototype.getContent = function(currentHeading) {
  var anchor = currentHeading.find('a'),
      newDiv = currentHeading.data('newDiv'),
      href = anchor.attr('href'),
      url = href.split('#')[0],
      id = href.split('#')[1];
  newDiv.load(url + ' #' + id);
};

$(function() {
  var blogHeadings = $('#blog h3');
      loadObject = new LoadExternalContent(blogHeadings);
  loadObject.init();
} );
