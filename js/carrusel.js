// carrusel.js — Carruseles de fotos (portada y ROL). Fade automático, sin librerías.

import { CONFIG } from "./config.js";

/**
 * Arma un carrusel dentro del elemento con ese id.
 * Reutilizable: la misma función sirve para cualquier sección.
 */
function crearCarrusel(id, fotos, alt) {
  const contenedor = document.getElementById(id);
  if (!contenedor || !fotos?.length) return;

  contenedor.innerHTML = fotos
    .map((f, i) => `<img src="img/${f}" alt="${alt}" class="${i === 0 ? "activa" : ""}" ${i === 0 ? "" : 'loading="lazy"'}>`)
    .join("");

  const imgs = contenedor.querySelectorAll("img");
  if (imgs.length < 2) return;

  // Respeta a quien tiene activada la opción de reducir animaciones
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  let actual = 0;
  setInterval(() => {
    imgs[actual].classList.remove("activa");
    actual = (actual + 1) % imgs.length;
    imgs[actual].classList.add("activa");
  }, CONFIG.segundosPorFoto * 1000);
}

export function initCarrusel() {
  crearCarrusel("carrusel", CONFIG.fotosPortada, "Espacio de juegos armado por Petits");
  crearCarrusel("carrusel-rol", CONFIG.fotosRol, "Evento armado por ROL Vajilla y Eventos");
}
