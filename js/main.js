// main.js — Punto de entrada. Solo arranca los módulos, no tiene lógica propia.

import { initMenu, initFooter } from "./ui.js";
import { initCatalogo } from "./catalogo.js";
import { initLinksContacto, initFormulario } from "./contacto.js";
import { initCarrusel } from "./carrusel.js";
import { initRol } from "./rol.js";

initMenu();
initFooter();
initLinksContacto();
initCatalogo();
initFormulario();
initCarrusel();
initRol();
