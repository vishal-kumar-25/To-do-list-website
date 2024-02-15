document.addEventListener("DOMContentLoaded", function() {
   let btn = document.querySelector("button");
   let ul = document.querySelector("ul");
   let inp = document.querySelector("input");

   btn.addEventListener("click", function() {
       let taskText = inp.value.trim();
       if (taskText !== "") {
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

           console.log(taskText);
           inp.value = ""; // Clear input after adding task
       }
   });

   ul.addEventListener("click", function (event) {
       if (event.target.classList.contains("delete")) {
           let listItem = event.target.parentElement;
           listItem.remove();
           console.log("deleted")
         }
     });
 });