// Mostrar/Ocultar una sección llamada habilidades
function toggleSection(id) {
  const section = document.getElementById(id);
  section.style.display = section.style.display === "none" ? "block" : "none";
}

// Esperar a que el DOM cargue antes de agregar eventos
document.addEventListener("DOMContentLoaded", () => {
  // Botón para mostrar/ocultar habilidades
  const toggleBtn = document.getElementById("toggle-btn");
  toggleBtn.addEventListener("click", () => toggleSection("habilidades"));

  // Resaltado dinámico de habilidades
  const skills = document.querySelectorAll(".skill");
  skills.forEach(skill => {
    skill.addEventListener("mouseover", () => {
      skill.style.backgroundColor = "#ffd54f";
      skill.style.color = "#000";
    });
    skill.addEventListener("mouseout", () => {
      skill.style.backgroundColor = "";
      skill.style.color = "";
    });
  });

  // Botón de cambio de color (modo oscuro/claro)
  const themeToggle = document.getElementById("theme-toggle");
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    const darkModeOn = document.body.classList.contains("dark-mode");
    themeToggle.textContent = darkModeOn ? "Modo claro" : "Modo oscuro";
  });
});