// ui.js -> Arayüz işlemlerini gerçekleştirmek

// ES6
class UI{

    static addToFilm(newFilm){

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

    static clearAllInputs(inputTitleField,inputDirectorField,inputUrlField){
        inputTitleField.value = "";
        inputDirectorField.value = "";
        inputUrlField.value = "";
    }

    static displayMessage(message,type){

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

    static loadAllFilms(films){

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

    static deleteFilmFromUI(selectedfilmTarget){
        selectedfilmTarget.parentElement.parentElement.remove();
    }

    static clearAllFilmsFromUI(){
        const filmList = document.querySelector("#films");
    
        // 1. Yöntem (Yavaş Çalışır..)
        //filmList.innerHTML = "";
    
        console.log(filmList.firstElementChild);
    
        // removeChild ve firstElementChild göre yap
        while(filmList.firstElementChild != null){
            filmList.removeChild(filmList.firstElementChild);
        }
    
    }

}