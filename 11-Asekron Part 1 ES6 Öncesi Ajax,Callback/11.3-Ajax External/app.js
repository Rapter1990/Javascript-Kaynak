// Ajax Externel İşlemi (Internetten değer alma)

// change button belirledik
const euroCurrencyExhangeButton = document.getElementById("change");  // document.querySelector("#change");

// click olayını ekleme
euroCurrencyExhangeButton.addEventListener("click",euroCurrencyExchange);

function euroCurrencyExchange(event){

     // XMLHttpRequest oluşturma
     let xmlhttp = new XMLHttpRequest();

     // Employee JSON dosyası
     let euroCurrencyExternalAPI = "https://api.exchangeratesapi.io/latest"; 

    // "onreadystatechange" yerine "onload" kullandık.
    xmlhttp.onload = function(){
        
        let responceEuroCurrencyText = JSON.parse(this.responseText);
        let tryValueFromEuro = responceEuroCurrencyText.rates.TRY;
        console.log(tryValueFromEuro);    
        console.log(typeof tryValueFromEuro);

        // euro amount alanını belirleme
        let euroField = document.querySelector("#amount");
        let euroFieldValue = Number(euroField.value);
        console.log(euroFieldValue);    

        // tl input alanını belirleme
        let tlField = document.querySelector("#tl"); // document.getElementById("tl");
        
        tlField.value = euroFieldValue * tryValueFromEuro;

    }

    // Bağlantı açma ve request belirleme (Bilgiyi alacağımız için "GET" requesti kullandık.)
    xmlhttp.open("GET", euroCurrencyExternalAPI, true);

    // request gönderme
    xmlhttp.send();

}
