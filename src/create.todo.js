import { addProjBtn, addTaskBtn } from "./projects";

export class Todo {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }
  edit() {}
  delete() {}
}

function createForm() {
  console.log("1");
  let container = document.createElement("div");
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
  let option0 = document.createElement("option");
  option0.setAttribute("value", "0");
  option0.textContent = "Select Priority";
  let option1 = document.createElement("option");
  option1.setAttribute("value", "1");
  option0.textContent = "Low";
  let option2 = document.createElement("option");
  option2.setAttribute("value", "2");
  option2.textContent = "Medium";
  let option3 = document.createElement("option");
  option3.setAttribute("value", "3");
  option3.textContent = "High";
  selectPri.appendChild(option0, option1, option2, option3);
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
}

addTaskBtn.addEventListener("click", createForm);
