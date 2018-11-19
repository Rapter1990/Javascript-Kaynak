// Prototype, ajax , callback

addEventListener();

function addEventListener(){

    // Form alanını tanımladık
    const submitFormArea = document.getElementById("translate-form"); // document.querySelector("#translate-form")
    //console.log(submitFormArea);

    // Language select işlemini onchange göre yaptık
    const langSelect = document.getElementById("language"); // document.querySelector("#language")

    // Translate objesi oluşturduk
    const translate = new Translate(document.getElementById("word").value,langSelect.value);

    // UI objesi oluşturduk
    const ui = new UI();

    // submit olayını ekleme
    submitFormArea.addEventListener("submit",translateWordtoSelectedLanguage);

    // Seçilene göre (select) language göstermek için onchange kullanıdık
    langSelect.onchange = function(){
        ui.changeUI();
    };
    

    // translateWordtoSelectedLanguage fonksiyonu
    function translateWordtoSelectedLanguage(event){

        translate.changeParameter(document.getElementById("word").value,document.getElementById("language").value);

        translate.translateWord(function(err,response){
            if(err){
                // Hata
            }else{
                console.log(response);
                ui.displayTranslate(response);
            }
        });

        // Sayfa yenilemeyi engellemek için tanımladık
        event.preventDefault();
    }

}