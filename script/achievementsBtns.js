const achCards = document.querySelectorAll(".achievement-card");

achCards.forEach((achCard) => {
  achCard.addEventListener("click", () => {
    window.open(achCard.dataset.url, "_blank");
  });
});
