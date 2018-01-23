

const Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  const someInstance = Object.create(queueMethods);
  someInstance.addIndex = 0;
  someInstance.rmIndex  = 0;
  someInstance.storage = {};
  
  return someInstance;

};

const queueMethods = {};

queueMethods.enqueue = function(value)
{
  this.storage[this.addIndex] = value;
  this.addIndex +=1;
};
  
queueMethods.dequeue = function(){
  let value = this.storage[this.rmIndex];
  delete this.storage[this.rmIndex];
  this.rmIndex += 1;
  return value;
};

queueMethods.size = function() {
  var numProps = 0;
  for (var x in this.storage) {
    numProps +=1;
  }
  return numProps;
}


if (typeof module !== 'undefined' && module.exports) {
  module.exports = Queue;

  // expose prototype object without extending exported constructor
  // enumerable properties
  Object.defineProperty(module.exports, 'queueMethods', {
    writable: true,
    configurable: true,
    enumerable: false,
    value: queueMethods
  });
}
