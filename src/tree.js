const _ = require('underscore');

const Tree = function(value) {
  const newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];

  _.extend(newTree, treeMethods);

  return newTree;
};

const treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));  //<-- Important
};

treeMethods.contains = function(target) {

  let result = false;

  function compare(node) {
    if(node.value === target){
      result = true;
    }
    else if(node.children.length > 0){
      for(var i = 0; i <node.children.length; i++ )
      {
        compare(node.children[i]);
      }
    }
  }

  compare(this);
  return result;
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = Tree;
}
