// project.js -> Projenin ana dosyası

// film-form seçme
const filmForm = document.getElementById("film-form");
//console.log(filmForm);

// title input alanını seçme
const filmTitle = document.getElementById("title"); //document.querySelector("#title"); 
//console.log(filmTitle);

// director input alanını seçme
const filmDirector = document.getElementById("director"); //document.querySelector("#director"); 
//console.log(filmDirector);

// url input alanını seçme
const filmUrl = document.getElementById("url"); //document.querySelector("#url"); 
//console.log(filmUrl);

// Silme İşlemi için ikinci card-body seçtik
const cardBodyDelete = document.querySelectorAll(".card-body")[1];

// Tüm Filmleri Silme için a link elde ettik
const clearAllFilms = document.getElementById("clear-films"); //document.querySelector("#clear-films");  
// console.log(clearAllFilms);



// Tüm event Listener çağırmak için fonksiyon oluşturduk.
eventListeners();

function eventListeners(){

    // Film ekleme işlemi
    filmForm.addEventListener("submit",addFilm);

    // Sayfa yenilendiğinde filmleri yükleme
    document.addEventListener("DOMContentLoaded",loadAllFilmsToUI);

    // Silme işlemi
    cardBodyDelete.addEventListener("click",deleteFilm);

    // Tüm Filmleri silme işlemi
    clearAllFilms.addEventListener("click",deleteAllFilms);

    function addFilm(event){
        
        // Inputlardaki verileri aldık
        let filmTitleInput = filmTitle.value;
        let filmDirectorInput = filmDirector.value;
        let filmUrlInput = filmUrl.value;

        // Veriler var mı yok mu diye kontrol etme
        if(filmTitleInput === "" || filmDirectorInput === "" || filmUrlInput === ""){
            // hata mesajı
            UI.displayMessage("Tüm Alanları Doldurunuz...","danger");
        }else{

            //  Film objesini oluşturma
            let film = new FilmES6(filmTitleInput,filmDirectorInput,filmUrlInput);

            // ui (arayüz film ekleme)
            UI.addToFilm(film);

            // film local storage ekleme
            Storage.addFilmToStorage(film);

            UI.displayMessage("Film Eklenmiştir","success");
        }



        // Tüm Input Alanlarını Temizleme
        UI.clearAllInputs(filmTitle,filmDirector,filmUrl);

        // Sayfa yenilemeyi engellemek için tanımaldık
        event.preventDefault();
    }


    // Sayfa yenilendiğinde tüm filmerli yükleme
    function loadAllFilmsToUI(){
        
        let films = Storage.getFilmsFromLocalStorage();

        UI.loadAllFilms(films);

    }

    function deleteFilm(event){

        //console.log(event.target);

        if(event.target.id === "delete-film"){
            //console.log("Silme İşlemi");

            // Silme işleminde li bulmak için a - > td -> tr yöntemiyle parent bulaşmamız gerekir.
            UI.deleteFilmFromUI(event.target);

            console.log(event.target.parentElement.previousElementSibling.previousElementSibling.textContent);

            // Film silme (Film adından)
            Storage.deleteFilmFromLocalStorage(event.target.parentElement.previousElementSibling.previousElementSibling.textContent);

            UI.displayMessage("Film başarılı birşekilde silinmiştir...","success");
        }

    }

    // Tüm filmleri silme
    function deleteAllFilms(event){
        if(confirm("Tüm Filmleri silmek istediğinizden emin misiniz?")){
            UI.clearAllFilmsFromUI();
            Storage.clearAllFilmsFromLocalStorage();
        }
    }

}