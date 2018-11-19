// Referans Tipleri -> Bellekteki Yerlere göre kıyaslama yapar.

// Primitive Değişkenler
let a = "Noyan";
let b = "Noyan";

if(a === b ){  // Primitive değişken olduğundan -> Hem içindeki verileri hemde türünü kontrol eder "Noyan" === "Noyan" 
    console.log("Eşit");
}

// Array - Referans Değişkeni
let array1 = [1,2,3,4,5];
let array2 = [1,2,3,4,5];

if(array1 === array2){ // Array referans veri tipi olduğundan bellekte aynı yeri göstermez . Bellekte aynı yeri göstermediğinde eşit olmaz.
    console.log("Eşit");
}

// Object - Referans Değişkeni
const person1 = {
    name: "Sercan Noyan",
    age: 28
}

const person2 = {
    name: "Sercan Noyan",
    age:28
}

if(person1 === person2){ // Object referans veri tipi olduğundan bellekte aynı yeri göstermez . Bellekte aynı yeri göstermediğinde eşit olmaz.
    console.log("Eşit");
}

// Map Referans
const cities = new Map();
cities.set("Ankara",6);
cities.set("İstanbul",34);
cities.set([1,2,3],"Array");

console.log(cities.get("Ankara"));
console.log(cities.get([1,2,3])); // Array [1,2,3]  Bellekte oluştu , sorguladığımız get([1,2,3]) bellekte farklı yerleri gösteriyor çünkü array referansı tipi.
// Mapta array key olarak belirlemek ve array bellekte aynı yerleri göstermesi için array'i değişken olarak tanımla
const key = [1,2,3]; 
cities.set(key,"Array");
console.log(cities.get(key)); 