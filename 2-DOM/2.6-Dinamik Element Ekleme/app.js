// Yeni Element Eklemek

const newLink = document.createElement("a");
console.log(newLink);

const addLocation = document.getElementsByClassName("mainDiv")[0];
console.log(addLocation);

newLink.id = "yeniLinkId";
newLink.className = "yeniLinkClass";
newLink.href = "http://www.google.com.tr";
newLink.target = "_blank";
newLink.textContent = "Google Adresine Git."

// Yazıyı mainDiv ekleme
const newText = document.createTextNode("Yeni Yazı");
addLocation.appendChild(newText);

// Link yazı ekleme
newLink.appendChild(document.createTextNode("Yeni Link Adresi"));

// mainDiv link ekleme
addLocation.appendChild(newLink);

newLink.style.marginLeft = "5px";

console.log(newLink);