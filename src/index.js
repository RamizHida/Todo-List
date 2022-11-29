import { Todo } from "./create.todo";
import { createForm } from "../createForm";
import { displayNewProject, addTaskBtn } from "./projects";

const projectBtn = document.querySelector("#project");

projectBtn.addEventListener("click", displayNewProject);

addTaskBtn.addEventListener("click", createForm);
