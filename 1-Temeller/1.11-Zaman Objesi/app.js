let value;

const now = new Date(); // Şu anki zamanı gösterir.

console.log(now);

const birthday1 = new Date("4-28-1990 16:45:00");

const birthday2 = new Date("28 April 1990");

const birthday3 = new Date("4/28/1990");

value = birthday1;

value = birthday1.getMonth(); // O tarihterki ayı Gösterir
value = birthday1.getDate(); // O tarihterki günü gösterir
value = birthday1.getDay(); // O tarihterki haftanın günü gösterir

value = birthday1.getHours(); // O tarihterki saati Gösterir
value = birthday1.getMinutes(); // O tarihterki dakikayı gösterir
value = birthday1.getSeconds(); // O tarihterki saniyeyi günü gösterir
value = birthday1.getMilliseconds(); // O tarihterki saniyeyi günü gösterir

// Tarih belirleme
birthday1.setMonth(7);
birthday1.setDate(15);
birthday1.setFullYear(2016);
birthday1.setHours(0);
birthday1.setMinutes(15);
birthday1.setMinutes(30);

value = birthday1;

console.log(value);