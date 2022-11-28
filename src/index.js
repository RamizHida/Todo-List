import { Todo } from "./create.todo";
import { displayNewProject } from "./projects";

const fist = new Todo("Emails", "Send email to buyers", "Friday", "High");

const projectBtn = document.querySelector("#project");

projectBtn.addEventListener("click", displayNewProject);
