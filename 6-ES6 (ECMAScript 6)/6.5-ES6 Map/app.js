// ECMAScript Map 
// Map -> key(anahtar) , value(Değer)

let myMap = new Map(); // Map Oluşturma
console.log(myMap);

const key1 = "Mustafa"; // string
const key2 = {a:10, b:20} // object
const key3 = () => 2; // function

// Map değer ekleme (Set)
myMap.set(key1,"String Değer");
myMap.set(key2,"Object Literal Değer");
myMap.set(key3,"Function Değer");

// Map 'den değer getirme (Get)
console.log(myMap.get(key1));
console.log(myMap.get(key2));
console.log(myMap.get(key3));

console.log(myMap);

// Map Boyutu
console.log(myMap.size);

const cities = new Map();
cities.set("İstanbul",34);
cities.set("Ankara",6);
cities.set("Antalya",7);


// For Each
cities.forEach(function(key,value){
    console.log(key,value); //console.log(key + " " + value);
});

// For Of
for (let [key, value] of cities) {
    console.log(key,value);
}

// Map keys
for (let key of cities.keys()) {
    console.log(key);
}

// Map values
for (let value of cities.values()) {
    console.log(value);
}

// Arraylerden Map oluşturma
const array = [["key1","value1"],["key2","value2"]];
const lastMap = new Map(array);
console.log(lastMap);

// Maplerden array oluşturma
const citiesMaptoArray = new Map();
citiesMaptoArray.set("İstanbul",34);
citiesMaptoArray.set("Ankara",6);
citiesMaptoArray.set("Antalya",7);

const mapArray = Array.from(citiesMaptoArray);
console.log(mapArray); // [["İstanbul",34],["Ankara",6],["Antalya",7]]
