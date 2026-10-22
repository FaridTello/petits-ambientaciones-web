// utils.js — Funciones chicas y puras que usan varios módulos.

import { CONFIG } from "./config.js";

/** Formatea un número como precio argentino: 190000 -> "$190.000" */
export const formatearPrecio = (n) => "$" + n.toLocaleString("es-AR");

/** Arma el link de WhatsApp con un mensaje ya escrito. */
export const linkWhatsApp = (mensaje) =>
  `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(mensaje)}`;

/** Devuelve las categorías sin repetir, en el orden en que aparecen. */
export const categoriasDe = (productos) => [...new Set(productos.map((p) => p.cat))];
