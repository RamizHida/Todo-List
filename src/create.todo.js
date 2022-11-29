// import { addProjBtn, addTaskBtn } from "./projects";

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

export let todoContainer = [];
