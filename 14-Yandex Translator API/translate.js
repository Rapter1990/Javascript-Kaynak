// translate word işlemi
function Translate(word,language){

    this.API = "trnsl.1.1.20181112T105756Z.f7dca1d3b4077873.b22f5bf6a477e96d34f2ebcfca5f312309c951f2";
    this.word = word;
    this.language = language;

    // xhttp objesini oluşturduk
    this.xhttp = new XMLHttpRequest(); 

}

// Translate prototype method ekleyeceğiz ve buna callback diyerek translateWordtoSelectedLanguage yakalama
// Arrow function oalrak yaparsak "bind(this)" "this" -> window objesinde arayacak o yüzden
// prototype'lerde arrow function kullanmamız gerekir "this" kullanmak istiyorsak.
Translate.prototype.translateWord = function(callback){
    
    // Ajax işlemleri

    // Template Literal kullandık
    const endPoint = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${this.API}&text=${this.word}&lang=${this.language}`;

    // GET methoduyla url alma
    this.xhttp.open("GET",endPoint);

    this.xhttp.onload = () => {
        if (this.xhttp.readyState === 4 && this.xhttp.status === 200) {
            
            const json = JSON.parse(this.xhttp.responseText);
            const text = json.text[0];
            callback(null,text);

        }else{
            console.log("Hata",null);
        }    
    }

    // request gönderme
    this.xhttp.send();

}

// Çevirme işleminde word ve language değişeceği için prototype'nin içine method yazdık
Translate.prototype.changeParameter = function(newWord,newLanguage){
    this.word = newWord;
    this.language = newLanguage;
}