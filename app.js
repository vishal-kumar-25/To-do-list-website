document.addEventListener("DOMContentLoaded", function() {
   let btn = document.querySelector("button");
   let ul = document.querySelector("ul");
   let inp = document.querySelector("input");

   // Load tasks from localStorage when the page loads
   loadTasks();

   btn.addEventListener("click", function() {
       let taskText = inp.value.trim();
       if (taskText !== "") {
           addTask(taskText);
           saveTasksToLocalstorage(); 
           inp.value = ""; 
       }
   });

   ul.addEventListener("click", function (event) {
       if (event.target.classList.contains("delete")) {
           let listItem = event.target.parentElement;
           listItem.remove();
           saveTasksToLocalstorage(); // Save tasks to localStorage after deletion
           console.log("deleted");
       }
   });

   // Function to add a task to the list
   function addTask(taskText) {
       let item = document.createElement("li");
       
       let checkbox = document.createElement("input");
       checkbox.type = "checkbox";
       checkbox.className = "taskCheckbox";
       
       let span = document.createElement("span");
       span.innerText = taskText;

       let delBtn = document.createElement("button");
       delBtn.innerText = "delete";
       delBtn.classList.add("delete");

       item.appendChild(checkbox);
       item.appendChild(span);
       item.appendChild(delBtn);
       ul.appendChild(item);
   }

   // Function to load tasks from localStorage
   function loadTasks() {
       let savedTasks = localStorage.getItem("tasks");
       if (savedTasks) {
           let tasks = JSON.parse(savedTasks);
           tasks.forEach(taskText => {
               addTask(taskText);
           });
       }
   }

   // Function to save tasks to localStorage
   function saveTasksToLocalstorage() {
       let tasks = [];
       document.querySelectorAll("ul li span").forEach(span => {
           tasks.push(span.textContent);
       });
       localStorage.setItem("tasks", JSON.stringify(tasks));
   }
});
