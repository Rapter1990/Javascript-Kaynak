const selectedElement = document.querySelectorAll(".mainDiv")[0];

const title = document.querySelector(".title");

console.log(selectedElement);
console.log(title);


// Mouse Event

// click
//title.addEventListener("click",tikla);

// double click 
//title.addEventListener("dblclick",tikla);

// mousedown (click eventi ile aynı)
//title.addEventListener("mousedown",tikla);

// mouseup (mouse tuşu bıraktıktan sonra tetiklenir)
//title.addEventListener("mouseup",tikla);

// mouseover (mouse üzerine gelindiğinde tetiklenir.)
//title.addEventListener("mouseover",tikla);

// mouseout (mouseover üzerine geldikten sonra çıkıldığında tetiklenir.)
//title.addEventListener("mouseout",tikla);

// Mouse Enter ve Mouse Leave
title.addEventListener("mouseenter",tikla); // title içinde iken çalışacak (mouse ile gezinirken)
title.addEventListener("mouseleave",tikla); // title dışında çıkıldığında çalışacak (mouse ile gezinirken)

function tikla(event){
    console.log(event.type);
}