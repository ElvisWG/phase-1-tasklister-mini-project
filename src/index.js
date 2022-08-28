document.addEventListener("DOMContentLoaded", () => {
  // your code here
 document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();

  let buildToDo = document.getElementById("new-task-description").value;

  let list = document.createElement("p");
  let button = document.createElement("button");
  button.addEventListener("click", (e) => {
    e.target.parentNode.remove();
  });
  button.textContent = 'x';

  list.textContent = `${buildToDo} `;
  list.appendChild(button);
  document.querySelector("#tasks").appendChild(list);
  document.querySelector("h1").remove();

});

});

 
