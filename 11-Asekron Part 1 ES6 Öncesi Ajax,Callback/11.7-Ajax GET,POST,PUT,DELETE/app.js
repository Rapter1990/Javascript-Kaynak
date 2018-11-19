// Ajax GET,POST,PUT,DELETE

class Request {

    constructor(){
        this.xhttp = new XMLHttpRequest();
    }

    // Get Request
    // Asekron yönteminden kurtulmak için callback çağır
    get(url,callback){

        //const temp = this; // Request Objesini gösterme (1.Yol)

        // Bağlantı açma ve request belirleme (Bilgiyi alacağımız için "GET" requesti kullandık.)
        this.xhttp.open("GET",url); 

        // this.xhttp.onload = function(){

        //     // this -> XMLHttpRequest gösterdiği için this.xhttp diyerek tekrar XMLHttpRequest ulaşmaya çalışıyoruz.
        //     // this -> Request göstermesi çin temp olarak bir değişkende tutmamız lazım.
        //     //console.log(this);

        //     // 1. Yol
        //     // console.log(temp);
            
        //     // if (temp.xhttp.readyState === 4 && temp.xhttp.status === 200) {
        //     //     console.log(temp.xhttp.responseText);
        //     // }

        //     // 2.Yol Bind this tanımlayarak Request sınıfı alma (.bind(this))
        //     if (this.xhttp.readyState === 4 && this.xhttp.status === 200) {
        //         console.log(this.xhttp.responseText);
        //     }    

        // }.bind(this);

        // 3.Yol arrow Function kullanma
        this.xhttp.onload = () => {
            if (this.xhttp.readyState === 4 && this.xhttp.status === 200) {
                //console.log(this.xhttp.responseText);

                // albumleri çağırdığı yere gönderecek (function(err,albumResponseText))
                // Hata durumu için bir parametre daha tanımladık
                // Hata olmadığı için "null" tanımladık (hata mesajı null)
                callback(null,this.xhttp.responseText); 
            }else{
                // Hata Durumu
                // Dönen Değer olmadığı için null
                callback("Get Request : Hata meydana geldi",null); 
            }    
        }

        // request gönderme
        this.xhttp.send();
    }


    // Post Request 
    post(url,data,callback){

        // Bağlantı açma ve request belirleme (Bilgiyi alacağımız için "GET" requesti kullandık.)
        this.xhttp.open("POST",url); 

        //Json Verisi ve utf-8 destekleme
        this.xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

        this.xhttp.onload = () => {
            if (this.xhttp.readyState === 4 && this.xhttp.status === 201) {
                
                // albumleri çağırdığı yere gönderecek (function(err,albumResponseText))
                // Hata durumu için bir parametre daha tanımladık
                // Hata olmadığı için "null" tanımladık (hata mesajı null)
                callback(null,this.xhttp.responseText); 
            }else{
                
                // Hata Durumu
                // Dönen Değer olmadığı için null
                callback("POST Request : Hata meydana geldi",null); 
            }    
        }

        // request gönderme(Veri gönderdiğimiz için)
        this.xhttp.send(JSON.stringify(data));

    }

    // Put Request 
    put(url,data,callback){

        // Bağlantı açma ve request belirleme (Bilgiyi alacağımız için "GET" requesti kullandık.)
        this.xhttp.open("PUT",url); 

        //Json Verisi ve utf-8 destekleme
        this.xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

        this.xhttp.onload = () => {
            if (this.xhttp.readyState === 4 && this.xhttp.status === 200) {
                
                // albumleri çağırdığı yere gönderecek (function(err,albumResponseText))
                // Hata durumu için bir parametre daha tanımladık
                // Hata olmadığı için "null" tanımladık (hata mesajı null)
                callback(null,this.xhttp.responseText); 
            }else{
                
                // Hata Durumu
                // Dönen Değer olmadığı için null
                callback("PUT Request : Hata meydana geldi",null); 
            }    
        }

        // request gönderme(Veri gönderiyoruz güncellemek için)
        this.xhttp.send(JSON.stringify(data));

    }

     // Delete Request 
     delete(url,callback){

        // Bağlantı açma ve request belirleme (Bilgiyi alacağımız için "GET" requesti kullandık.)
        this.xhttp.open("DELETE",url); 

        //Json Verisi ve utf-8 destekleme
        this.xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

        this.xhttp.onload = () => {
            if (this.xhttp.readyState === 4 && this.xhttp.status === 200) {
                
                // albumleri çağırdığı yere gönderecek (function(err,albumResponseText))
                // Hata durumu için bir parametre daha tanımladık
                // Hata olmadığı için "null" tanımladık (hata mesajı null)
                callback(null,"Veri Silme Gerçekleşti"); 
            }else{
                
                // Hata Durumu
                // Dönen Değer olmadığı için null
                callback("DELETE Request : Hata meydana geldi",null); 
            }    
        }

        // request gönderme
        this.xhttp.send();

    }

}


const request = new Request();
//const album = request.get("https://jsonplaceholder.typicode.com/albums");

//console.log(album); // Asekron işlem olduğundan ilk başta burası çalıştı sonra get methodunu çağırdı.

// Tüm Verileri Getirme
request.get("https://jsonplaceholder.typicode.com/albums",function(err,albumResponseText){

    if(err === null){
        console.log(albumResponseText);
    }else{
        console.log(err);
    }

});


// Id'si 34 olanı getirme
request.get("https://jsonplaceholder.typicode.com/albums/34",function(err,albumResponseText){

    if(err === null){
        console.log(albumResponseText);
    }else{
        console.log(err);
    }

    
});

// Veri Ekleme
let newAlbumData = {
    "userId": 4,
    "title": "Beat It"
}

request.post("https://jsonplaceholder.typicode.com/albums",newAlbumData,function(err,albumResponseText){

     if(err === null){
         console.log(albumResponseText);
     }else{
         console.log(err);
     }

});

// Veri Güncelleme
let changeAlbumData = {
    "userId": 15,
    "title": "üğşçöı"
}

request.put("https://jsonplaceholder.typicode.com/albums/15",changeAlbumData,function(err,albumResponseText){

     if(err === null){
         console.log(albumResponseText);
     }else{
         console.log(err);
     }

});

// Id'si 20 olanı silme
request.delete("https://jsonplaceholder.typicode.com/albums/20",function(err,albumResponseText){

    if(err === null){
        console.log(albumResponseText);
    }else{
        console.log(err);
    }

});