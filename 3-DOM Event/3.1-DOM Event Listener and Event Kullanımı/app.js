let element;

const inputElement = document.getElementById("inputId");
const formElement = document.getElementById("formId");

element = inputElement;

console.log(element);

// onfocus -> tıkladığında mesaj verecek
// inputElement.onfocus = function() {
//     console.log("Tıklandı...");
// };

inputElement.addEventListener("focus",function(e){
    console.log(e);
    console.log(e.type); // type gösterir (focus)
    console.log(e.target); //  input tag  gösterir.
    console.log(e.target.placeholder); // placeholder gösterir.
    console.log(e.target.className); // className
    console.log("Naber");
});


formElement.addEventListener("submit",submitProcess);

function submitProcess(e){
    console.log("Submit Edildi.");

    e.preventDefault();
}
