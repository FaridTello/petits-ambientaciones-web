# Petits Ambientaciones — Website

Website for **Petits Ambientaciones**, a small business in Tigre (Buenos Aires, Argentina) that rents play equipment and furniture for children's parties.

🔗 **Live:** [petitsambientaciones.com.ar](https://petitsambientaciones.com.ar)

Real freelance project: requirements gathering with the client, development, deployment on a custom domain, and post-launch changes.

> The site content is in Spanish because it targets local customers.

## Features
- Product catalog with category filters, rendered from a data file.
- "Consultar" (inquire) buttons that scroll to the contact form with the product already filled in.
- Contact form that submits without reloading the page (Formspree, using `fetch`).
- Reusable photo carousels, gallery with video, and location map.
- Responsive, mobile-first design.
- Google Ads conversion tracking with Google Tag Manager (`form_enviado` event pushed to the `dataLayer`).

## Tech stack
- HTML, CSS and vanilla JavaScript with **ES Modules** (no frameworks).
- Hosted on **Cloudflare**, with a `.com.ar` domain delegated from NIC Argentina and a `www` → root redirect (301).

## Project structure
The code is split by responsibility: data, view and logic are kept separate.

```
├── index.html            Structure (semantic HTML)
├── css/
│   ├── base.css          Brand variables, reset, typography, buttons
│   ├── layout.css        Header, hero, footer, floating button
│   ├── secciones.css     Section styles
│   └── responsive.css    Mobile adjustments
├── js/
│   ├── main.js           Entry point: initializes the modules
│   ├── config.js         Business data (contact info, carousel photos)
│   ├── data/productos.js Catalog data (separated from the view)
│   ├── utils.js          Reusable pure functions
│   ├── catalogo.js       Filters and product card rendering
│   ├── contacto.js       Contact links and form submission
│   ├── carrusel.js       Reusable carousel
│   ├── rol.js            Partner company section
│   └── ui.js             Mobile menu and footer
└── img/                  Photos and logos
```

## Run locally
Since it uses ES Modules (`import`/`export`), opening `index.html` directly won't work. Serve it with a local server:

```bash
python -m http.server 8000
```

then open `http://localhost:8000` (or use the *Live Server* extension in VS Code).

## Author
Built by **Leonardo Farid Tello Moscoso**, student of the Programming Technical Degree (Tecnicatura Universitaria en Programación) at UTN FRGP.

Photos, logos and texts belong to Petits Ambientaciones and are included only to showcase the project.
