// Promise Objesi Döndüren Fonksiyon
function getData(data){

    // Promise objesi döndürme
    return new Promise(function(resolve,reject){

        setTimeout(function(){

            // Olumlu Sonuç
            //resolve("Olumlu Sonuç");

            // Olumsuz Sonuç
            //reject("Olumsuz Sonuç");
            
            if(typeof data === "string"){
                // Olumlu
                resolve(data);
            }else{
                // Olumsuz
                //reject("Lüften bir string değeri giriniz.");
                // Error Objesi olup döndürme
                reject(new Error("Lüften bir string değeri giriniz."));
            }


        },5000);

        
    });

}


//console.log(getData("Merhaba"));

// Olumlu Sonuç
// getData("Merhaba").then(function(response){  // "Olumlu Sonuç" => response aktaracak
//     console.log(response);
// });

// Olumsuz Sonuç
// getData("Merhaba").then(function(err){  // "Olumsuz Sonuç" => err aktaracak
//     console.log(err);
// });


getData("Merhaba").then(function(response){  // resolve(data); => response aktaracak
    console.log("Gelen Değer:",response); // console.log("Gelen Değer: " + response);
}).catch(function(err){
    console.log(err);
});

getData(24).then(function(response){  // resolve(data); => response aktaracak
    console.log("Gelen Değer:",response); // console.log("Gelen Değer: " + response);
}).catch(function(err){
    console.log(err);
});

getData("Merhaba")
.then(response =>  console.log("Gelen Değer:",response)) 
.catch(err => console.log(err));


// Sayıyı 5 ile çarpma
function multiplyByFive(number){
     // Promise objesi döndürme
     return new Promise(function(resolve,reject){
        setTimeout(function(){

            if(typeof number === "number"){
                resolve(number*5);
            }else{
                reject(new Error("Lüften bir number değeri giriniz."));
            }

        },8000);
     });
}

// Promise Chain -> Birden fazla then , bir tane catch işlemi
multiplyByFive(10)
.then(response => { 
    console.log(response); 
    return response * 5;  // buradaki dönen değeri response2 gönderiyor.
})
.then(response2 => console.log(response2)) 
.catch(err => console.log(err));