// Currency Class

class Currency{

    constructor(firstCurrency,secondCurrency){
        this.firstCurrency = firstCurrency;
        this.secondCurrency = secondCurrency;
        this.url = "https://api.exchangeratesapi.io/latest?base=";
        this.amount = null;
    }

    exchange(){

        return new Promise((resolve,reject) => {
            fetch(this.url + this.firstCurrency)
            .then(response => response.json())
            .then(data => {

                const parity = data.rates[this.secondCurrency]; // data["rates"][this.secondCurrency];
                //console.log(parity);

                const NumberOfAmount = Number(this.amount);
                //console.log(NumberOfAmount);

                let total = parity * NumberOfAmount;
                console.log(total);

                resolve(total);
                
            })
            .catch(err => reject(err));
        });

        
    }

    changeAmount(amount){
        this.amount = amount;
    }

    changeFirstCurrency(newFirstCurrency){
        this.firstCurrency = newFirstCurrency;
    }

    changeSecondCurrency(newSecondCurrency){
        this.secondCurrency = newSecondCurrency;
    }



}