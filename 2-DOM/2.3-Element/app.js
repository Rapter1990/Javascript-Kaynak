let element;

// Element Id'lere göre seçme
element = document.getElementById("divId");

// Element Class'lara göre seçme
element = document.getElementsByClassName("divClass");
element = document.getElementsByClassName("divClass")[0]; // Birden fazla aynı class varsa herhangi birini seçebiliriz.

// Element Tag'lara göre seçme
element = document.getElementsByTagName("div"); // tüm div'leri aldı

// Query Selector ( CSS Selector  - Tek bir Element )

element = document.querySelector("#divId"); // id
element = document.querySelector(".divClass"); // class 

element = document.querySelector("div"); // Sayfada bulduğu ilk tag getirme

// Query SelectorAll ( CSS Selector  - Tüm Element )

element = document.querySelectorAll("#divId"); // id
element = document.querySelectorAll(".divClass"); // class 

// tüm elementleri yazdırma (.divClass göre)
element.forEach(function(el){
    console.log(el);
});

console.log(element);