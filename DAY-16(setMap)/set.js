let mySet = new Set();

mySet.add(10);
mySet.add(20);
mySet.add(30);
mySet.add(40);
mySet.add(10);
mySet.delete(10);
console.log(mySet.has(10));
console.log(mySet.size);
mySet.clear();

console.log(mySet);