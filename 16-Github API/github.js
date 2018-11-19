// Github class

class Github{

    constructor(){
        this.url = "https://api.github.com/users/";
    }


    // username göre github "repo" 'ları getirme
    async getGithubData(username){

        // Username göre ur belirleme
        const responseUser = await fetch(this.url + username);
        console.log(responseUser);

        // username "repo" lara göre
        const responseRepo = await fetch(this.url + username + "/repos");
        console.log(responseRepo);

        // User Data'yı json olarak belirleme
        const userData = await responseUser.json();

        // Repo 'yu json olarak belirleme
        const repoData = await responseRepo.json();

        // İki veriyi obje şeklinde dönmek
        return {
            user:userData,
            repo:repoData
        };
    }
}