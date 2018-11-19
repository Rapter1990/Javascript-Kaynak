// Dinamil Element Silme

const todoList = document.querySelector("ul.drinkClass");
const todos = document.querySelectorAll("li.drinkItemClass");

console.log(todos);

console.log(todoList);

// Elementi Silme

todos[0].remove(); // ilk item sildik


// Child silme 
todoList.removeChild(todoList.lastElementChild);
todoList.removeChild(todos[1]);