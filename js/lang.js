let currentLang = "es";

const toggle = document.getElementById("langToggle");

toggle.addEventListener("click", () => {
  currentLang = currentLang === "es" ? "en" : "es";
  toggle.textContent = currentLang === "es" ? "EN" : "ES";

  document.querySelectorAll("[data-es]").forEach(el => {
    el.textContent = el.dataset[currentLang];
  });
});
