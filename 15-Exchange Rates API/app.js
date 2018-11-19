// Element Seçimleri (amount,firstCurrency,secondCurrency)
const amount = document.querySelector("#amount");
const firstCurrency = document.querySelector("#firstCurrency");
const secondCurrency = document.querySelector("#secondCurrency");

// Const olarak USD ve TRY tanımladık
const currency = new Currency("USD","TRY");

const ui = new UI(firstCurrency,secondCurrency);

eventListeners();

function eventListeners(){

    amount.addEventListener("input",exchangeCurrency);

    firstCurrency.onchange = function(){
        console.log(firstCurrency.options[firstCurrency.selectedIndex].textContent);
        currency.changeFirstCurrency(firstCurrency.options[firstCurrency.selectedIndex].textContent);
        ui.changeFirstCurrencyOutPut();
    }

    secondCurrency.onchange = function(){
        console.log(secondCurrency.options[secondCurrency.selectedIndex].textContent);
        currency.changeSecondCurrency(secondCurrency.options[secondCurrency.selectedIndex].textContent);
        ui.changeSecondCurrencyOutPut();
    }
}


function exchangeCurrency(event){

    currency.changeAmount(amount.value);
    

    //console.log("Event Çalıştı...");
    currency.exchange()
    .then(result => {
        console.log(result);
        ui.displayCurrencyResult(result);
    })
    .catch(err => console.log(err));
    
}