function ArithmeticQuiz(questionDiv, resultBox, scoreBox, finalResult, nextButton) {
  this.score = 0;
  this.wrongAnswers = [];
  this.numberOfQuestions = 0;
  this.questionGenerated = [];
  this.questionDiv = questionDiv;
  this.resultBox = resultBox;
  this.scoreBox = scoreBox;
  this.nextButton = nextButton;
  this.finalResult = finalResult;
  this.wrongAnsweredQuestions = [];
  this.answerOfWrongAnsweredQuestions = [];
  this.randomNumberRange = 20;
}

ArithmeticQuiz.prototype.init = function() {
  this.randomQuestionGenerated = this.generateRandomQestion();
  var _this = this;
  _this.questionDiv.text(_this.randomQuestionGenerated);
  _this.numberOfQuestions++;
  _this.questionGenerated.push(_this.randomQuestionGenerated);
  _this.nextButton.click(function() {
    _this.performOnClick();
  } );
}

ArithmeticQuiz.prototype.generateRandomQestion = function() {
  var questionObject = new Question(this.randomNumberRange);
  this.getAnswer(questionObject);
  return questionObject.getRandomQuestion();
}

ArithmeticQuiz.prototype.getAnswer = function(questionObject) {
  this.answer = questionObject.getanswer();
}

ArithmeticQuiz.prototype.performOnClick = function() {
  var _this = this;
  if (_this.numberOfQuestions > _this.randomNumberRange){
    _this.showResult();
  }
  else {
    _this.checkAnswer(_this.randomQuestionGenerated);
    _this.randomQuestionGenerated = _this.generateRandomQestion();
    _this.questionDiv.text(_this.randomQuestionGenerated);
    _this.numberOfQuestions++;
    _this.questionGenerated.push(_this.randomQuestionGenerated);
    _this.scoreBox.text(_this.score);
  }
}

ArithmeticQuiz.prototype.showResult = function() {
  var _this = this;
  var text = 'You answered following questions incorrectly</br>';
  for (var i = 0; i < _this.wrongAnsweredQuestions.length; i++) {
    text += _this.wrongAnsweredQuestions[i] + ' = ' + _this.answerOfWrongAnsweredQuestions[i] + '</br>';
  }
  _this.finalResult.html(text);
}

ArithmeticQuiz.prototype.checkAnswer = function(randomQuestionGenerated) {
  if (this.resultBox.val().trim() != this.answer) {
    this.wrongAnsweredQuestions.push(randomQuestionGenerated);
    this.answerOfWrongAnsweredQuestions.push(this.answer); 
  }
  else {
    this.score++;
  }
  this.resultBox.val('');
}

$(function() {
  var questionDiv = $('#question'),
      resultBox = $('#result'),
      scoreBox = $('#score'),
      finalResult = $('#final-result'),
      nextButton = $('#next-button');
      arithmeticQuiz = new ArithmeticQuiz(questionDiv, resultBox, scoreBox, finalResult, nextButton);
  arithmeticQuiz.init();
} );
