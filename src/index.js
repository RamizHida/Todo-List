import { createForm } from "../createForm";
import { displayNewProject, addTaskBtn } from "./projects";

export const projectBtn = document.querySelector("#project");

projectBtn.addEventListener("click", displayNewProject);

addTaskBtn.addEventListener("click", createForm);
