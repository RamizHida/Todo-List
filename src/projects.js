import {
  listContainer,
  displayList,
  taskNotification,
  allListsItems,
} from "../createForm";
export const projectContainer = document.querySelector(".project--container");
export const addProjBtn = document.querySelector("#project");
let errorDiv = document.createElement("div");
let errorMessage = document.createElement("h2");
export let addTaskBtn = document.querySelector(".add--task");

let numOfProjects = 0;
export let datanum = 0;

export function displayNewProject() {
  allListsItems.style.display = "none";

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

    if (numOfProjects > 8) {
      projectDiv.style.display = "none";
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
