const parentContainer = document.querySelector(".parent");

parentContainer.addEventListener("click", (event) => {
  const current = event.target;

  const isReadMoreBtn = current.className.includes("rMoreBtn");

  if (!isReadMoreBtn) return;

  const currentText = event.target.parentNode.querySelector(".more");

  currentText.classList.toggle("more--show");

  current.textContent = current.textContent.includes("Read More") ? "Read Less" : "Read More";
});
