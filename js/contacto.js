// contacto.js — Links de WhatsApp/Instagram y envío del formulario.

import { CONFIG } from "./config.js";
import { PRODUCTOS } from "./data/productos.js";
import { linkWhatsApp, categoriasDe } from "./utils.js";

/** Completa todos los links y textos de contacto a partir de CONFIG. */
export function initLinksContacto() {
  document.querySelectorAll(".wa-link").forEach((a) => {
    a.href = linkWhatsApp("¡Hola! Vi la web de Petits y quería hacer una consulta.");
    a.target = "_blank";
  });
  document.getElementById("wa-texto").textContent = CONFIG.whatsappTexto;
  document.getElementById("ig-link").href = `https://www.instagram.com/${CONFIG.instagram}/`;
  document.getElementById("ig-texto").textContent = "@" + CONFIG.instagram;

  // Ubicación: texto, link a Google Maps y mapa embebido
  const q = encodeURIComponent(CONFIG.direccionMapa);
  document.getElementById("direccion-texto").textContent = `${CONFIG.direccion} · ${CONFIG.direccionDetalle}`;
  document.getElementById("mapa-link").href = `https://www.google.com/maps/search/?api=1&query=${q}`;
  document.getElementById("mapa").src = `https://maps.google.com/maps?q=${q}&z=15&output=embed`;
}

/** Llena el select del formulario y lo envía a Formspree sin salir de la página. */
export function initFormulario() {
  const form = document.getElementById("form");
  const estado = document.getElementById("form-estado");
  const select = document.getElementById("select-interes");

  [...categoriasDe(PRODUCTOS), "Varias cosas / no sé todavía"].forEach((c) => select.add(new Option(c, c)));

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    if (form.action.includes("TU_ID_FORMSPREE")) {
      estado.textContent = "Falta configurar el formulario (ver LEEME).";
      return;
    }
    estado.textContent = "Enviando...";
    try {
      const r = await fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (!r.ok) throw new Error(r.status);
      form.reset();
      // Google Tag Manager: avisa que el formulario se envió bien (conversión de Google Ads)
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ event: "form_enviado" });
      estado.textContent = "¡Gracias! Recibimos tu consulta y te respondemos pronto.";
    } catch {
      estado.textContent = "No se pudo enviar. Escribinos por WhatsApp, por favor.";
    }
  });
}
