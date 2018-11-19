// Fonksiyon Tanımlama

function merhabaSana(){
    console.log("Merhaba");
}

function merhaba(name,age){
    if(typeof name === "undefined") name = "Bilgi Yok";
    if(typeof age === "undefined") age = "Bilgi Yok";
    console.log(`İsim : ${name}\nYaş : ${age}`);
}


merhabaSana();
merhaba("Sercan Noyan Germiyanoğlu",28);
merhaba();


function square(x){
    return x*x;
}

function cube(x){
    return Math.pow(x,3);
}

let result = square(5);

result = cube(result);

console.log(result);


function goster(){
    return "Göster";
}

console.log(goster());


// Function Expression

const sonuc = function(name){
    console.log("Merhaba "+ name);
}

sonuc("Sercan Noyan Germiyanoğlu");


// Immediately Invoked Function Expression (IIFE)
(function(name){
    console.log("Merhaba " + name);
})("Sercan Noyan Germiyanoğlu");


const database = {
    host : "localhost",
    add: function(){
        console.log("Eklendi.");
    },
    get:function(){
        console.log("Elde Edildi.");
    },
    update:function(id){
        console.log(`Id: ${id} Güncellendi.`);
    },
    delete:function(id){
        console.log(`Id: ${id} Silindi.`);
    }

}

console.log(database.host);

database.get();

database.update(10);

database.update(20);

