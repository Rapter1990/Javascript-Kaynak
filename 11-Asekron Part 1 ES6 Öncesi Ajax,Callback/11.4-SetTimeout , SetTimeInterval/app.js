// SetTimeInterval ve SetTimeout

// SetTimeout (İşlemi Belirli bir sn sonra başlatma)

// 2 sn sonra işlemi gerçekleştirme
setTimeout(function(){
    console.log("Naber");
},2000);

// SetTimeInterval (İşlemi belirle aralıklarla Yapma)
// 1 sn aralıklarla işlemi yapma

let i = 0;
let value = setInterval(function(){
    console.log("Sayi :",i);
    i++;
},1000);


// Clear Interval (Interval durdurma)

// Button belirleme
document.getElementById("btn").addEventListener("click",function(){
    clearInterval(value);
});

