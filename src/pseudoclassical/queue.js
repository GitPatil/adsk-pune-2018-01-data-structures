const Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.addIndex = 0;
  this.rmIndex  = 0;
  this.storage = {};
};

Queue.prototype.enqueue = function(value)
{
  this.storage[this.addIndex] = value;
  this.addIndex +=1;
};
  
Queue.prototype.dequeue = function()
{
  let value = this.storage[this.rmIndex];
  delete this.storage[this.rmIndex];
  this.rmIndex += 1;
  return value;
};

Queue.prototype.size = function() {
  var numProps = 0;
  for (var x in this.storage) {
    numProps +=1;
  }
  return numProps;
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = Queue;
}
