function Slideshow(slideshowElement, listElements) {
  this.slideshowElement = slideshowElement;
  this.listElements = listElements;
}

Slideshow.prototype.init = function() {
  this.navigationArea = $('<div></div>');
  this.slideshowElement.append(this.navigationArea);
  $('body').prepend(this.slideshowElement.detach());
  this.listElements.hide();
  this.startSlideshow()
}

Slideshow.prototype.fadeInAndOut = function(index) {
  this.listElements.eq(index)
                      .fadeIn(2000)
                      .fadeOut(2000);
  this.navigationArea.text('Showing ' + (index + 1)  + ' of ' + this.numberOfImages + ' images');
}

Slideshow.prototype.startSlideshow = function() {
  var _this = this,
      index = 1;
  _this.numberOfImages = _this.listElements.length;
  _this.fadeInAndOut(0);
  setInterval(function() {
    _this.fadeInAndOut(index);
    index++;
    if (index == _this.numberOfImages) {
      index = 0;
    }
  }, 4000);
}

$(function() {
  var slideshowElement = $('#slideshow'),
      listElements = $('#slideshow li'),
      slideshow = new Slideshow(slideshowElement, listElements);
  slideshow.init();
} );