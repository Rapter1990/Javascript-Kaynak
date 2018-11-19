// Storage Class
class Storage{



    static getSearchedUserFromStorage(){
        // Tüm Kullanıcılar

        let users;

        // Daha önceden veri yoksa
        if(localStorage.getItem("searched") === null){
            users = [];
        }else{
            users = JSON.parse(localStorage.getItem("searched"));
        }

        return users;
    }

    static addSearchUserToStorage(username){
        // Kullanıcı Ekleme

        let users = this.getSearchedUserFromStorage();

        
        if(this.isUsernameInStorage(username) === false){ // username local storage yoksa  // indexOf === -1 yaparakta yapılabilir.
            users.push(username);
        }

        // local Storage ekleme
        localStorage.setItem("searched",JSON.stringify(users));


    }

    static clearAllUsersFromStorage(){
        // Tüm Kullanıcıları Silme
        localStorage.removeItem("searched");

    }


    static isUsernameInStorage(searchUsername){
        let users = this.getSearchedUserFromStorage();
        let result = false;
        console.log(users);
        users.forEach(username => {
            if (username === searchUsername) {
                result = true;
            }
        });
        return result;
    }

}