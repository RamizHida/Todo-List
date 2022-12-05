import {
  listContainer,
  displayList,
  taskNotification,
  allListsItems,
} from "../createForm";
import { projectBtn } from ".";

export const projectContainer = document.querySelector(".project--container");
export const addProjBtn = document.querySelector("#project");
let errorDiv = document.createElement("div");
let errorMessage = document.createElement("h2");
export let addTaskBtn = document.querySelector(".add--task");
export let deleteProject = document.querySelector("#delete--project--btn");

let numOfProjects = 0;
export let datanum = 0;

export function displayNewProject() {
  allListsItems.style.display = "none";
  deleteProject.style.display = "none";

  let projectDiv = document.createElement("div");
  projectDiv.classList.add("project--list");

  let projectInput = document.createElement("input");
  projectInput.setAttribute("type", "text");
  projectInput.setAttribute("maxlength", "20");

  projectInput.setAttribute("placeholder", "Project Title");

  let submitBtn = document.createElement("button");
  submitBtn.textContent = "Submit";
  submitBtn.setAttribute("id", "submit");

  projectDiv.style.display = "flex";

  submitBtn.addEventListener("click", function () {
    allListsItems.style.display = "none";
    deleteProject.style.display = "block";

    if (numOfProjects > 8) {
      addProjBtn.style.display = "none";
      projectError("Maximum Number of Projects Reached");
      return;
    }

    let nameOfPro = document.getElementsByTagName("input")[0].value;
    let nameofProFormatted = nameOfPro.trim();
    if (nameofProFormatted.length === 0) {
      setTimeout(() => {
        allListsItems.style.display = "block";
      }, 2500);
      return projectError("Project Title Cannot Be Empty");
    }
    datanum++;

    let titleContainer = document.createElement("div");
    titleContainer.setAttribute("id", "proj-title");
    titleContainer.setAttribute("data-ID", datanum);

    let displayProjectTitle = document.createElement("h2");
    displayProjectTitle.setAttribute("data-ID", datanum);

    displayProjectTitle.textContent = nameofProFormatted;

    titleContainer.appendChild(displayProjectTitle);
    projectContainer.removeChild(projectDiv);

    addProjBtn.style.display = "block";
    projectContainer.appendChild(titleContainer);
    numOfProjects++;
  });

  let cancelBtn = document.createElement("button");
  cancelBtn.textContent = "Cancel";
  cancelBtn.setAttribute("id", "delete");

  cancelBtn.addEventListener("click", function () {
    addProjBtn.style.display = "block";
    deleteProject.style.display = "block";
    projectContainer.removeChild(projectDiv);
  });

  projectDiv.appendChild(projectInput);
  projectDiv.appendChild(submitBtn);
  projectDiv.appendChild(cancelBtn);

  projectContainer.appendChild(projectDiv);

  hideAddProjBtn();
}

// Remove ability to add another project, while already adding a project
//
function hideAddProjBtn() {
  addProjBtn.style.display = "none";
}

//Displaying  Project error
export function projectError(message) {
  document.body.style.background = "black";
  document.querySelector(".left--container").style.display = "none";
  errorDiv.setAttribute("id", "error");
  addTaskBtn.style.display = "none";
  errorMessage.textContent = message;
  errorDiv.appendChild(errorMessage);
  document.body.appendChild(errorDiv);

  if (listContainer.hasChildNodes()) {
    var children = listContainer.children;
    for (var i = 0; i < children.length; i++) {
      var child = children[i];
      child.style.display = "none";
    }
  }
  setTimeout(undoProjectError, 2500);
}

function undoProjectError() {
  document.querySelector(".left--container").style.display = "flex";
  document.body.style.background = "rgb(203, 213, 225)";
  document.body.removeChild(errorDiv);
  if (listContainer.hasChildNodes()) {
    displayList(listContainer);
  }
  addTaskBtn.style.display = "flex";
}

