const dropdown = document.querySelector(".drop-down");

const list = document.querySelector(".list2");

const selected = document.querySelector(".selected");

const selectedImg = document.querySelector(".selectedImg");

dropdown.addEventListener("click", () => {
  list.classList.toggle("show");
});

list.addEventListener("click", (e) => {
  const img = e.target.querySelector("img");
  const text = e.target.querySelector(".text2");

  selectedImg.src = img.src;
  selected.innerHTML = text2.innerHTML;
});

/* IR TROCANDO AS VARIÁVEIS PELOS TEXTOS DO SITE. É UM CORNOJOBS! */
