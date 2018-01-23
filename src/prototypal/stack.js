const Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  const someInstance = Object.create(stackMethods);
  someInstance.addIndex = 0;
  someInstance.rmIndex  = 0;
  someInstance.storage = {};
  
  return someInstance;
};

const stackMethods = {};

stackMethods.push = function(value) {
  this.storage[this.addIndex] = value;
  this.addIndex +=1;
};

stackMethods.pop = function() {
  let value = this.storage[this.addIndex - 1];
  delete this.storage[this.addIndex - 1];
  this.addIndex -= 1;
  return value;
};

stackMethods.size = function() {
  var numProps = 0;
  for (var x in this.storage) {
    numProps +=1;
  }
  return numProps;
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = Stack;

  // expose prototype object without extending exported constructor
  // enumerable properties
  Object.defineProperty(module.exports, 'stackMethods', {
    writable: true,
    configurable: true,
    enumerable: false,
    value: stackMethods
  });
}