// marking which project we are in
projectContainer.addEventListener("click", function (e) {
  taskNotification.style.display = "none";
  if (e.target.getAttribute("data-id")) {
    allListsItems.style.display = "none";
  }

  for (
    let child = projectContainer.firstChild;
    child !== null;
    child = child.nextSibling
  ) {
    if (child.getAttribute("data-id")) {
      child.style.background = "purple";
      child.firstChild.style.background = "purple";
      if (e.target == child) {
        child.style.background = "red";
        child.firstChild.style.background = "red";
      }
      if (e.target.parentNode == child) {
        child.style.background = "red";
        child.firstChild.style.background = "red";
      }
    }
  }
  displayCorrectList(e.target);
});

function displayCorrectList(project) {
  if (project.style.background == "red" || project.getAttribute("data-id")) {
    for (
      let child = listContainer.firstChild;
      child !== null;
      child = child.nextSibling
    ) {
      if (project.getAttribute("data-id") != child.getAttribute("data-id")) {
        child.style.display = "none";
      } else {
        child.style.display = "grid";
      }
    }
  }
}

deleteProject.addEventListener("click", function () {
  if (numOfProjects - 1 == 8) {
    projectBtn.style.display = "flex";
  }

  let projectMarked = false;
  let deletedProject;
  // check to see if no project in directory
  if (projectContainer.firstChild == null)
    return projectError("No Projects Currently In Inventory");

  // find marked projected
  for (
    let projectChild = projectContainer.firstChild;
    projectChild != null;
    projectChild = projectChild.nextSibling
  ) {
    if (
      projectChild.style.background == "red" &&
      projectChild.getAttribute("data-id")
    ) {
      // projecte was choosen
      projectMarked = true;
      deletedProject = projectChild;
    }
  }

  // no project choosen
  if (!projectMarked) {
    return projectError("Please Choose Project To Delete");
  }
  datanum--;

  if (
    deletedProject == projectContainer.lastChild &&
    listContainer.firstChild == null
  ) {
    projectContainer.removeChild(deletedProject);
    numOfProjects--;
    return;
  }

  // project was choosen
  if (projectMarked) {
    numOfProjects--;
    // update datanum so new added projects/tasks will have correct data-id

    // check if chosen project was the last project. if so, no project data-id update required for project list or listIem-id update needed
    if (deletedProject.nextSibling == null) {
      //remove all correct list items
      removeAllApproraiteListItems(deletedProject.getAttribute("data-id"));
      // remove marked project
      projectContainer.removeChild(deletedProject);
      return;
    }
    // if chosen project was not the last project, update data-id of all projects (including the firstChild of each project) after chosen project
    if (deletedProject.nextSibling !== null) {
      for (
        let projectAfterDeletedProject = deletedProject.nextSibling;
        projectAfterDeletedProject !== null;
        projectAfterDeletedProject = projectAfterDeletedProject.nextSibling
      ) {
        let updatedDataId =
          projectAfterDeletedProject.getAttribute("data-id") - 1;
        projectAfterDeletedProject.setAttribute("data-id", updatedDataId);
        projectAfterDeletedProject.firstChild.setAttribute(
          "data-id",
          updatedDataId
        );
      }
      //remove all correct list items
      removeAllApproraiteListItems(deletedProject.getAttribute("data-id"));
      updateListItems(deletedProject.getAttribute("data-id"));
      // after updating each projects data-id, remove the marked project
      projectContainer.removeChild(deletedProject);
    }
  }
});

function removeAllApproraiteListItems(itemNum) {
  // if no list items, no list items can be removed
  if (listContainer.firstChild == null) {
    return;
  }

  let children = listContainer.children;
  for (let i = 0; i < children.length; i++) {
    let child = children[i];
    if (child.getAttribute("data-id") == itemNum) {
      listContainer.removeChild(child);
      i--;
    }
  }
}

// update list items data-id
function updateListItems(itemNum) {
  if (listContainer.firstChild == null) {
    return;
  }
  for (
    let listChild = listContainer.firstChild;
    listChild !== null;
    listChild = listChild.nextSibling
  ) {
    let updatedListID = listChild.getAttribute("data-id") - 1;

    if (listChild.getAttribute("data-id") > itemNum) {
      listChild.setAttribute("data-id", updatedListID);
    }
  }
}
