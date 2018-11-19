// UI objesini belirleme
function UI(){

    // İngilizce onun resmi (outputImage,outputLanguage)  ve sonuç (outputWord)
    this.outputImage = document.getElementById("outputImage"); // document.querySelector("#outputImage");
    this.outputLanguage = document.getElementById("outputLanguage"); // document.querySelector("#outputLanguage");
    this.outputWord = document.getElementById("outputWord"); // document.querySelector("#outputWord");

    // Language Seçim Listesi 
    this.languageList =  document.getElementById("language"); // document.querySelector("#language");

}

// UI Değişikleri belirleme 
UI.prototype.changeUI = function(){

    // Arayüz Değiştir
    this.outputImage.src = `images/${this.languageList.value}.png`;

    this.outputLanguage = this.languageList.options[this.languageList.selectedIndex].textContent;

    //console.log(this.languageList);
    console.log(this.languageList.options[this.languageList.selectedIndex].textContent); // .textContent 

}

// UI 'da displayTranslate
UI.prototype.displayTranslate = function(word){
    this.outputWord.innerHTML = word; // innerHTML veya textContent
    //console.log(this.outputWord.innerHTML);
    //console.log(this.outputWord.textContent);
}