// Element Değiştirme (Replace)

const mainDiv = document.querySelector(".mainDiv");
console.log(mainDiv);

// Yeni Element Oluşturma
const newElement = document.createElement("h3");
newElement.id = "h3Id";
newElement.className = "h3Class";
newElement.textContent = "h3 Yazısı";

// Eski Elementi seçme
const oldElement = document.querySelector(".drinkClass");
console.log(oldElement);

mainDiv.replaceChild(newElement,oldElement);

