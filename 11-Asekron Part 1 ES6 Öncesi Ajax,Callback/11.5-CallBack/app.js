// CallBack Fonksiyonlar

// const langs = ["Python","Java","Hibernate","Spring"];

// langs.forEach(function(lang){
//     console.log(lang);
// });


// // Tıkla Buttonu Belirleme
// const clickButton = document.getElementById("btn"); // document.querySelector("#btn");
// clickButton.addEventListener("click",buttonClick);

// function buttonClick(event){
//     console.log("Tıklandı");
// }


// Callback (Başka bir fonskiyonun içinr başka bir fonksiyon gönderme (örneğin -> "event" ))

// callback yazarak process 2 process 1'in altında çalıştırma
// function process1(callback){

//     // Sekron
//     //console.log("Process 1");

//     // Asekron
//     setTimeout(function(){
//         console.log("Process 1"); 
//         callback();
//     },3000);
// }

// function process2(){
       // Sekron
//     //console.log("Process 2");

//     // Asekron
//     setTimeout(function(){
//         console.log("Process 2"); 
//     },2000);
// }

// Process 2 Process 1 beklemeden çalışacak
//process1(process2);
//process2();
//console.log("Naber");


const langs = ["Python","Java","Hibernate","Spring"];

//bu durumu çözmek için  callback tanımladık
function addLangs(lang,callback){
    setTimeout(function(){
        langs.push(lang);
        console.log("Eklendi"); 
        callback();
    },2000);
}

function gettAllLangs(){
    setTimeout(function(){
        langs.forEach(function(lang){
            console.log(lang);
        });
    },1000);
}


//addLangs("Javascript");
//gettAllLangs(); // Aksekron'da bu mümkün değil gettAllLangs 1 sn sonra çalışacak nedeni addLangs beklemediği için 

addLangs("Javascript",gettAllLangs);