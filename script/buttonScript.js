const githubBtns = document.querySelectorAll(".github-btn");
const demoBtns = document.querySelectorAll(".demo-btn");

githubBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    window.open(btn.dataset.url, "_blank");
  });
});

demoBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    window.alert("Demo will be added soon");
  });
});
