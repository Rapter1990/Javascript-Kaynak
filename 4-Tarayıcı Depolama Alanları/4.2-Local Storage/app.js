// Local Storage

// Key value değeri depolama 
// ister local storage tarafından ister javascript tarafından silinebilir.
// Brower kapattığımızda local storage daki veriler gitmez.

// setItem : item ekleme
// localStorage.setItem("hareket","biceps");
// localStorage.setItem("tekrar",50); // 50 int -> string çeviriyor

// getItem : item al (50 değerin String olduğunu göstermek için)
// const tekrarValue = localStorage.getItem("tekrar");
// console.log(tekrarValue);
// console.log(typeof tekrarValue);


// Local Storage temizleme (clear)
//localStorage.clear();

localStorage.setItem("hareket","biceps");
localStorage.setItem("tekrar",50);

// Değer var mı yok mu diye kontrol etmek için
if(localStorage.getItem("sport")==null){
    console.log("Sorguladığınız değer bulunmamaktadır.");
}else{
    console.log("Sorguladığınız veri bulunmaktadır.");
}


// Local Storage Array ekleme
//const todos = ["Todo 1","Todo 2","Todo 3","Todo 4"];

// localStorage.setItem("todos",todos);

// Değerleri gösterme
// console.log(localStorage.getItem("todos"));

// Türünü gösterme
// console.log(typeof localStorage.getItem("todos"));


// String olarak çıktığı için bu array çevirmek için
// localStorage.setItem("todos",JSON.stringify(todos)); 

// const value = JSON.parse(localStorage.getItem("todos"));
// console.log(value);
// console.log(typeof value);


const form = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo");

form.addEventListener("submit",function run(event){   // function (event)

    const value = todoInput.value;

    // Todos tanımladık
    var todos ;

    // Todos daha önceden varmı yok mu diye baktık
    if(localStorage.getItem("todos") === null){
        todos = [];
    }else{
        todos = JSON.parse(localStorage.getItem("todos")); // Array Local Storage 'dan alma
    }

    todos.push(value);

    localStorage.setItem("todos",JSON.stringify(todos)); // Local Storage array ekleme

    // Submit olduğunda kendi sayfaya gitmeyi engellemek için 
    event.preventDefault();
});