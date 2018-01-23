
class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  constructor()
  {
    this.addIndex = 0;
    this.rmIndex  = 0;
    this.storage = {};
  }

  enqueue(value)
  {
    this.storage[this.addIndex] = value;
    this.addIndex +=1;
  }
    
  dequeue()
  {
    let value = this.storage[this.rmIndex];
    delete this.storage[this.rmIndex];
    this.rmIndex += 1;
    return value;
  }
  
  size() {
    var numProps = 0;
    for (var x in this.storage) {
      numProps +=1;
    }
    return numProps;
  }
};



if (typeof module !== 'undefined' && module.exports) {
  module.exports = Queue;
}
