let value;

const programmer = {
    name : "Sercan Noyan Gerimyanoğlu",
    age : 28,
    email : "sngermiyanoglu@hotmail.com",
    langs : ["Java","Python","Hibernate","Spring","JQuery","HTML","CSS"],

    address : {
        city : "Ankara",
        street : "Yukarı Ayrancı"
    },

    work : function(){
        console.log("Çalışıyor...");
    }
}

value = programmer;

// Adı gösterme
value = programmer.name;

// Email gösterme
value = programmer.email;
value = programmer["email"];

// Sehir gösterme
value = programmer.address.city;

// Mahalleyi gösterme
value = programmer.address.street;

// fonsiyonu çalıştırma
programmer.work();

const personnel = [
    {name: "Personel 1" ,age: 32},
    {name: "Personel 2" ,age: 37}
];

value = personnel[0].name;
value = personnel[1].name;

console.log(value);