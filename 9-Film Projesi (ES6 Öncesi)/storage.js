// storage.js -> Local Storage verileri kaydetmek için
function Storage(){

}

Storage.prototype.addFilmToStorage = function(film){

    console.log(film);

    let filmsFromLocalStorage = this.getFilmsFromLocalStorage();

    /*
    
    { [title:"Title1",director:"Director1",url:"url1"] },
    { [title:"Title1",director:"Director2",url:"url2"] }
    
    */
    filmsFromLocalStorage.push(film);

    localStorage.setItem("films",JSON.stringify(filmsFromLocalStorage)); // Local Storage array ekleme
}

Storage.prototype.getFilmsFromLocalStorage =  function(){

    // Todos tanımladık
    let films ;

    // Todos daha önceden varmı yok mu diye baktık
    if(localStorage.getItem("films") === null){
        films = [];
    }else{
        films = JSON.parse(localStorage.getItem("films")); // Array Local Storage 'dan alma
    }

    return films;

}

Storage.prototype.deleteFilmFromLocalStorage = function(filmTitle){
    let films = this.getFilmsFromLocalStorage();

    films.forEach(function(film,index){
        if(film.title === filmTitle){
            films.splice(index,1);
        }
    });

    // Sildikten sonra filmlist tekrar local Storage ekleme
    localStorage.setItem("films",JSON.stringify(films)); // Local Storage array ekleme

}

        
// Tüm Filmleri Storage'dan silme
Storage.prototype.clearAllFilmsFromLocalStorage = function(){
    // Tüm filmleri "films" itemda tanımladığımız için removeItem ile onu silip local Storage'dan kaldırdık.
    localStorage.removeItem("films");
}