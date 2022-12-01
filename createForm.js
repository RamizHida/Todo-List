import { Todo, todoContainer } from "./src/create.todo";
import {
  addTaskBtn,
  addProjBtn,
  projectError,
  projectContainer,
} from "./src/projects";

export let taskNotification = document.querySelector("#task--notification");

export let listContainer = document.querySelector(".list--container");
export let container = document.createElement("div");
export let allListsItems = document.querySelector("#all--list--items");

export function createForm() {
  taskNotification.style.display = "none";
  allListsItems.style.display = "none";

  if (!projectContainer.hasChildNodes()) {
    return projectError("Please Create a Project First");
  }

  if (allPurple()) {
    setTimeout(function () {
      allListsItems.style.display = "block";
    }, 2500);
    return projectError("Please Select a Project First");
  }

  function findDataId() {
    for (
      let child = projectContainer.firstChild;
      child !== null;
      child = child.nextSibling
    ) {
      if (child.style.background == "purple") {
        // console.log("poo");
      }
      if (child.style.background === "red") {
        return child.getAttribute("data-id");
      }
    }
  }

  container.classList.add("form--container");

  let form = document.createElement("form");
  form.classList.add("form");

  let titleDiv = document.createElement("div");
  let titleLabel = document.createElement("label");
  titleLabel.setAttribute("for", "title");
  titleLabel.textContent = "Title";
  let titleInput = document.createElement("input");
  titleInput.setAttribute("type", "text");
  titleInput.setAttribute("id", "title");
  titleInput.setAttribute("maxlength", "40");
  titleDiv.appendChild(titleLabel);
  titleDiv.appendChild(titleInput);

  let descrDiv = document.createElement("div");
  let descrLabel = document.createElement("label");
  descrLabel.setAttribute("for", "description");
  descrLabel.textContent = "Description";
  let descrInput = document.createElement("textarea");
  descrInput.setAttribute("name", "description");
  descrInput.setAttribute("id", "desciption");
  descrInput.setAttribute("col", "20");
  descrInput.setAttribute("rows", "5");
  descrInput.setAttribute("maxlength", "200");
  descrDiv.appendChild(descrLabel);
  descrDiv.appendChild(descrInput);

  let dateDiv = document.createElement("div");
  let dateLabel = document.createElement("label");
  dateLabel.setAttribute("for", "date");
  dateLabel.textContent = "Due Date";
  let dateInput = document.createElement("input");
  dateInput.setAttribute("type", "date");
  dateInput.setAttribute("id", "date");
  dateDiv.appendChild(dateLabel);
  dateDiv.appendChild(dateInput);

  let priorityDiv = document.createElement("div");
  let priorityLabel = document.createElement("label");
  priorityLabel.setAttribute("for", "priority");
  priorityLabel.textContent = "Priority";
  let selectPri = document.createElement("select");
  selectPri.setAttribute("name", "priority");
  selectPri.setAttribute("id", "priority");
  let option1 = document.createElement("option");
  option1.setAttribute("value", "1");
  option1.textContent = "Low";
  let option2 = document.createElement("option");
  option2.setAttribute("value", "2");
  option2.textContent = "Medium";
  let option3 = document.createElement("option");
  option3.setAttribute("value", "3");
  option3.textContent = "High";
  selectPri.appendChild(option1);
  selectPri.appendChild(option2);
  selectPri.appendChild(option3);
  priorityDiv.appendChild(priorityLabel);
  priorityDiv.appendChild(selectPri);

  let cancelTask = document.createElement("button");
  cancelTask.setAttribute("id", "cancel--task");
  let cancelText = document.createElement("h2");
  cancelText.textContent = "Cancel";
  cancelTask.appendChild(cancelText);

  let submitTask = document.createElement("button");
  submitTask.setAttribute("id", "submit--task");
  let submitText = document.createElement("h2");
  submitText.textContent = "Submit";
  submitTask.appendChild(submitText);

  form.appendChild(titleDiv);
  form.appendChild(descrDiv);
  form.appendChild(dateDiv);
  form.appendChild(priorityDiv);
  form.appendChild(cancelTask);
  form.appendChild(submitTask);

  container.appendChild(form);
  let addTaskContianer = document.querySelector("#add--task--container");
  addTaskContianer.insertAdjacentElement("afterend", container);

  // Momentarily pausing other functionality
  addTaskBtn.style.display = "none";
  addProjBtn.style.display = "none";

  submitTask.addEventListener("click", function (e) {
    taskNotification.style.display = "block";
    e.preventDefault();
    todoContainer.push(
      new Todo(
        titleInput.value,
        descrInput.value,
        dateInput.value,
        selectPri.value
      )
    );
    displayTodo(
      titleInput.value,
      descrInput.value,
      dateInput.value,
      selectPri.value
    );
    // console.log(todoContainer);
    document.body.removeChild(container);
    addTaskBtn.style.display = "flex";
    addProjBtn.style.display = "block";
  });

  cancelTask.addEventListener("click", function () {
    allListsItems.style.display = "block";
    document.body.removeChild(container);
    addTaskBtn.style.display = "flex";
    addProjBtn.style.display = "block";
    if (listContainer.hasChildNodes()) {
      displayList(listContainer);
    }
  });

  let todoCap = document.createElement("div");

  function displayTodo(title, description, dueDate, priorty) {
    todoCap.classList.add("todo--cap");
    todoCap.setAttribute("data-id", findDataId());
    let todoTitle = document.createElement("h2");
    todoTitle.textContent = "Title";
    let todoDescription = document.createElement("h2");
    todoDescription.textContent = "Description";
    let todoDueDate = document.createElement("h2");
    todoDueDate.textContent = "Due Date";
    let todoPriority = document.createElement("h2");
    todoPriority.textContent = "Priority";

    let todoTitleContent = document.createElement("p");
    todoTitleContent.textContent = title;
    let todoDescriptionContent = document.createElement("p");
    todoDescriptionContent.setAttribute("id", "description--to--do");
    todoDescriptionContent.textContent = description;
    let todoDueDateContent = document.createElement("p");
    todoDueDateContent.textContent = dueDate;
    let todoPriorityContent = document.createElement("p");
    todoPriorityContent.setAttribute("id", "priority--to--do");
    todoPriorityContent.textContent = priorty;
    let todoDeleteCap = document.createElement("div");
    todoDeleteCap.setAttribute("id", "delete--todo--container");
    let todoDeleteBtn = document.createElement("button");
    todoDeleteBtn.textContent = "Delete";
    todoDeleteBtn.setAttribute("id", "delete--todo");
    todoDeleteCap.appendChild(todoDeleteBtn);

    todoCap.appendChild(todoTitle);
    todoCap.appendChild(todoDescription);
    todoCap.appendChild(todoDueDate);
    todoCap.appendChild(todoPriority);
    todoCap.appendChild(todoTitleContent);
    todoCap.appendChild(todoDescriptionContent);
    todoCap.appendChild(todoDueDateContent);
    todoCap.appendChild(todoPriorityContent);
    todoCap.appendChild(todoDeleteCap);

    listContainer.appendChild(todoCap);
  }

  // temperorialy hide todo-list from UI
  if (listContainer.hasChildNodes()) {
    var children = listContainer.children;
    for (var i = 0; i < children.length; i++) {
      var child = children[i];
      child.style.display = "none";
    }
  }
}

// display list to UI
export function displayList(element) {
  var children = element.children;
  for (var i = 0; i < children.length; i++) {
    var child = children[i];
    child.style.display = "grid";
  }
}

function allPurple() {
  for (
    let child = projectContainer.firstChild;
    child !== null;
    child = child.nextSibling
  ) {
    if (child.style.background == "red") return false;
  }
  return true;
}
