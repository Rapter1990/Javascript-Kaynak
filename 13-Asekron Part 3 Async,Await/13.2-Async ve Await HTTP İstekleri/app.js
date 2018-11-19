// Async await => GET, POST , PUT , DELETE

class Request{

    async get(url){ // GET Request
        
        let response = await fetch(url); // Response Object

        let data = await response.json(); // JSON Object

        return data;
    }

    async post(url,data){

        let response = await fetch(url, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }); // Response Object

        let responsedata = await response.json(); // JSON Object

        return responsedata;
    }

    async put(url,data){

        let response = await fetch(url, {
            method: "PUT",
            body: JSON.stringify(data),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }); // Response Object

        let responsedata = await response.json(); // JSON Object

        return responsedata;

    }

    async delete(url){

        let response = await fetch(url, {
            method: "DELETE"
            
        }); // Response Object
        
        let message = "Veri Silme işlemi başarılı bir şekilde tamamlandı..."
        return message;

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