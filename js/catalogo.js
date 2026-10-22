// catalogo.js — Muestra los productos y maneja los filtros por categoría.
// Separa la VISTA (cómo se dibuja una tarjeta) de la LÓGICA (qué productos mostrar).

import { CONFIG } from "./config.js";
import { PRODUCTOS } from "./data/productos.js";
import { formatearPrecio, categoriasDe } from "./utils.js";

const TODOS = "Todos";
let contenedorFiltros, contenedorGrid;

/* ---------- Lógica ---------- */

/** Devuelve los productos de una categoría (o todos). */
export function filtrarPorCategoria(categoria, productos = PRODUCTOS) {
  return categoria === TODOS ? productos : productos.filter((p) => p.cat === categoria);
}

/* ---------- Vista ---------- */

function precioHTML(p) {
  if (!CONFIG.mostrarPrecios) return `<span class="precio" style="font-size:.95rem">Pedí tu presupuesto</span>`;
  if (p.precio === null) return `<span class="precio">A presupuestar</span>`;
  return `<span class="precio">${formatearPrecio(p.precio)} <small>+ IVA${p.unidad ? " " + p.unidad : ""}</small></span>`;
}

function imagenHTML(p) {
  if (!p.img) {
    return `<div class="sin-foto"><img src="img/logo-sello.png" alt="Petits Ambientaciones"></div>`;
  }
  return `<img src="img/${p.img}" alt="${p.nombre}" loading="lazy">`;
}

function tarjetaHTML(p) {
  return `
    <article class="prod">
      <div class="prod-img">${imagenHTML(p)}<span class="edad">${p.edad}</span></div>
      <div class="prod-body">
        ${p.cod ? `<span class="cod">Cód. ${p.cod}</span>` : ""}
        <h3>${p.nombre}</h3>
        <ul>${p.incluye.map((i) => `<li>${i}</li>`).join("")}</ul>
        <div class="prod-pie">${precioHTML(p)}
          <a href="#contacto" data-consulta="${p.nombre}" data-cat="${p.cat}" data-cod="${p.cod || ""}">Consultar</a>
        </div>
      </div>
    </article>`;
}

/* ---------- Control ---------- */

/** Dibuja el catálogo filtrado y marca el botón activo. */
export function mostrarCategoria(categoria) {
  contenedorFiltros.querySelectorAll("button").forEach((b) =>
    b.classList.toggle("activo", b.dataset.cat === categoria)
  );
  contenedorGrid.innerHTML = filtrarPorCategoria(categoria).map(tarjetaHTML).join("");
}

export function initCatalogo() {
  contenedorFiltros = document.getElementById("filtros");
  contenedorGrid = document.getElementById("grid-cat");

  [TODOS, ...categoriasDe(PRODUCTOS)].forEach((cat) => {
    const boton = document.createElement("button");
    boton.textContent = cat;
    boton.dataset.cat = cat;
    boton.addEventListener("click", () => mostrarCategoria(cat));
    contenedorFiltros.appendChild(boton);
  });

  // Los links de la sección "Servicios" también filtran el catálogo
  document.querySelectorAll("[data-filtro]").forEach((a) =>
    a.addEventListener("click", () => mostrarCategoria(a.dataset.filtro))
  );

  if (!CONFIG.mostrarPrecios) {
    document.getElementById("nota-precios").textContent = "Consultanos por precios, flete y disponibilidad.";
  }

  // "Consultar" lleva al formulario de contacto con el producto ya cargado
  contenedorGrid.addEventListener("click", (e) => {
    const boton = e.target.closest("[data-consulta]");
    if (boton) prepararConsulta(boton.dataset);
  });

  mostrarCategoria(TODOS);
}

/** Completa el formulario con el producto elegido (el scroll lo hace el link #contacto). */
function prepararConsulta({ consulta, cat, cod }) {
  const select = document.getElementById("select-interes");
  const mensaje = document.querySelector('#form textarea[name="mensaje"]');
  if (select && [...select.options].some((o) => o.value === cat)) select.value = cat;
  if (mensaje) {
    mensaje.value = `Hola! Quería consultar por: ${consulta}${cod ? ` (Cód. ${cod})` : ""}.\nFecha y lugar del evento: `;
  }
}
