const _ = require('underscore');

const Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  const someInstance = {
    addIndex : 0,
  };
  someInstance.storage = {};

  _.extend(someInstance,stackMethods);

  return someInstance;
};

const stackMethods = {

  push : function(value) {
    this.storage[this.addIndex] = value;
    this.addIndex +=1;
  },

  pop : function() {
    let value = this.storage[this.addIndex - 1];
    delete this.storage[this.addIndex - 1];
    this.addIndex -= 1;
    return value;
  },

  size : function() {
    var numProps = 0;
    for (var x in this.storage) {
      numProps +=1;
    }
    return numProps;
  },

};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = Stack;
}
