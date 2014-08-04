function Blog(blogPostsList) {
  this.blogPostsList = blogPostsList;
}

Blog.prototype.performOnClick = function() {
  var _this = this;
  _this.blogPostsList.click(function(event) {
    event.preventDefault();
    $('#blog .excerpt:visible').slideUp();
    _this.slideDownBlogPost(this);
  } );
}

Blog.prototype.slideDownBlogPost = function(blogPost) {
  $(blogPost).next('.excerpt').slideDown();
}

$(function() {
  var blogPostsList = $('#blog h3'),
      blogPost = new Blog(blogPostsList);
  blogPost.performOnClick();
} );