// For In ve For Of

const person = {
    name : "Sercan Noyan Germiyanoğlu",
    age: 28,
    salary: 5000
}

const langs = ["Pyhton","Java","C++","Javascript"];

const name = "Noyan";

// For In (Arrayın indexleri üzerinde gezinme)
// Object
for (let prop in person) {
   console.log(prop,person[prop]);
}

// Array
for (let index in langs) {
    console.log(index,langs[index]);
}

// String
for (let index in name) {
    console.log(index,name[index]);
}


// For of (Değerler üzerinde gezinme)
// Object
// for (let prop of person) {   
//     console.log(prop,person[prop]);   // object de değer olarak gezinemeyiz o yüzden object For Of kullanılmaz.. !!!! 
// }

// Array
for (let index of langs) {
    console.log(index);
}

// String
for (let character of name) {
    console.log(character);
}