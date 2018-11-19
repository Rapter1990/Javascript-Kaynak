const name = "Sercan Noyan Gerimynaoğlu";
const department = "Yazılım";
const salary = 5000;

const result = "Ad : " + name + "\n" + "Departman : " + department + "\n" + "Maaş :" + salary;

const sonuc = `Ad : ${name}\nDepartman : ${department}\nMaaş : ${salary}`;  // `` alt gr + noktalı virgül 

const diger_sonuc = "<ul>" +
                        "<li>" + name + "</li>" +
                        "<li>" + department + "</li>" +
                        "<li>" + salary + "</li>" +
                    "</ul>";

function a(){
    return "Merhaba";
}                    

const diger_sonuc1 = `<ul>
                        <li>${name}</li>
                        <li>${department}</li>
                        <li>${salary}</li>
                        <li>${10/4}</li>
                        <li>${a()}</li>
                    </ul>`
            

console.log(result);
console.log(sonuc);

document.body.innerHTML = diger_sonuc;
document.body.innerHTML = diger_sonuc1;
