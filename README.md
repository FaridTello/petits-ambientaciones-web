# Petits Ambientaciones — Sitio web

Sitio web para **Petits Ambientaciones**, un emprendimiento de Tigre (Buenos Aires) que alquila juegos y mobiliario para cumpleaños infantiles.

🔗 **En línea:** [petitsambientaciones.com.ar](https://petitsambientaciones.com.ar)

Proyecto freelance real: relevamiento con el cliente, desarrollo, puesta en línea con dominio propio y dos rondas de cambios.

## Qué tiene
- Catálogo de productos con filtros por categoría, generado desde un archivo de datos.
- Botones "Consultar" que llevan al formulario de contacto con el producto ya cargado.
- Formulario de contacto que envía sin recargar la página (Formspree, con `fetch`).
- Carruseles de fotos reutilizables, galería con video y mapa de ubicación.
- Diseño adaptado a celular.
- Medición para Google Ads con Google Tag Manager (evento `form_enviado` en el `dataLayer`).

## Tecnologías
- HTML, CSS y JavaScript sin frameworks, con **ES Modules**.
- Hosting en **Cloudflare** con dominio `.com.ar` delegado desde NIC Argentina y redirección de `www` (301).

## Estructura
El código está separado por responsabilidad: los datos, la vista y la lógica no se mezclan.

```
├── index.html            Estructura (HTML semántico)
├── css/
│   ├── base.css          Variables de marca, reset, tipografía, botones
│   ├── layout.css        Header, portada, footer, botón flotante
│   ├── secciones.css     Estilos de cada sección
│   └── responsive.css    Ajustes para celular
├── js/
│   ├── main.js           Punto de entrada: inicializa los módulos
│   ├── config.js         Datos del negocio (contacto, fotos de los carruseles)
│   ├── data/productos.js Catálogo (datos separados de la vista)
│   ├── utils.js          Funciones puras reutilizables
│   ├── catalogo.js       Filtros y render de tarjetas
│   ├── contacto.js       Links de contacto y envío del formulario
│   ├── carrusel.js       Carrusel reutilizable
│   ├── rol.js            Sección de la empresa asociada
│   └── ui.js             Menú del celular y footer
└── img/                  Fotos y logos
```

## Cómo verlo en local
Como usa módulos (`import`/`export`), no funciona abriendo `index.html` con doble clic. Hace falta un servidor local:

```bash
python -m http.server 8000
```

y abrir `http://localhost:8000` (o usar la extensión *Live Server* de VS Code).

## Autor
Desarrollado por **Leonardo Farid Tello Moscoso**, estudiante de la Tecnicatura Universitaria en Programación (UTN FRGP).

Las fotos, logos y textos pertenecen a Petits Ambientaciones y se incluyen solo para mostrar el proyecto.
