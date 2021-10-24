// filter function

function filterSelection(current) {
  if (!e) var e = window.event;
  activeTab(e.target);
  let element = document.querySelectorAll("div.filterDiv");
  let x = element.length;
  for (i = 0; i < x; i++) {
    if (current == "all") {
      element[i].classList.remove("d-none");
    } else {
      if (element[i].classList.contains(current)) {
        element[i].classList.remove("d-none");
      } else {
        if (element[i].classList.contains("d-none")) {
        } else {
          element[i].classList.add("d-none");
        }
      }
    }
  }
}

function activeTab(currentButton) {
  let element = document.getElementById("myBtnContainer");
  let selections = document.querySelectorAll("#myBtnContainer .button");
  selections.forEach((button) => {
    if (button.classList.contains("current")) {
      button.classList.remove("current");
    }
  });
  currentButton.className += " current";
}
