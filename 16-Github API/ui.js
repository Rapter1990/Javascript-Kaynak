// UI işlemleri
class UI{
    constructor(){

        this.githubname = document.getElementById("githubname");
        this.profileDiv = document.getElementById("profile");
        this.repoDiv = document.getElementById("repos");
        this.lastUsers = document.getElementById("last-users");
        this.cardBody = document.querySelectorAll(".card-body")[0];
        console.log(this.cardBody);
    }

    clearInput(){

        this.githubname.value = "";

    }

    showUserInfo(user){
        const profileDivInformation = `
                <div class="card card-body mb-3">
                <div class="row">
                <div class="col-md-4">
                    <a href="${user.html_url}" target = "_blank">
                    <img class="img-fluid mb-2" src="${user.avatar_url}"> </a>
                    <hr>
                    <div id="fullName"><strong> ${user.name}</strong></div>
                    <hr>
                    <div id="bio">${user.bio}</div>
                    </div>
                <div class="col-md-8">
                        <button class="btn btn-secondary">
                            Takipçi  <span class="badge badge-light">${user.followers}</span>
                        </button>
                        <button class="btn btn-info">
                            Takip Edilen  <span class="badge badge-light">${user.following}</span>
                        </button>
                        <button class="btn btn-danger">
                            Repolar  <span class="badge badge-light">${user.public_repos}</span>
                        </button>
                        <hr>
                        <li class="list-group">
                            <li class="list-group-item borderzero">
                                <img src="images/company.png" width="30px"> <span id="company">${user.company}</span>
                                
                            </li>
                            <li class="list-group-item borderzero">
                                <img src="images/location.png" width="30px"> <span id = "location">${user.location}</a> 
                                
                            </li>
                            <li class="list-group-item borderzero">
                                <img src="images/mail.png" width="30px"> <span id="email">${user.email}</span>
                                
                            </li>
                            
                        </div>
                        
                        
                </div>
            </div> 
        `;

        this.profileDiv.innerHTML = profileDivInformation;
    }


    showMessage(message){

        // <div class="alert alert-danger" role="alert">
        //     This is a danger alert—check it out!
        // </div>

        const messageDiv = document.createElement("div");
        messageDiv.className = "alert alert-danger";
        messageDiv.textContent = message;

        // card-body içine ve en sona ekler
        this.cardBody.appendChild(messageDiv);

        // 2 sn sonra mesajı yok etme
        setTimeout(() =>{  // function()
            messageDiv.remove();
        },2000);
    }


    showUserRepo(repos){

    
        repos.forEach(repo => {

            const userRepo = `
        
                <div class="mb-2 card-body">
                    <div class="row">
                        <div class="col-md-2">
                        <span></span> 
                        <a href="${repo.html_url}" target = "_blank" id = "repoName">${repo.name}</a>
                        </div>
                        <div class="col-md-6">
                            <button class="btn btn-secondary">
                                Starlar  <span class="badge badge-light" id="repoStar">${repo.stargazers_count}</span>
                            </button>

                            <button class="btn btn-info">
                                Forklar  <span class="badge badge-light" id ="repoFork">${repo.forks_count}</span>
                            </button>
                    
                        </div>
                    </div>
                </div>
                `;
    
            this.repoDiv.innerHTML += userRepo;    
        });
        

    }


    // UI Username ekleme
    addUsernameToUI(username){

        let users = Storage.getSearchedUserFromStorage();

        if(Storage.isUsernameInStorage(username) === false){

            // <!-- <li class="list-group-item">asdaskdjkasjkşdjşasjd</li> -->

            const li = document.createElement("li");
            li.className = "list-group-item";
            li.textContent = username;

            this.lastUsers.appendChild(li);
        }


    }

    clearAllUsersFromUI(){

        // this.lastUsers.innerHTML = "";

        while(this.lastUsers.firstElementChild != null){
            this.lastUsers.removeChild(this.lastUsers.firstElementChild);
        }
    }
}