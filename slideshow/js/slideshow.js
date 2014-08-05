function Slideshow(slideshowElement, listElements) {
  this.slideshowElement = slideshowElement;
  this.listElements = listElements;
  this.numberOfImages = listElements.length;
  this.currentIndex = 0;
}

Slideshow.prototype.init = function() {
  this.navigationArea = $('<div></div>');
  this.slideshowElement.append(this.navigationArea);
  $('body').prepend(this.slideshowElement);
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
  var _this = this;
  _this.fadeInAndOut(_this.currentIndex);
  _this.currentIndex++;
  setInterval(function() {
    _this.startfading();
  }, 4000);
}

Slideshow.prototype.startfading = function() {
  this.fadeInAndOut(this.currentIndex);
  this.currentIndex++;
  if (this.currentIndex == this.numberOfImages) {
    this.currentIndex = 0;
  }
}

$(function() {
  var slideshowElement = $('#slideshow'),
      listElements = $('#slideshow li'),
      slideshow = new Slideshow(slideshowElement, listElements);
  slideshow.init();
} );