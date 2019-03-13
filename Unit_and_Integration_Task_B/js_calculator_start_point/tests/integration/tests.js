var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

describe('calculator functionality', function() {
  beforeEach(function() {
    browser.ignoreSynchronization = true;
    browser.get('http://localhost:3000');
  });

  // write integration tests here in the form of "it should do something..."
  it('should have working number buttons', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('2')
  })

  it('should have number buttons that update the running total display', function(){
    running_total= element(by.css('#running_total'))
    element(by.css('#number1')).click();
    element(by.css('#number2')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('12')
  })

  it('should have arthimetical operations update the display with the result of the operation', function() {
    running_total= element(by.css('#running_total'))
    element(by.css('#number2')).click();
    element(by.css('#operator_add')).click();
    element(by.css('#number2')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('4')
  })

it ('should have multiple operations chained together', function(){
  running_total = element(by.css('#running_total'))
  element(by.css('#number2')).click()
  element(by.css('#operator_add')).click();
  element(by.css('#number2')).click();
  element(by.css('#operator_multiply')).click();
  element(by.css('#number2')).click();
  element(by.css('#operator_equals')).click();
  expect(running_total.getAttribute('value')).to.eventually.equal('8')
})

it('should have a negavtive output display', function() {
  running_total= element(by.css('#running_total'))
  element(by.css('#number2')).click()
  element(by.css('#operator_subtract')).click();
  element(by.css('#number7')).click()
  element(by.css('#operator_equals')).click();
  expect(running_total.getAttribute('value')).to.eventually.equal('-5')
})

it('should have a decimal output display', function() {
  running_total= element(by.css('#running_total'))
  element(by.css('#number6')).click()
  element(by.css('#operator_divide')).click();
  element(by.css('#number8')).click()
  element(by.css('#operator_equals')).click();
  expect(running_total.getAttribute('value')).to.eventually.equal('0.75')
})

it('should have a large output display', function() {
  running_total= element(by.css('#running_total'))
  element(by.css('#number6')).click()
  element(by.css('#number7')).click()
  element(by.css('#number8')).click()
  element(by.css('#operator_multiply')).click();
  element(by.css('#number9')).click()
  element(by.css('#number5')).click()
  element(by.css('#operator_equals')).click();
  expect(running_total.getAttribute('value')).to.eventually.equal('64410')
})

it('should show not a number for divide by zero', function(){
   running_total = element(by.css('#running_total'))
   element(by.css('#number6')).click();
   element(by.css('#operator_divide')).click();
   element(by.css('#number0')).click();
   element(by.css('#operator_equals')).click();
   expect(running_total.getAttribute('value')).to.eventually.equal('Not a number')
 })

});
