function openCategory(title) {
  const section = title.parentElement;
  const span = title.querySelector("span");
  const ul = section.querySelector("ul");

  if (section.dataset.opened != "true") {
    span.style.transform = "rotateZ(-180deg)";
    ul.style.opacity = "1";
    ul.style.setProperty("--height-transition", "400ms");
    ul.style.maxHeight = "1000px";
    section.dataset.opened = "true";
  } else {
    span.style.transform = "rotateZ(0deg)";
    ul.style.opacity = "0";
    ul.style.setProperty("--height-transition", "150ms");
    ul.style.maxHeight = "0";
    section.dataset.opened = "false";
  }
}
