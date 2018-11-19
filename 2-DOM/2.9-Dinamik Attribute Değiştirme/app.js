let element;

const liElement = document.getElementById("li1");

element = liElement; // liElement gösterme
element = liElement.classList; // class listesini gösterme

liElement.className = "yeniliElementClass";  // yeniliElementClass adında class tanımladık
liElement.classList.add("eklenenYeniliElementClass");
liElement.classList.add("deneme");
liElement.classList.remove("deneme");

element = liElement; // liElement gösterme

element = liElement.placeholder; // input olsaydı placeholder getirme
element = liElement.getAttribute("placeholder");
element = liElement.setAttribute("placeholder","Placeholder tanımlandı.");
element = liElement.setAttribute("title","Yeni baslik");

element = liElement; // liElement gösterme

element = liElement.hasAttribute("required"); // var mı yok mu diye kontrol etme
element = liElement.hasAttribute("placeholder"); // var mı yok mu diye kontrol etme

element = liElement; // liElement gösterme

element = liElement.removeAttribute("placeholder"); // placeholder kaldırma

element = liElement; // liElement gösterme

console.log(element);