function getTextFile(){
    
    //console.log(this);
    fetch("example.txt")
    .then(response => {
        //console.log(response);
        return response.text();
    })
    .then(data => console.log(data))
    .catch(err => console.log(err));
}

function getJSONFile(){

    fetch("employees.json")
    .then(response => {
        //console.log(response);
        return response.json();
    })
    .then(data => console.log(data))
    .catch(err => console.log(err));
}


function getExternalURL(){

    fetch("https://api.exchangeratesapi.io/latest")
    .then(response => {
        //console.log(response);
        return response.json();
    })
    .then(data => console.log(data.rates.TRY))
    .catch(err => console.log(err));

}

// Text Dosyaları için
getTextFile();


// JSON file için
getJSONFile();

// URL için
getExternalURL();