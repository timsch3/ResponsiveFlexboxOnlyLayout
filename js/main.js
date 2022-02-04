const sections = document.querySelectorAll("section");
const headerHeight = document.querySelector("header").offsetHeight;
const viewportHeight = window.innerHeight;

sections.forEach((section, index) => {
  // set initial contents
  const clone = document.getElementById(String(index)).content.cloneNode(true);
  section.appendChild(clone);
  // set category title heights according to number of sections
  section.querySelector("h2").style.lineHeight =
    (viewportHeight - headerHeight - 100) / sections.length + "px";
});

function openCategory(title) {
  const section = title.parentElement;
  const span = title.querySelector("span");
  const contentContainer = section.querySelector(".content-container");

  if (section.dataset.opened != "true") {
    contentContainer.style.display = "block";
    title.style.lineHeight = "4rem";
    span.style.transform = "rotateZ(-180deg)";
    section.dataset.opened = "true";
  } else {
    contentContainer.style.display = "none";
    title.style.lineHeight =
      (viewportHeight - headerHeight - 100) / sections.length + "px";
    span.style.transform = "rotateZ(0deg)";
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
