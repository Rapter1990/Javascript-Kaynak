let value;

const drinkList = document.querySelector(".drinkClass");
const drink = document.querySelector(".drinkItemClass:nth-child(2)");

const mainDiv = document.querySelector(".mainDiv");

value = drinkList;
value = drink;
value = mainDiv;

// child nodes (Text dahil)
value = drinkList.childNodes; // text boş olmasının nedeni satır atalama olayı <li></li>
                              //                                               <li></li>

value = drinkList.childNodes[0];

// Children - Element
value = drinkList.children;
value = drinkList.children[1]; // 2. item gösterecek (0 -> 1, 1 -> 2 ....)
value = drinkList.children[drinkList.children.length-1]; // son item gösterecek
value = drinkList.children[0].textContent = "1.Madde"; // ilk item değiştirme


value = mainDiv;
value = mainDiv.children; // mainDivdeki children tagları gösterir.
value = mainDiv.children[1]; // mainDivdeki 2.chidren gösterir.
value = mainDiv.children[1].children[1].textContent = "2.Madde"; // mainDivdeki 1.children 'in 1.childrendeki text değiştirme.

value = drinkList;
value = drinkList.firstElementChild;  // ilk children getirir (<li> deki)
value = drinkList.lastElementChild;  // son children getirir.  (<li> deki)
value = drinkList.children.length; // kaç tane children olduğunu gösterir..  (<li> deki)
value = drinkList.childElementCount; // kaç tane children olduğunu gösterir..  (<li> deki)

value = mainDiv;
value = mainDiv.parentElement; // mainDiv 'nin parent aldı burada <body> oluyor.
value = mainDiv.parentElement.parentElement; // <body> parentini yani <html> aldık 


// Element Kardeşleri
value = drink;
value = drink.previousElementSibling; // bir önceki child gider.
value = drink.nextElementSibling; // bir sonraki child gider.
value = drink.previousElementSibling.previousElementSibling; // iki önceki child gider.
value = drink.nextElementSibling.nextElementSibling; // iki sonraki child gider.

console.log(value);