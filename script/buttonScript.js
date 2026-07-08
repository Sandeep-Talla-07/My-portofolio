const githubBtns = document.querySelectorAll(".github-btn");

githubBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    window.open(btn.dataset.url, "_blank");
  });
});

const demoBtns = document.querySelectorAll(".demo-btn");

demoBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    window.alert("Demo will be added soon");
  });
});
