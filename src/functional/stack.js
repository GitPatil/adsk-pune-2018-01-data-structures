const Stack = function() {

  let addIndex = 0;

  const someInstance = {};

  // Use an object with numeric keys to store values
  const storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    storage[addIndex] = value;
    addIndex +=1;
  };

  someInstance.pop = function() {
    let value = storage[addIndex - 1];
    delete storage[addIndex - 1];
    addIndex -= 1;
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
  module.exports = Stack;
}
