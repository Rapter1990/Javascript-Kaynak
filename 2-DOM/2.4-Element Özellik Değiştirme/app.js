let element = document.querySelector("#divId");

// Element Özellikleri

console.log(element.id);  // id 'sini gösterme
console.log(element.className);  // class 'sını gösterme
console.log(element.classList);  // kaç tane class kullanılmış
console.log(element.classList[0]);  // kullanılan class'lardan ilkini gösterme
console.log(element.textContent); // oradaki yazıyı alacak
console.log(element.innerHTML); // içindeki html etiketleride dahil herşeyi alacak
console.log(element.href); // sayfanın herhangi bir yere gidip gitmediği (# veya link)

// Style Özellikleri

element.className = "yeniClassİsmi"; // class Yeni_class olarak değiştirme

element.style.color = "#0000FF"; 
element.style.marginLeft = "5px";

element = document.querySelector("#aId"); // a tag özellikleri
element.href = "http://www.google.com.tr"; 
element.target = "_blank";
element.textContent = "Yeni Link";
element.innerHTML = "Yeni Yeni Link";
console.log(element);




const elements = document.querySelectorAll(".drinkItemClass");
console.log(elements);

elements.forEach(function(element){
    element.style.color = "red";
    element.style.background = "green";
});


let ilkCocuk = document.querySelector("li:first-child");
console.log(ilkCocuk);

let sonCocuk = document.querySelector("li:last-child");
console.log(sonCocuk);

let seciliCocuk = document.querySelector("li:nth-child(2)");
console.log(seciliCocuk);

let tekCocuk = document.querySelectorAll("li:nth-child(odd)");
console.log(tekCocuk);

let ciftCocuk = document.querySelectorAll("li:nth-child(even)");
console.log(ciftCocuk);

tekCocuk.forEach(function(element){
    element.style.color = "blue";
    element.style.background = "black";
});

ciftCocuk.forEach(function(element){
    element.style.color = "yellow";
    element.style.background = "gray";
});