document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("menuBtn");
  const navMenu = document.getElementById("navMenu");

  if (!menuBtn || !navMenu) return;

  // Abrir / cerrar menú
  menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("open");
  });

  // Cerrar menú al hacer click en un enlace (móvil)
  navMenu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("open");
    });
  });
});
