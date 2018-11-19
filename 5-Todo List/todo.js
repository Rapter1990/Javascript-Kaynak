// Todo List Oluşturma

// GetElementById ve querySelector arasındaki fark (birden fazla ise )
// GetElementById elementin tüm özellikerini getiriyor (Collection yapıdaysa) querySelector'da sadece bir tane elementi getiriyor.
// GetElementById veya Class Name'de sonuna [0] eklememiz gerekir.

const form = document.getElementById("todo-form"); // document.querySelector("#todo-form");
//console.log(form);
const todoInputField = document.getElementById("todo"); // document.querySelector("#todo");
//console.log(todoInputField);

// getElementsByClassName yazdığımızda appendChild bulunamadığından querySelector yazdık
const todoList = document.getElementsByClassName("list-group")[0]; //document.querySelector(".list-group"); 
//console.log(todoList);

// 2 tane card-body bunlardan 2sini ayrı ayrı seçeceğiz
const firstCardBody = document.querySelectorAll(".card-body")[0];
//console.log(firstCardBody);
const secondCardBody = document.querySelectorAll(".card-body")[1];
//console.log(secondCardBody);

const filterField = document.getElementById("filter");
//console.log(filterField);
const clearTodoListLinkButton = document.getElementById("clear-todos");
//console.log(clearTodoListLinkButton);

// tüm event listenerları çağırma
eventListeners();


function eventListeners(){
    // form submit olayı
    form.addEventListener("submit",function(event){

        var newtodoValue = todoInputField.value.trim(); // trim() string başında ve sonundaki boşlukları atar.

        console.log(newtodoValue);

        if(newtodoValue === ""){

            // hata mesajı verme
            showAlert("danger","Lüften bir todo giriniz...");
        }else{
            addTodoList(newtodoValue);

            // Local Storage todo ekleme
            addTodoToLocalStorage(newtodoValue);

            // mesaj gönderildi verme
            showAlert("success","Todo Listeye başarılı bir şekilde eklendi.");
        }

        // Submit olduğunda kendi sayfaya gitmeyi engellemek için 
        event.preventDefault();
    });

    // String list-item olarak eklemek
    function addTodoList(newtodoValue){

        /* <li class="list-group-item d-flex justify-content-between">
                            Todo 1
                            <a href = "#" class ="delete-item">
                                <i class = "fa fa-remove"></i>
                            </a>

                        </li>*/

        // Yukarıdakş yapıyı kurmamız gerekiyor.

        // List item oluşturma(li)
        var listItem = document.createElement("li");
        listItem.className = "list-group-item d-flex justify-content-between";

        // Delete Linkini oluşturma (a)
        var listItemDeleteLink = document.createElement("a");
        listItemDeleteLink.href = "#"
        listItemDeleteLink.className = "delete-item";
        listItemDeleteLink.innerHTML = "<i class = 'fa fa-remove'></i>";

        // Todo (String yazıyı) li'nin içine child olarak ekleme
        listItem.appendChild(document.createTextNode(newtodoValue));

        // li'nin içine linki ekleme
        listItem.appendChild(listItemDeleteLink);

        // todo item todoList ekleme
        todoList.appendChild(listItem);

        // Eklendikten sonra input alanını boşaltma
        todoInputField.value = "";

        //console.log(listItem);

    }

    // Bildiri Mesajlarını gösterme
    function showAlert(type,message){

        /*<div class="alert alert-danger">
                <strong>Danger!</strong> Indicates a dangerous or potentially negative action.
        </div>*/


        var alertDiv = document.createElement("div");

        // Back tick alt gr + noktalı virgül işareti
        alertDiv.className = `alert alert-${type}`;

        alertDiv.textContent = message;

        console.log(alertDiv);

        // ilk card body alert ekleme
        firstCardBody.appendChild(alertDiv);

        // hata mesajını belirli bir sn sonra kaldırma
        setTimeout(function(){
            alertDiv.remove();
        },1000);

    }

    // Local Storage Ekleme
    function addTodoToLocalStorage(newtodoValue){

        var todos = getTodosFromLocalStorage();

        todos.push(newtodoValue);

        localStorage.setItem("todos",JSON.stringify(todos)); // Local Storage array ekleme

    }

    // Local Storage'dan todos Alma
    function getTodosFromLocalStorage(){

         // Todos tanımladık
         var todos ;

         // Todos daha önceden varmı yok mu diye baktık
         if(localStorage.getItem("todos") === null){
             todos = [];
         }else{
             todos = JSON.parse(localStorage.getItem("todos")); // Array Local Storage 'dan alma
         }

         return todos;

    }

    // DOMContentLoaded -> Sayfa yüklemesi bittikten sonra çalışacak 
    // Sayfa Yenilendiğinde todos lar local Storage'dan verileri alacak
    document.addEventListener("DOMContentLoaded",loadAllTodosToUI);

    function loadAllTodosToUI(){

        var todos = getTodosFromLocalStorage();

        todos.forEach(function(todo){
            addTodoList(todo);
        });

    }

    // Todo 'ları silmek
    // ikinci card Body silme işlemi yapılacak
    secondCardBody.addEventListener("click",deleteTodo);

    function deleteTodo(event){

        //console.log(event.target);

        if(event.target.className === "fa fa-remove"){
            //console.log("Silme İşlemi");

            // Silme işleminde li bulmak için i - > a -> li yöntemiyle parent bulaşmamız gerekir.
            event.target.parentElement.parentElement.remove();
            deleteTodoFromLocalStorage(event.target.parentElement.parentElement.textContent);
            showAlert("success","Todo Silme işlemi gerçekleşti.");
        }

    }


    // Local Storage'dan todo silme
    function deleteTodoFromLocalStorage(todo){

        var todos = getTodosFromLocalStorage();

        todos.forEach(function(deleteTodo,index){
            if(deleteTodo === todo){
                todos.splice(index,1); // Array'den bir tane sileceğimiz için 1 yazdık.
            }
        });

        // Sildikten sonra todolist tekrar local Storage ekleme
        localStorage.setItem("todos",JSON.stringify(todos)); // Local Storage array ekleme
    }


    // Todo'ları Filtreleme
    filterField.addEventListener("keyup",filterTodos);  // keypress,keydown veya keyup kullanabiliriz.

    function filterTodos(event){
        //console.log(event.target.value);

        // Aranan kelimenin hepsini küçük harfe çevirme
        var filterValue = event.target.value.toLowerCase();

        // Tüm listeyi çekme
        var listItems = document.querySelectorAll(".list-group-item");

        // listItems üzerinde geçirme
        listItems.forEach(function(listItem){

            // Tüm itemları küçük harf yapma
            var text = listItem.textContent.toLowerCase();

            //console.log(text);

            if(text.indexOf(filterValue) == -1){
                listItem.setAttribute("style","display: none !important"); // Bootstrap özelliğini değil display none özelliği kullanmak için !important yaptık. 
            }else{
                listItem.setAttribute("style","display: block");
            }

        });
    }


    // Tüm todosları listeden silme
    clearTodoListLinkButton.addEventListener("click",deleteAllTodos);

    function deleteAllTodos(){

        if(confirm("Tüm todosları silmek istediğinizden emin misiniz?")){
            //todoList.innerHTML = "";  // removeChild göre biraz yavaş

            // removeChild ve firstElementChild göre yap
            while(todoList.firstElementChild != null){
                todoList.removeChild(todoList.firstElementChild);
            }

            // Tüm todosları "todos" itemda tanımladığımız için removeItem ile onu silip local Storage'dan kaldırdık.
            localStorage.removeItem("todos");

        }

    }

}


