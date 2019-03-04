var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('should be able to add 1 and 2', function(){
    assert.equal(true, true)
  })

  it('should be able to add 1 and 4 and give 5', function(){
    calculator.previousTotal = 1
    calculator.add(4)
    assert.equal(calculator.runningTotal, 5);
  })

  it('should be able to subtract 4 from 7 and get 3', function(){
    calculator.previousTotal = 7
    calculator.subtract(4)
    assert.equal(calculator.runningTotal, 3);
  })

  it('should be able to multiply 3 by 5 and find 15', function(){
    calculator.previousTotal = 3;
    calculator.multiply(5);
    assert.equal(calculator.runningTotal, 15);
  })

  it('should be able to divide 21 by 7 and get 3', function(){
    calculator.previousTotal = 21;
    calculator.divide(7);
    assert.equal(calculator.runningTotal, 3);
  })

  // integration tests
  it ('should concatenate multiple number button clicks', function(){
    calculator.numberClick(3);
    calculator.numberClick(7);
    assert.equal(calculator.runningTotal, 37);
  })

it ('should be  chain multiple operations together', function() {
    calculator.numberClick(7);
    calculator.operatorClick('+');
    calculator.numberClick(1);
    calculator.operatorClick('=');
    assert.equal(calculator.runningTotal, 8);
  })

  it('should clear running total without affecting the calculation', function() {
    calculator.numberClick(7)
    calculator.operatorClick("+")
    calculator.numberClick(7)
    calculator.clearClick()
    calculator.numberClick(3)
    calculator.operatorClick("=")
    assert.equal(calculator.previousTotal, 10)
  })

});
