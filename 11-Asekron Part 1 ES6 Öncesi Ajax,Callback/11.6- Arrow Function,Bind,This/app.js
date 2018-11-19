// Arrow Fubction,Bind,This

const person = {

    age:28,
    // tellAge:function(){

    //     // this -> Person
    //     console.log(this); // kullandığımız obje
    //     console.log(this.age);
    // } //.bind(this) burada this bind ile bağlarsam buradali this -> Window

    // ÖNEMLİ : "this" burada "obje" yerine onun bir üstündeki "Window" objesini getirdi burada arrow ile normal function arasındaki farktır.
    tellAge:() => {
        console.log(this); 
        console.log(this.age);
    }

}

person.tellAge();