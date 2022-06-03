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
  origin: "right"
})

Atropos({
  el: '.my-atropos',
  // rest of parameters
  shadow: false
});

Atropos({
  el: '.my-atropos-1',
  // rest of parameters
  shadow: false
});

Atropos({
  el: '.my-atropos-2',
  // rest of parameters
  shadow: false
});