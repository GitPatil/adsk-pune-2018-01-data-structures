const Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  this.addIndex = 0;
  this.storage = {};
};

Stack.prototype.push = function(value) {
  this.storage[this.addIndex] = value;
  this.addIndex +=1;
};

Stack.prototype.pop = function() {
  let value = this.storage[this.addIndex - 1];
  delete this.storage[this.addIndex - 1];
  this.addIndex -= 1;
  return value;
};

Stack.prototype.size = function() {
  var numProps = 0;
  for (var x in this.storage) {
    numProps +=1;
  }
  return numProps;
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = Stack;
}
