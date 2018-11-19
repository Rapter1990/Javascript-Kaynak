// Async ve Await
async function test(data){ // Fonksiyonun önüne "async" koyduğumuzda new Promise dönmesi gerekir

    // return data; // Aynı işlemi yapar. Promise olarak düşünür.
    // return new Promise((resolve,reject) => {
    //     resolve(data);
    // });

    // Promise objesini bir değişkene atamak
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("Çıktı.."), 5000)
    });

    // Promise 5 sn sonra resolve edeceğinden onu await ile bekletmemiz gerekir. 5sn bekleyecek
    let result = await promise; 

    console.log(result);
    console.log("Naber..");

    return result;

}


// test("Merhaba")
// .then(response => console.log(response))
// .catch(err => console.log(err));


async function testData(data){

    let promise = new Promise((resolve, reject) => {

        setTimeout(() => {

            if(typeof data === "string"){
                resolve(data);
            }else{
                reject("Lüften bir string giriniz...");
            }
        
        }, 5000)

    });

    let result = await promise;

    return result;

}

testData("Merhaba")
.then(response => console.log(response))
.catch(err => console.log(err));

testData(24)
.then(response => console.log(response))
.catch(err => console.log(err));


// https://api.exchangeratesapi.io/latest

// fetch Fonksiyonu Promise Döndürdüğü için await kullanabiliriz.
async function getCurrency(url){

    const response = await fetch(url); // Response object
    console.log(response);
    const data = await response.json(); // Json object

    return data;
}

getCurrency("https://api.exchangeratesapi.io/latest")
.then(response => console.log(response))
.catch(err => console.log(err));;