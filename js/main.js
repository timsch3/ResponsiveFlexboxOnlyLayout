const sections = document.querySelectorAll("section");
const headerHeight = document.querySelector("header").offsetHeight;
const viewportHeight = window.innerHeight;
let layoutMax = window.innerWidth >= 1200 ? true : false;

sections.forEach((section, index) => {
  // set initial contents
  const clone = document.getElementById(index).content.cloneNode(true);
  section.appendChild(clone);
  // set category title heights according to number of sections
  setCategoriesHeight(section.querySelector("h2"));
});

function openCategory(title) {
  const section = title.parentElement;
  const span = title.querySelector("span");
  const contentContainer = section.querySelector(".content-container");

  if (section.dataset.opened != "true") {
    contentContainer.style.padding = "1rem 0";
    contentContainer.style.maxHeight = "9999px";
    setTimeout(() => {
      contentContainer.style.maxHeight = `${contentContainer.offsetHeight}px`;
    }, 200);
    contentContainer.style.opacity = "1";
    title.style.lineHeight = "4rem";
    span.style.transform = "rotateX(-180deg)";
    section.dataset.opened = "true";
  } else {
    contentContainer.style.padding = "0";
    contentContainer.style.maxHeight = "0";
    contentContainer.style.opacity = "0";
    setCategoriesHeight(title);
    span.style.transform = "rotateX(0deg)";
    section.dataset.opened = "false";
  }
}

function loadContent(id) {
  const section = sections[id.charAt(0)];
  const oldContent = section.querySelector(".content-container");
  const appliedStyles = oldContent.getAttribute("style");
  const newContent = document.getElementById(id).content.cloneNode(true);
  section.replaceChild(newContent, oldContent);
  const contentContainer = section.querySelector(".content-container");
  contentContainer.setAttribute("style", appliedStyles);
  contentContainer.style.maxHeight = "9999px";
  setTimeout(() => {
    contentContainer.style.maxHeight = `${contentContainer.offsetHeight}px`;
  }, 20);
}

function setCategoriesHeight(cat) {
  layoutMax
    ? (cat.style.lineHeight =
        viewportHeight -
        headerHeight -
        20 * sections.length /* margin bottom per section */ +
        "px")
    : (cat.style.lineHeight =
        (viewportHeight -
          headerHeight -
          20 * sections.length) /* margin bottom per section */ /
          sections.length +
        "px");
}
