// Klavye Eventleri

// keypress (Herhangi bir tuşa basılınca çalışacak (keypress ve keydown çalışacak) )
// document.addEventListener("keypress",run1);

// function run1(event){
//     console.log(event.which) // basılan tuşun ascii tablosundaki değerini gösterir.
//     console.log(event.key); // basılan tuşu gösterir.
//     console.log("keypress Çalıştı.");
// }

// keydown (klavyede sadece Ok tuşuna basılınca tetiklenir.)
// document.addEventListener("keydown",run2);

// function run2(event){
//     console.log(event.which) // basılan tuşun ascii tablosundaki değerini gösterir.
//     console.log(event.key); // basılan tuşu gösterir.
//     console.log("keydown Çalıştı.");
// }

// keyup (tuşa basmayı bıraktığımız zaman tetiklenir.)
// document.addEventListener("keyup",run3);

// function run3(event){
//     console.log(event.which) // basılan tuşun ascii tablosundaki değerini gösterir.
//     console.log(event.key); // basılan tuşu gösterir.
//     console.log("keyup Çalıştı.");
// }



const inputElement = document.querySelector(".inputClass");
const textArea = document.querySelector("#yazıAlaniId");

inputElement.addEventListener("keyup",textShow);

function textShow(event){

    //console.log(event.key);

    // yapılan değişikliği göstermek için target içindeki value alacağız
    //console.log(event.target.value);

    textArea.textContent = event.target.value;
}