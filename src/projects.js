const projectContainer = document.querySelector(".project--container");
const addProjBtn = document.querySelector("#project");
let errorDiv = document.createElement("div");
let errorMessage = document.createElement("h2");

let numOfProjects = 0;
let datanum = 0;

export function displayNewProject() {
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
    datanum++;
    if (numOfProjects > 6) {
      projectDiv.style.display = "none";
      projectError("Maximum Number of Projects Reached");
      return;
    }

    let nameOfPro = document.getElementsByTagName("input")[0].value;
    let nameofProFormatted = nameOfPro.trim();
    if (nameofProFormatted.length === 0) {
      datanum--;
      return projectError("Project Title Cannot Be Empty");
    }
    let titleContainer = document.createElement("div");
    titleContainer.setAttribute("id", "proj-title");
    titleContainer.setAttribute("data-ID", datanum);
    let displayProjectTitle = document.createElement("h2");
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

//Displaying empty Project error
function projectError(message) {
  document.body.style.background = "black";
  document.querySelector(".left--container").style.display = "none";
  errorDiv.setAttribute("id", "error");
  errorMessage.textContent = message;
  errorDiv.appendChild(errorMessage);
  document.body.appendChild(errorDiv);
  setTimeout(undoProjectError, 2500);
}

// Undoing empty Project error
function undoProjectError() {
  document.querySelector(".left--container").style.display = "flex";
  document.body.style.background = "#cbd5e1";
  document.body.removeChild(errorDiv);
  errorMessage.textContent = "";
}

// make projects appear under Add project button
// Create add task button
// Display task on UI
// Add edit and delete features on each task and project
