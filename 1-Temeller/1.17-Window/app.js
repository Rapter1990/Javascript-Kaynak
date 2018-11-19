// Window

// Window objesini gösermek için
//console.log(this); 
// console.log(window);

// alert

// alert("Merhaba");
// console.log(window.alert("Merhaba"));

// confirm

// const cevap = confirm("Emin misiniz");
// console.log(cevap);

// prompt (klavyeden textfield değer girme)

// const cevap = prompt("2 + 2 = ?");
// console.log(typeof cevap);
// if(cevap == "4"){
//     console.log("Doğru");
// }else{
//     console.log("Yanlış");
// }

let value;
value = window.location; // window içindeki location objesine eriştik
value = window.location.host; // host adresi (portla birlikte)
value = window.location.hostname; // host adresi
value = window.location.port; // port gösterir.
value = window.location.href; // tüm adresi gösterme

// Sayfayı yenilemek için
// if(confirm("Sayfa Yenilensin mi ?")){
//     value = window.location.reload();
// }else{
//     console.log("Sayfa Yenilenmedi.");
// }


value = window.outerHeight; // pixel uzunluğumuz (yükseklik) (tüm browser kapsar)
value = window.outerWidth; // pixel uzunluğumuz (genişlik) (tüm browser kapsar)

value = window.innerHeight; // pixel uzunluğumuz (yükseklik) (sadece ekran)
value = window.innerWidth; // pixel uzunluğumuz (genişlik) (sadece ekran)

value = window.scrollX; // aşağıdaki scroll bar
value = window.scrollY; // yandaki scroll bar

console.log(value);
