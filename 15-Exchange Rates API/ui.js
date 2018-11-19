// ui alanı
class UI{
    constructor(firstSelector,secondSelector){
        this.firstSelector = firstSelector;
        this.secondSelector = secondSelector;

        this.outputFirst = document.getElementById("outputFirst");
        this.outputSecond = document.getElementById("outputSecond");
        this.outputResult = document.getElementById("outputResult");
    }

    changeFirstCurrencyOutPut(){
        console.log(this.firstSelector.options[this.firstSelector.selectedIndex].textContent);
        this.outputFirst.textContent = this.firstSelector.options[this.firstSelector.selectedIndex].textContent;
    }

    changeSecondCurrencyOutPut(){
        console.log(this.secondSelector.options[this.secondSelector.selectedIndex].textContent);
        this.outputSecond.textContent = this.secondSelector.options[this.secondSelector.selectedIndex].textContent;
    }

    displayCurrencyResult(result){
        this.outputResult.value = result; // input olduğundan "value" yazdık.. 
    }
    
}