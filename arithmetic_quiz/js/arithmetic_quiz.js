function ArithmeticQuiz() {
  this.score = 0;
  this.operators = [
    {
      sign: "+",
      method: function(a,b){ return a + b; }
    },
    {
      sign: "-",
      method: function(a,b) { return a - b; }
    },
    {
      sign: '*',
      method: function(a,b) { return a * b; }
    },
    {
      sign: '/',
      method: function(a,b) { return (a / b).toFixed(2); }
    } 
  ];
  this.wrongAnswers = [];
  this.numberOfQuestions = 0;
  this.questionGenerated = [];
  this.questionDiv = $('#question');
  this.resultBox = $('#result');
  this.scoreBox = $('#score');
  this.finalResult = $('#final-result')
  this.wrongAnsweredQuestions = [];
  this.answerOfWrongAnsweredQuestions = [];
}

ArithmeticQuiz.prototype.init = function() {
  this.randomQuestionGenerated = this.randomQuestion();
  var _this = this;
  _this.questionDiv.text(_this.randomQuestionGenerated);
  _this.numberOfQuestions++;
  _this.questionGenerated.push(_this.randomQuestionGenerated);
  $('#next-button').click(function() {
    _this.performOnClick();
  } );
}

ArithmeticQuiz.prototype.performOnClick = function() {
  var _this = this;
  if (_this.numberOfQuestions > 20){
    _this.showResult();
  }
  else {
    _this.checkAnswer(_this.randomQuestionGenerated);
    _this.randomQuestionGenerated = _this.randomQuestion();
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
  var actualResult = this.operators[this.selectedOperator].method(this.rnum1, this.rnum2);
  if (this.resultBox.val().trim() != actualResult) {
    this.wrongAnsweredQuestions.push(randomQuestionGenerated);
    this.answerOfWrongAnsweredQuestions.push(actualResult); 
  }
  else {
    this.score++;
  }
  this.resultBox.val('');
}

ArithmeticQuiz.prototype.randomQuestion = function() {
  this.selectedOperator = Math.floor(Math.random() * this.operators.length);
  this.rnum1 = Math.floor((Math.random() * 20) + 1);
  this.rnum2 = Math.floor((Math.random() * 20) + 1);
  return(' ' + this.rnum1 + this.operators[this.selectedOperator].sign + this.rnum2);
}

$(function() {
  var arithmeticQuiz = new ArithmeticQuiz();
  arithmeticQuiz.init();
} );
