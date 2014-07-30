function Blog(blogPostsList) {
  this.blogPostsList = blogPostsList;
}

Blog.prototype.bindEvents = function() {
  var _this = this;
  _this.blogPostsList.click(function(event) {
    $('#blog .excerpt').slideUp();
    event.preventDefault();
    _this.slideDownBlogPost(this);
  } );
}

Blog.prototype.slideDownBlogPost = function(blogPost) {
  $(blogPost).next('.excerpt').slideDown();
}

$(function() {
  var blogPostsList = $('#blog h3');
  var blogPost = new Blog(blogPostsList);
  blogPost.bindEvents();
} );