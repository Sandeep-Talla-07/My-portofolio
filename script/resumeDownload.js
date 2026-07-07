const btn = document.querySelector("#downloadResume");

btn.addEventListener("click", () => {
  const a = document.createElement("a");
  a.href = "Assets/resume/Sandeep_Talla_Resume.pdf";
  a.download = "Sandeep_Talla_Resume.pdf";

  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
});
