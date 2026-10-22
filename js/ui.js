// ui.js — Comportamiento general de la interfaz (menú del celular, año del footer).

export function initMenu() {
  const menu = document.getElementById("menu");
  document.querySelector(".menu-btn").addEventListener("click", () => menu.classList.toggle("abierto"));
  // Al tocar un link en el celular, el menú se cierra
  menu.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => menu.classList.remove("abierto")));
}

export function initFooter() {
  document.getElementById("anio").textContent = new Date().getFullYear();
}
