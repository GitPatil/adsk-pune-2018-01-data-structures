
const LinkedList = function() {
  const list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    let newNode = Node(value); 
    if(!this.head)
    {
      this.head = newNode;
    }
    else{
      this.tail.next = newNode;
    }

    this.tail = newNode;
  };

  list.removeHead = function() {
    let oldHead = this.head;
    this.head = oldHead.next;
    return oldHead.value;
  };

  list.contains = function(target) {
    let curNode = this.head;
    while(curNode)
    {
      if(curNode.value === target){
        return true;
      }
      curNode = curNode.next;
    }
    return false;
  };

  return list;
};

const Node = function(value) {
  const node = {};

  node.value = value;
  node.next = null;

  return node;
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = LinkedList;
}
