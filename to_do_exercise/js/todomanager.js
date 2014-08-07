function TodoManager(elements) {
  this.leftupperSection = elements.leftupperSection;
  this.useraddSection = elements.useraddSection;
  this.todoItem = elements.todoItem;
  this.selectUsersList = elements.selectUsersList;
  this.savetodoButton = elements.savetodoButton;
  this.createtodoButton = elements.createtodoButton;
  this.createuserButton = elements.createuserButton;
  this.nameInput = elements.nameInput;
  this.addNameButton = elements.addNameButton;
  this.todoList = elements.todoList;
  this.usersList = elements.usersList;
  this.newUser = '';
  this.usernames = [];
}

TodoManager.prototype.init = function() {
  this.hideElements(this.leftupperSection);
  this.hideElements(this.useraddSection);
  this.hideElements(this.createtodoButton);
  this.bindEvents();
}

TodoManager.prototype.hideElements = function(element) {
  element.css('visibility', 'hidden');
}

TodoManager.prototype.bindEvents = function() {
  var _this = this;
  _this.createuserButton.click(function() {
    _this.displayElements(_this.useraddSection);
  } );
  _this.addNameButton.click(function() {
    _this.newUser = new User(_this.nameInput.val().trim());
    if (_this.validateName(_this.newUser.name)) {
      _this.usernames.push(_this.newUser.name);
      _this.appendtoSelectUsersList(_this.newUser);
      _this.appendtoUsersList(_this.newUser);
      _this.nameInput.val('');
      _this.displayElements(_this.createtodoButton);
    }

  } );
  
  _this.createtodoButton.on('click', function() {
    _this.displayElements(_this.leftupperSection);  
  } );

  _this.savetodoButton.on('click', function() {
    var todoitemvalue = _this.todoItem.val().trim();
    if (todoitemvalue) {
      var user = _this.selectUsersList.find(':selected').data('user');
      var todo = new TodoList(todoitemvalue);
      user.toDoList.push(todo.todoitem);
      _this.appendTotodoList(todoitemvalue, user);
      _this.changeUserListContent(user);
    }
  } );

  _this.todoList.on('click', 'li', function(event) {
    var user = $(this).data('user');
    if (event.target.checked) {
      $(this).addClass('lineThrough');
      user.toDoList.length -= 1;
      _this.changeUserListContent(user);
    }
    else if (!event.target.checked) {
      $(this).removeClass('lineThrough');
      user.toDoList.length += 1;
      _this.changeUserListContent(user);
    }
  });
}

TodoManager.prototype.changeUserListContent = function(user) {
  var _this = this;
  _this.usersList.find('li').each(function() {
    if ($(this).data('user') == user) {
      $(this).text(user.name + '(' + user.toDoList.length + ')');
    }
  })
}

TodoManager.prototype.appendtoSelectUsersList = function(user) {
  $('<option>' + user.name + '</option>').data('user', user).appendTo(this.selectUsersList);
}

TodoManager.prototype.appendTotodoList = function(value, user) {
  var _this = this;
  $('<li><input type="checkbox"></input>' + value + '(' + user.name + ')' + '</li>').data('user', user).appendTo(_this.todoList); 
}

TodoManager.prototype.appendtoUsersList = function(user) {
var _this = this;
$('<li>' + user.name + '(' + user.toDoList.length + ')' + '</li>').data('user', user).appendTo(_this.usersList); 

}

TodoManager.prototype.displayElements = function(element) {
  element.css('visibility', 'visible');
}

TodoManager.prototype.validateName = function(name) {
  if (name == '') {
    alert('Name cant be empty');
    return false;
  }
  else {
    var usernamesLength = this.usernames.length;
    for (var i = 0; i < usernamesLength; i++) {
      if(name == this.usernames[i]) {
        alert('Name is already taken');
        return false;
      }
    }
    return true;
  }
}

$(function() {
  var elements = {
    leftupperSection : $('#upper-left'),
    useraddSection : $('#useradd-section'),
    todoItem : $('#todo-item'),
    selectUsersList : $('#dropdown-list'),
    savetodoButton : $('#save-todo'),
    createtodoButton : $('#create-todo'),
    createuserButton : $('#create-user'),
    nameInput : $('#name-input'),
    addNameButton : $('#add-name'),
    todoList : $('#todo-list'),
    usersList : $('#users-list')
  }
  var manager = new TodoManager(elements);
  manager.init();
} );