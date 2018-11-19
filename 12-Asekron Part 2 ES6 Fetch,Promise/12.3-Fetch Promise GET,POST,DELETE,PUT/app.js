class Request{

    get(url){ // GET Request
        return new Promise((resolve,reject) => {
            fetch(url)
            .then(response => response.json())  // tek satır işlemi return respose.json() 
            .then(data => resolve(data))
            .catch(err => reject(err)) 
        });
    }

    post(url,data){
        return new Promise((resolve,reject) => {
            fetch(url, {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            })
            .then(response => response.json())
            .then(data => resolve(data))
            .catch(err => reject(err))
        });
    }

    put(url,data){
        return new Promise((resolve,reject) => {
            fetch(url, {
                method: "PUT",
                body: JSON.stringify(data),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            })
            .then(response => response.json())
            .then(data => resolve("Veri Başarılı Bir Şekilde Silindi.."))
            .catch(err => reject(err))
        });
    }

    delete(url){
        return new Promise((resolve,reject) => {
            fetch(url, {
                method: "DELETE"
            })
        });
    }

}


const request = new Request();
//let albums;

// GET
request.get("https://jsonplaceholder.typicode.com/albums")
.then(albums =>  {  // data =>
    // resolve(data) albums değişkenine gelecek ve tekrara yazılacak
    //albums = data;
    console.log(albums);
})
.catch(err => console.log(err));

// console.log(albums); // Asekron durum

// POST

const albumObjPOST = {userId: 1, id: 101, title: "Beat It"};
request.post("https://jsonplaceholder.typicode.com/albums",albumObjPOST)
.then(albums => {
    console.log(albums);
})
.catch(err => console.log(err));

// PUT

const albumObjPUT = {userId: 27,title: "Napıyon"};
request.put("https://jsonplaceholder.typicode.com/albums/33",albumObjPUT)
.then(albums => {
    console.log(albums);
})
.catch(err => console.log(err));

// DELETE
request.delete("https://jsonplaceholder.typicode.com/posts/1")
.then(message => {
    console.log(message);
})
.catch(err => console.log(err));