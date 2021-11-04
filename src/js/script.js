const Slide = () => {
  const CTA = document.querySelector(".cta-menu");
  const navigation = document.querySelector(".navigation");

  // Toggle Nav
  CTA.addEventListener("click", () => {
    navigation.classList.toggle("responsive");
  });
};

const app = () => {
  Slide();
};

app();

// carousel
jQuery(".testimonials-box-carasolue").owlCarousel({
  loop: false,
  dots: false,
  center: false,
  stagePadding: 10,
  nav: false,
  autoHeight: true,
  responsive: {
    0: {
      items: 1,
      margin: 20
    },
    600: {
      items: 1,
      margin: 20
    },
    1000: {
      items: 3,
      margin: 40
    }
  }
});
