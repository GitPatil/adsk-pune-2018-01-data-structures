

const Queue = function() {
  
  let addIndex = 0;
  let rmIndex = 0;

  const someInstance = {};

  // Use an object with numeric keys to store values
  const storage = {};

  // Implement the methods below
  someInstance.enqueue = function(value) 
  {
    storage[addIndex] = value;
    addIndex +=1;
  };

  someInstance.dequeue = function() {
    let value = storage[rmIndex];
    delete storage[rmIndex];
    rmIndex += 1;
    return value;
  };

  someInstance.size = function() {
    var numProps = 0;
    for (var x in storage) {
      numProps +=1;
    }
    return numProps;
  };

  return someInstance;
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = Queue;
}
