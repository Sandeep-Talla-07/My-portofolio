const contactBtn = document.querySelector("#contact-btn");

contactBtn.addEventListener("click", () => {
  document.getElementById("myForm").scrollIntoView({
    behavior: "smooth",
  });
});

const aboutItem = document.querySelector("#about-item");
const skillsItem = document.querySelector("#skills-item");
const projectsItem = document.querySelector("#projects-item");
const educationItem = document.querySelector("#education-item");
const experienceItem = document.querySelector("#experince-item");
const achievementItem = document.querySelector("#achievement-item");
const certificatesItem = document.querySelector("#certificates-item");
const contactItem = document.querySelector("#contact-item");

aboutItem.addEventListener("click", () => {
  document.getElementById("about").scrollIntoView({
    behavior: "smooth",
  });
});

skillsItem.addEventListener("click", () => {
  document.getElementById("skills").scrollIntoView({
    behavior: "smooth",
  });
});

projectsItem.addEventListener("click", () => {
  document.getElementById("projects").scrollIntoView({
    behavior: "smooth",
  });
});

educationItem.addEventListener("click", () => {
  document.getElementById("education").scrollIntoView({
    behavior: "smooth",
  });
});

experienceItem.addEventListener("click", () => {
  document.getElementById("experince").scrollIntoView({
    behavior: "smooth",
  });
});

achievementItem.addEventListener("click", () => {
  document.getElementById("achievements").scrollIntoView({
    behavior: "smooth",
  });
});

leadershipItem.addEventListener("click", () => {
  document.getElementById("achievements").scrollIntoView({
    behavior: "smooth",
  });
});

contactItem.addEventListener("click", () => {
  document.getElementById("contact").scrollIntoView({
    behavior: "smooth",
  });
});
