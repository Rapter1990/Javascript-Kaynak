// Session Storage : Oturum açık kaldığı sürece veriler kayıtlı halde olacak.
// Sekmeyi kapattığımızda veriler gidecek

//console.log(window);

// Buttonları seçtik

const addButton = document.getElementById("add");
const deleteButton = document.getElementById("delete");
const clearButton = document.getElementById("clear");

// Input Alanlarını Seçmek

const addkey = document.getElementById("addkey");
const addvalue = document.getElementById("addvalue");
const deletekey = document.getElementById("deletekey");

// Buttonlara event tanımladık
addButton.addEventListener("click",addItem);
deleteButton.addEventListener("click",deleteItem);
clearButton.addEventListener("click",clearItem);

// Fonksiyonları tanımmladık

// Anahtar değeri ekleme
function addItem(event){
    sessionStorage.setItem(addkey.value,addvalue.value);
}

// Girilen anahtar değerini silme
function deleteItem(event){
    sessionStorage.removeItem(deletekey.value);
}

// Tüm değerleri silme
function clearItem(event){
    sessionStorage.clear();
}