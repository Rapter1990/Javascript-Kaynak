// Ajax Text İşlemleri 

// HTTP STATUS
// 200: OK
// 403: Forbidden
// 404: Not Found
// 505: Internal Server Error

// readyState	Holds the status of the XMLHttpRequest.
// 0: request not initialized 
// 1: server connection established
// 2: request received 
// 3: processing request 
// 4: request finished and response is ready


// Buuton Seçme
const ajaxButton = document.getElementById("btn"); // document.querySelector("#btn");
//console.log(ajaxButton);

// click eventini button ekleme
ajaxButton.addEventListener("click",displayMessage);

function displayMessage(event){

    // XMLHttpRequest oluşturma
    var xhttp = new XMLHttpRequest();
    console.log(xhttp); // status -> HTTP status  // readyState -> serverla bağlanma

    // readyState değişince bu fonksiyon çalışacak (Du durumda tek tek durumları kontrol ediyoruz)
    // xhttp.onreadystatechange = function() {

    //     console.log(this.readyState); // 1,2,4,4

    //     // readyState 1 olduğunda bağlantıyı kurduğumuz için ilk başta 0 , sonraki 2,3,4 değerleri için 200
    //     console.log(this.status); 

    //     if (this.readyState == 4 && this.status == 200) {
    //         console.log(this.responseText);
    //         const displayMessageFieid = document.getElementById("displayMessage"); // document.querySelector("#displayMessage");
    //         displayMessageFieid.innerHTML = this.responseText;
    //     }
    //   };

    // Tek tek kontrol etmektense fonksiyon hazır olduğunda ( 4 olduğunda ) çalışması için "onload" kullandık
    xhttp.onload = function(){
        //console.log(this.readyState);
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
            const displayMessageFieid = document.getElementById("displayMessage"); // document.querySelector("#displayMessage");
            displayMessageFieid.innerHTML = this.responseText;
        }
    }

    // Bağlantı açma ve request belirleme (Bilgiyi alacağımız için "GET" requesti kullandık.)
    xhttp.open("GET","example.txt",true); // true işlemi bunun aksekron olğunu gösterir.

    // request gönderme
    xhttp.send();
}