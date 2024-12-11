let myMap = new Map();

myMap.set("A", 10);
myMap.set("B", 10);
myMap.set("C", 10);
myMap.set("D", 10);
myMap.set("A", 20);
myMap.delete("A");

myMap.delete("C");
console.log(myMap.size);
console.log(myMap.has("B"));
console.log(myMap);
myMap.clear();
console.log(myMap);