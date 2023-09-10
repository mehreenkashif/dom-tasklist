const taskInput = document.querySelector("#task");
const taskForm = document.querySelector("#task-form");
const collection = document.querySelector(".collection");

taskForm.addEventListener("submit", function (event) {
  event.preventDefault(); 

  const taskInputValue = taskInput.value;
  if (!taskInputValue) {
    alert("please fill the task");
    return;
  }

  /*
  <li class="collection-item">
    List Item
    <a href="#" class="delete-item secondary-content">
      <i class="fa fa-remove"></i>
    </a>
  </li>;
  */

  const listElement = document.createElement("li");
  listElement.className = "collection-item";

  listElement.innerHTML = `${taskInputValue}
    <a href="#" class="delete-item secondary-content">
      <i class="fa fa-remove"></i>
    </a>`;

  // console.log(listElement);
  collection.append(listElement);

  taskInput.value = "";

  //bind click on delete button
  bindDeleteButtonToAll();
});

function bindDeleteButtonToAll() {
  const deleteItems = document.querySelectorAll(".delete-item i");
  if (deleteItems.length > 0) {
    deleteItems.forEach(function (singleDeleteItem) {
      singleDeleteItem.addEventListener("click", function (event) {
        event.preventDefault();
        
        const currentElement = event.target;
        event.stopImmediatePropagation();
        if (confirm("Are You Sure ?")) {
          currentElement.parentElement.parentElement.remove();
        }
      });
    })
  }
}

document.getElementById("clear").addEventListener("onclick", clearTask);

function clearTask() {
  collection.innerHTML = "";
}
