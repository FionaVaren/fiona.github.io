const parentContainer = document.querySelector(".parent");

parentContainer.addEventListener("click", (event) => {
  const current = event.target;

  const isReadMoreBtn = current.className.includes("rMoreBtn");

  if (!isReadMoreBtn) return;

  const currentText = event.target.parentNode.querySelector(".more");

  currentText.classList.toggle("more--show");

  current.textContent = current.textContent.includes("Read More") ? "Read Less" : "Read More";
});
AOS.init();
gsap.from(".navbar", { duration: 1, y: -100, opacity: 0, ease: "bounce" });
gsap.from(".jumbotron img", { duration: 1, rotateY: 360, opacity: 0 });
gsap.to(".jumbotron .textP", { duration: 2, text: "fiona.tendio@binus.ac.id | 082271509675", ease: "none" });
