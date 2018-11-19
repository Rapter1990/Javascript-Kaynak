// Ajax JSON İşlemleri

// Ajax Button Seçme
const ajaxButton = document.querySelector("#ajax"); //document.getElementById("ajax");  
//console.log(ajaxButton);

// button click özelliğin ekleme
ajaxButton.addEventListener("click",getAllEmployees);

function getAllEmployees(event){

    // XMLHttpRequest oluşturma
    let xmlhttp = new XMLHttpRequest();

    // Employee JSON dosyası
    let employeeJSONFile = "employees.json";


    // "onreadystatechange" yerine "onload" kullandık.
    xmlhttp.onload = function(){
        
        // Employee listesini belirleme
        let employeeList = document.getElementById("employees"); 

        if (this.readyState == 4 && this.status == 200) {

            let employeeResponseText = JSON.parse(this.responseText);
            //console.log(employeeResponseText);

            employeeResponseText.forEach(function(employee){
                
                const employeeItem = `<tr>
                                        <td>${employee.name}</td>
                                        <td>${employee.department}</td>
                                        <td>${employee.salary}</td>
                                      </tr>`;

                employeeList.innerHTML += employeeItem;
            });
        }

    }

    // Bağlantı açma ve request belirleme (Bilgiyi alacağımız için "GET" requesti kullandık.)
    xmlhttp.open("GET", employeeJSONFile, true);

    // request gönderme
    xmlhttp.send();
        
}