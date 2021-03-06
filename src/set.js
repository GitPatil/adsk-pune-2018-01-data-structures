const Set = function() {
  const set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

const setPrototype = {};

setPrototype.add = function(item) {
  if(!this.contains(item)){
    this._storage[item] = item;
  }
};

setPrototype.contains = function(item) {
  return this._storage[item] ? true : false;
};

setPrototype.remove = function(item) {
  if(this.contains(item)){
    delete this._storage[item];
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = Set;
}
