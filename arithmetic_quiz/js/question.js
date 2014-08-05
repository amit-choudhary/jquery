function Question(randomNumberRange) {
  this.firstNumber = this.getRandomNumber(randomNumberRange);
  this.secondNumber = this.getRandomNumber(randomNumberRange);
  this.selectedOperator = this.getOperator();
  this.randomQuestion = this.getRandomQuestion();
  this.answer = this.getanswer();
}

Question.prototype.getRandomNumber = function(randomNumberRange) {
  return (Math.floor((Math.random() * randomNumberRange) + 1));
}

Question.prototype.getOperator = function() {
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
  return (this.getRandomNumber(this.operators.length) - 1); 
}

Question.prototype.getRandomQuestion = function() {
  return (this.firstNumber + ' ' + this.operators[this.selectedOperator].sign + ' ' + this.secondNumber);
}

Question.prototype.getanswer = function() {
 return (this.operators[this.selectedOperator].method(this.firstNumber, this.secondNumber));
}
