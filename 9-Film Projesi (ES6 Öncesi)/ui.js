// ui.js -> Arayüz işlemlerini gerçekleştirmek

function UI(){

}

// UI 'da belleği daha verimli şekilde kullanmak için methodları prototype ekleme
UI.prototype.addToFilm = function(newFilm){


    //console.log(newFilm);

    // Filmi Arayüz eklemek için bu yapıyı oluşturmak gerekir.
    /* 

    <tr>
            <td><img src="" class="img-fluid img-thumbnail"></td>
            <td></td>
            <td></td>
            <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
    </tr> 

    */

    // tdbody films seç
    const filmList = document.querySelector("#films"); //document.getElementById("films"); 
    console.log(filmList);

    // Literal yapıyı kullama yapıyı oluşturma
    const filmAdding = `
    
    <tr>
        <td><img src="${newFilm.url}" class="img-fluid img-thumbnail"></td>
        <td>${newFilm.title}</td>
        <td>${newFilm.director}</td>
        <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
    </tr> 
    
    
    `;


    // innerHtml ile ekleme
    filmList.innerHTML +=  filmAdding;
    
}


// Inputları temizleme
UI.prototype.clearAllInputs = function(inputTitleField,inputDirectorField,inputUrlField){
    inputTitleField.value = "";
    inputDirectorField.value = "";
    inputUrlField.value = "";
}


// Mesaj Verme (Hata Başarılı)
UI.prototype.displayMessage = function(message,type){

    // ilk card-body içerisine mesajı ekleme
    
    // ilk card-body seçme
    const cardBody = document.querySelectorAll(".card-body")[0];
    console.log(cardBody);
    // Div oluşturma
    /*

    <div class="alert alert-primary" role="alert">
        This is a primary alert—check it out!
    </div>

    */

    const divMessage = document.createElement("div");

    divMessage.className = `alert alert-${type}`;
    divMessage.textContent = message;


    // cardBody div ekleme
    cardBody.appendChild(divMessage);

    // 1 sn sonra messajı yok etme
    setTimeout(function(){
        divMessage.remove();
    },1000);

}

UI.prototype.loadAllFilms = function(films){

    const filmList = document.querySelector("#films");

    films.forEach(function(newFilm){
        const filmAdding = `
    
        <tr>
            <td><img src="${newFilm.url}" class="img-fluid img-thumbnail"></td>
            <td>${newFilm.title}</td>
            <td>${newFilm.director}</td>
            <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
        </tr> 
        
        `;
        // innerHtml ile ekleme
        filmList.innerHTML +=  filmAdding;
    });

}

// Film Silme
UI.prototype.deleteFilmFromUI = function(selectedfilmTarget){
    selectedfilmTarget.parentElement.parentElement.remove();
}


// Tüm Filmleri silme
UI.prototype.clearAllFilmsFromUI = function(){
    const filmList = document.querySelector("#films");

    // 1. Yöntem (Yavaş Çalışır..)
    //filmList.innerHTML = "";

    console.log(filmList.firstElementChild);

    // removeChild ve firstElementChild göre yap
    while(filmList.firstElementChild != null){
        filmList.removeChild(filmList.firstElementChild);
    }

}

