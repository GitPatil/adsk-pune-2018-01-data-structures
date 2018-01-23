
class Stack{
  constructor(){
    this.addIndex = 0;
    this.storage = {};
  }

  push(value) {
    this.storage[this.addIndex] = value;
    this.addIndex +=1;
  }
  
  pop(){
    let value = this.storage[this.addIndex - 1];
    delete this.storage[this.addIndex - 1];
    this.addIndex -= 1;
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
  module.exports = Stack;
}
