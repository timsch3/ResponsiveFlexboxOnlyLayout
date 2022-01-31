const sections = document.querySelectorAll("section");

sections.forEach((section, index) => {
  const clone = document.getElementById(String(index)).content.cloneNode(true);
  section.appendChild(clone);
});

function openCategory(title) {
  const section = title.parentElement;
  const span = title.querySelector("span");
  const contentContainer = section.querySelector(".content-container");

  if (section.dataset.opened != "true") {
    span.style.transform = "rotateZ(-180deg)";
    contentContainer.style.opacity = "1";
    contentContainer.style.setProperty("--height-transition", "400ms");
    contentContainer.style.maxHeight = "1000px";
    section.dataset.opened = "true";
  } else {
    span.style.transform = "rotateZ(0deg)";
    contentContainer.style.opacity = "0";
    contentContainer.style.setProperty("--height-transition", "150ms");
    contentContainer.style.maxHeight = "0";
    section.dataset.opened = "false";
  }
}

function loadContent(id) {
  const section = sections[id.charAt(0)];
  const oldContent = section.querySelector(".content-container");
  const appliedStyles = oldContent.getAttribute("style");
  const newContent = document.getElementById(id).content.cloneNode(true);
  section.replaceChild(newContent, oldContent);
  section
    .querySelector(".content-container")
    .setAttribute("style", appliedStyles);
}
