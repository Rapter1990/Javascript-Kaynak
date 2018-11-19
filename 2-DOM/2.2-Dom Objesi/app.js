let value;

value = document;

// Script
value = document.scripts;

value = document.scripts.length; // kaç tane script olduğunu gösterir.
value = document.scripts[0]; // ilk script gösterir.
value = document.scripts[document.scripts.length-1]; // son script gösterir.

// Linkler
value = document.links;

value = document.links.length; // kaç tane link olduğunu gösterir.
value = document.links[0]; // ilk linki gösterir.
value = document.links[document.links.length-1]; // son linki gösterir.
value = document.links[document.links.length-1].getAttribute("class"); // son linkideki class gösterir.
value = document.links[document.links.length-1].className; // son linkideki class gösterir.
value = document.links[document.links.length-1].getAttribute("href"); // son linkideki href gösterir.
value = document.links[document.links.length-1].href; // son linkideki href gösterir.
value = document.links[document.links.length-1].classList; // son linkideki class listesini gösterir.

// Form
value = document.forms;

value = document.forms.length; // kaç tane form olduğunu gösterir.
value = document.forms[0]; // ilk formu gösterir.
value = document.forms["form"]; // ilk formu gösterir. (<form name="form">)
value = document.forms[1].id; // 1. formun id'si gösterir.
value = document.forms[1].getAttribute("id"); // 1. formun id'si gösterir.
value = document.forms[1].name; // 1. formun name'si gösterir.
value = document.forms[1].getAttribute("name"); // 1. formun name'si gösterir.
value = document.forms[1].method; // 1. formun methodunu(GET,POST) gösterir.
value = document.forms[1].getAttribute("method"); // 1. formun methodunu(GET,POST) gösterir.


console.log(value);