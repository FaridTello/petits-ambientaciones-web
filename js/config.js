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
  fotosPortada: ["portada.jpg", "pelotero-2x4.jpg", "combo-b.jpg", "plaza-tipi.jpg"], // carrusel del inicio (carpeta img/)
  segundosPorFoto: 4,
  fotosRol: ["rol-1-mesa-pileta.jpg", "rol-2-carpa-barra.jpg", "rol-3-living-muelle.jpg", "rol-4-carpa-noche.jpg", "rol-5-living-noche.jpg", "rol-6-living-madera.jpg", "rol-7-carpa-doble.jpg"], // carrusel de la sección ROL
  mostrarPrecios: false,              // el cliente pidió NO mostrar precios. true = los muestra
  mensajeWhatsApp: "¡Hola! Vi la web de Petits y quería consultar por "
};
