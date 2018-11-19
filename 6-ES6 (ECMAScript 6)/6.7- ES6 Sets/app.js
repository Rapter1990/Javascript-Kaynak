// Set -> Kümeler

// Set tanımlama
const mySet = new Set();

// Set veri ekleme
mySet.add(100); // int
mySet.add(3.14); // double
mySet.add("Noyan"); // string
mySet.add(true); // boolean
mySet.add([1,2,3]); // array
mySet.add({a:1,b:2}); // object

console.log(mySet);

const mySet2 = new Set([100,"Noyan",false]);
console.log(mySet2);

// Size
console.log(mySet.size);

// Delete
mySet.delete("Noyan");
console.log(mySet);

// has -> var mı yokmu var ise true yok ise false
console.log(mySet.has(true));
console.log(mySet.has("Aba"));
console.log(mySet.has([1,2,3])); // Array referans tipi olduğundan bellekte aynı yeri göstermez.

// For Each
mySet.forEach(function(value){
    console.log(value);
});

// For Of
for (let value of mySet) {
    console.log(value);
}

// Set Array çevirme
const array = Array.from(mySet);
console.log(array);