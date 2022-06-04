ScrollReveal({ reset: false, distance: "60px", duration: 900, delay: 25 });

ScrollReveal().reveal(".servicos-title, .cards", {
  delay: 25,
  origin: "bottom",
});

ScrollReveal().reveal(".image, .text", {
  delay: 100,
  origin: "left"
})

ScrollReveal().reveal(".statement", {
  delay: 100,
  origin: "top"
})

Atropos({
  el: '.my-atropos',
  rotateTouch: window.innerWidth > 1000  ? true : false,
  // rest of parameters
  shadow: false,
});

Atropos({
  el: '.my-atropos-1',
  rotateTouch: window.innerWidth > 1000  ? true : false,
  // rest of parameters
  shadow: false
});

Atropos({
  el: '.my-atropos-2',
  rotateTouch: window.innerWidth > 1000  ? true : false,
  // rest of parameters
  shadow: false
});