// config.js — Datos del negocio. Es lo primero que se toca si cambia algo de contacto.

export const CONFIG = {
  whatsapp: "5491133950465",          // formato internacional, sin + ni espacios
  whatsappTexto: "11 3395-0465",
  instagram: "petits.ambientaciones",
  direccion: "Santiago del Estero 1348, Tigre",        // se muestra en contacto
  direccionDetalle: "Esquina Schiapapietra",
  direccionMapa: "Santiago del Estero 1348, Tigre, Buenos Aires, Argentina", // lo que busca Google Maps
  rolWeb: "https://vajillayeventos.com.ar/",   // web de ROL Eventos (sección "También somos ROL")
  rolInstagram: "rol.vajillayeventos",          // Instagram de ROL (sin @)
  fotosPortada: ["portada.webp", "pelotero-2x4.webp", "combo-b.webp", "plaza-tipi.webp"], // carrusel del inicio (carpeta img/)
  segundosPorFoto: 4,
  fotosRol: ["rol-1-mesa-pileta.webp", "rol-2-carpa-barra.webp", "rol-3-living-muelle.webp", "rol-4-carpa-noche.webp", "rol-5-living-noche.webp", "rol-6-living-madera.webp", "rol-7-carpa-doble.webp"], // carrusel de la sección ROL
  mostrarPrecios: false,              // el cliente pidió NO mostrar precios. true = los muestra
  mensajeWhatsApp: "¡Hola! Vi la web de Petits y quería consultar por "
};
