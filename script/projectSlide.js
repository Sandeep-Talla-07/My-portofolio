const projectSwiper = new Swiper(".card-wrapper", {
  loop: true,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
  },
  on: {
    init: function () {
      equalizeCardHeights();
    },
  },
});

function equalizeCardHeights() {
  const cards = document.querySelectorAll(".card-item");
  let maxHeight = 0;

  // reset first so we measure natural height
  cards.forEach((card) => {
    card.style.height = "auto";
  });

  cards.forEach((card) => {
    if (card.offsetHeight > maxHeight) {
      maxHeight = card.offsetHeight;
    }
  });

  cards.forEach((card) => {
    card.style.height = `${maxHeight}px`;
  });
}

// re-run on window resize since text may reflow at different widths
window.addEventListener("resize", equalizeCardHeights);
