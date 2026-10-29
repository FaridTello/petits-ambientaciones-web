// carrusel.js — Carruseles de fotos (portada y ROL). Fade automático, sin librerías.

import { CONFIG } from "./config.js";

/**
 * Arma un carrusel dentro del elemento con ese id.
 * Reutilizable: la misma función sirve para cualquier sección.
 */
function crearCarrusel(id, fotos, alt) {
  const contenedor = document.getElementById(id);
  if (!contenedor || !fotos?.length) return;

  // La primera foto de la portada ya viene escrita en el HTML (así carga sin esperar al JS).
  // Si no está, la agregamos acá.
  if (!contenedor.querySelector("img")) {
    contenedor.innerHTML = `<img src="img/${fotos[0]}" alt="${alt}" class="activa" loading="lazy">`;
  }

  // Las demás fotos se crean sin "src": se descargan recién cuando están por mostrarse,
  // así no compiten con la primera mientras carga la página.
  fotos.slice(1).forEach((f) => {
    const img = document.createElement("img");
    img.alt = alt;
    img.dataset.src = `img/${f}`;
    contenedor.appendChild(img);
  });

  const imgs = contenedor.querySelectorAll("img");
  if (imgs.length < 2) return;

  const cargar = (img) => { if (img && !img.src && img.dataset.src) img.src = img.dataset.src; };

  // Respeta a quien tiene activada la opción de reducir animaciones
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  // Cuando terminó de cargar la página, bajamos la segunda foto
  if (document.readyState === "complete") cargar(imgs[1]);
  else window.addEventListener("load", () => cargar(imgs[1]));

  let actual = 0;
  setInterval(() => {
    imgs[actual].classList.remove("activa");
    actual = (actual + 1) % imgs.length;
    cargar(imgs[actual]);
    imgs[actual].classList.add("activa");
    cargar(imgs[(actual + 1) % imgs.length]); // dejamos lista la siguiente
  }, CONFIG.segundosPorFoto * 1000);
}

export function initCarrusel() {
  crearCarrusel("carrusel", CONFIG.fotosPortada, "Espacio de juegos armado por Petits");
  crearCarrusel("carrusel-rol", CONFIG.fotosRol, "Evento armado por ROL Vajilla y Eventos");
}
