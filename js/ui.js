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

/** El video de la galería se descarga y reproduce recién cuando aparece en pantalla. */
export function initVideos() {
  const videos = document.querySelectorAll("video[data-src]");
  if (!("IntersectionObserver" in window)) {
    videos.forEach((v) => { v.src = v.dataset.src; v.play().catch(() => {}); });
    return;
  }
  const obs = new IntersectionObserver((entradas) => {
    entradas.forEach((e) => {
      if (!e.isIntersecting) return;
      const v = e.target;
      v.src = v.dataset.src;
      v.play().catch(() => {});
      obs.unobserve(v);
    });
  }, { rootMargin: "200px" });
  videos.forEach((v) => obs.observe(v));
}
