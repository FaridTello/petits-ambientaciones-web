// rol.js — Sección "También somos ROL Vajilla y Eventos".

import { CONFIG } from "./config.js";

export function initRol() {
  const web = document.getElementById("rol-link");
  if (web) web.href = CONFIG.rolWeb;

  const ig = document.getElementById("rol-ig");
  if (ig) ig.href = `https://www.instagram.com/${CONFIG.rolInstagram}/`;
}
