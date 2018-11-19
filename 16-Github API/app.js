// Elementleri seçmek

// form (github-form)
const githubForm = document.getElementById("github-form");

// input (githubname)
const githubNameInput = document.getElementById("githubname");

// button (clear-last-users)
const clearLastUsers = document.getElementById("clear-last-users");

// Son kullanıcılar (last-users)
const lastUsers = document.getElementById("last-users");

// Github class oluşturma
const github = new Github();

// UI oluşturma
const ui = new UI();


eventListeners();

function eventListeners(){

    githubForm.addEventListener("submit",getData);

    clearLastUsers.addEventListener("click",clearAllSearched);

    // Son aramaları sayfa yenilendikçe storage'dan alma
    document.addEventListener("DOMContentLoaded", getAllSearches); 

}

function getData(event){

    // Inputtan username almak
    let username = githubNameInput.value.trim();

    if(username === ""){
        alert("Lüften kullanıcı alanını boş bırakmayın!!!");
    }else{
        github.getGithubData(username)
        .then(response => {

            console.log(response.user.message);
            console.log(response["user"]["message"]);

            if(response.user.message === "Not Found"){
                // Hata Mesajı
                //console.log("Hata");
                ui.showMessage("Kullancı Bulunamadı...");
            }else{
                //console.log(response) // response.user  (user objesini), response.repo (repo objesini verir.)
                ui.showUserInfo(response.user);
                ui.showUserRepo(response.repo);

                // Bunu Storage'dan yukarı aldık ilk başata eklenip sonradan test edileceği 
                // için username storage'da bulup eklemeyecek
                ui.addUsernameToUI(username); 

                // Storage eklediğimiz username'lerini UI göstermek
                Storage.addSearchUserToStorage(username);

            }
         
           
        })  
        .catch(err => ui.showMessage(err));

    }

    // Kullanıcı Adı Alanını Temizleme
    ui.clearInput();

    // Submit edildiğinde sayfa yenilenmesi önlemek için
    event.preventDefault();

}

function clearAllSearched(){

    // Tüm Aramaları Temizleme
    if(confirm("Tüm Aramaları Silmek istediğinizden Emin Misiniz ?")){
        //console.log("Silme");

        // Storage temizleme
        Storage.clearAllUsersFromStorage();
        ui.clearAllUsersFromUI();

    }

}

function getAllSearches(){

    // Sayfa Yüklendiğinde Storage'dan tüm aramaları alma ve UI ekleme
    let users = Storage.getSearchedUserFromStorage();

    let results = "";

    users.forEach(user => {
        // <!-- <li class="list-group-item">asdaskdjkasjkşdjşasjd</li> -->
        results += `<li class="list-group-item">${user}</li>`;

    });

    lastUsers.innerHTML = results;

}