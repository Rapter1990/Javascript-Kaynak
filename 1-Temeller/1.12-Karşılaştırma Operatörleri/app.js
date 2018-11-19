// Karşılaştırma Seçenekleri

// ==
// ===
// !=
// !==
// <
// >
// <=
// >=


console.log(2 == 2);

console.log("js" == "java");

console.log(2 == "2"); // bir tarafta sayı diğer tarafta string varsa sayı string çevilir ve "2" == "2" (true)

console.log(2 === "2"); // değerler ve tipler aynı mı diye bakar. (false)

console.log(2>8);

console.log(2<8);

console.log(2!=8);

console.log(8!=8);

console.log(8>=5);
console.log(5>=5);
console.log(3>=5);

console.log(8<=5);
console.log(5<=5);
console.log(3<=5);


// Mantıksal Karşılaştırma

// 1 ) Not Operatörü
console.log(!(2 == 2));

// 2 ) And Operatörü
console.log((2 == 2) && ("Ahmet" == "Ahmet"));
console.log((2 == 3) && ("Ahmet" == "Ahmet"));
console.log((2 == 3) && ("Ahmet" == "Fatma"));

// 3 ) Or Operatörü
console.log((4 == 2) || ("Ahmet" == "Fatma"));
console.log((2 == 2) || ("Ahmet" == "Ahmet"));

// Koşullar

// 1 ) if,else

const error = true;

if(error){
    console.log("Hata Meydana Geldi..");
}else{
    console.log("Hata Oluşmadı.");
}

const user = "sng";

if(user === "sng"){ // hep değerler hepde türler.
    console.log("Kullanıcı Doğrulandı.");
}else{
    console.log("Kullanıcı Bulunmadı.");
}



const kosul = 7;

if(kosul == 1){
    console.log("Koşul 1");
}else if(kosul == 2){
    console.log("Koşul 2");
}else if(kosul == 3){
    console.log("Koşul 3");
}else if(kosul == 4){
    console.log("Koşul 4");
}else{
    console.log("Geçersiz İşlem");
}


// Ternary Operator
const number = 100;
console.log((number == 100)? "Sayı 100 eşit." : "Sayı 100 eşit değil.");
console.log((number === 100)? "Sayı 100 eşit." : "Sayı 100 eşit değil."); // hep değer hep operator karşılaştırma