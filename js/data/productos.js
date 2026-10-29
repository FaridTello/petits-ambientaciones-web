// productos.js — Catálogo (la "base de datos" de la web).
// Para agregar un producto, copiá un bloque { ... } y cambiá los datos.
// precio: número sin puntos, o null si es "a presupuestar".
// cod: código del catálogo de Tomi (opcional). img: null si no hay foto (muestra el logo de Petits).
// cat: tiene que coincidir con una de las categorías existentes para que funcione el filtro.

export const PRODUCTOS = [
  {cat:"Peloteros", cod:"9.1", nombre:"Pelotero 1,50 x 1,50", img:"pelotero-150.webp", edad:"1 a 3 años", precio:190000,
   incluye:["1 pelotero cuadrado","1 tobogán","1000 pelotas (mix pelotas y formitas)"]},
  {cat:"Peloteros", cod:"9.2", nombre:"Pelotero 2 x 2", img:"pelotero-2x2.webp", edad:"2 a 4 años", precio:260000,
   incluye:["1 pelotero cuadrado","2 toboganes","1500 pelotas (mix pelotas y formitas)"]},
  {cat:"Peloteros", cod:"9.3", nombre:"Pelotero 2 x 4", img:"pelotero-2x4.webp", edad:"2 a 4 años", precio:410000,
   incluye:["1 pelotero rectangular","3 toboganes","2500 pelotas (mix pelotas y formitas)"]},
  {cat:"Peloteros", cod:"9.4", nombre:"Pelotero 3 x 6", img:null, edad:"2 a 5 años", precio:630000,
   incluye:["1 pelotero rectangular","4 toboganes","6000 pelotas (mix pelotas y formitas)"]},

  {cat:"Plazas", cod:"9.5", nombre:"Plaza Didáctica", img:"plaza-didactica.webp", edad:"2 a 4 años", precio:100000,
   incluye:["2 plazas blandas","5 piezas de goma espuma","3 cubos apilables"]},
  {cat:"Plazas", cod:"9.6", nombre:"Plaza Bloques Encastrables", img:"plaza-bloques.webp", edad:"2 a 5 años", precio:80000,
   incluye:["1 plaza blanda","200 bloques encastrables"]},
  {cat:"Plazas", cod:"9.7", nombre:"Plaza Animales", img:null, edad:"2 a 5 años", precio:150000,
   incluye:["2 plazas blandas","3 cubos apilables","4 puff animales de goma","1 jenga gigante"]},
  {cat:"Plazas", cod:"9.8", nombre:"Plaza Juegos", img:"plaza-juegos.webp", edad:"2 a 6 años", precio:200000,
   incluye:["2 plazas blandas","1 set de construcción","1 jenga gigante","6 cubos apilables"]},
  {cat:"Plazas", cod:"9.9", nombre:"Plaza Carpas Tipi", img:"plaza-tipi.webp", edad:"2 a 5 años", precio:300000,
   incluye:["5 carpas","5 colchonetas y 5 sábanas","10 almohadones (nórdicos y corderito)","5 bandejas"]},
  {cat:"Plazas", cod:"9.10", nombre:"Plaza Montessori", img:"plaza-montessori.webp", edad:"1 a 3 años", precio:200000,
   incluye:["2 plazas blandas","8 juegos"]},

  {cat:"Combos", cod:"9.11", nombre:"Combo A · Plaza Pelotero", img:"combo-a.webp", edad:"1 a 3 años", precio:350000,
   incluye:["1 plaza blanda","1 pelotero con tobogán","1000 pelotas (mix pelotas y formitas)","Set de 5 piezas y 3 cubos apilables"]},
  {cat:"Combos", cod:"9.12", nombre:"Combo B · Plaza Pelotero Premium", img:"combo-b.webp", edad:"2 a 5 años", precio:550000,
   incluye:["Plaza blanda","11 piezas","1 pelotero 1,20 x 1,20","500 pelotas (mix pelotas y formitas)"]},

  {cat:"Mobiliario", cod:"9.13", nombre:"Mesa Zigzag", img:"mob-zigzag.webp", edad:"160 x 80", precio:20000, unidad:"c/u",
   incluye:["Módulos que se unen en forma de onda"]},
  {cat:"Mobiliario", cod:"9.14", nombre:"Mesa Premium niños", img:"mob-premium.webp", edad:"160 x 80", precio:20000, unidad:"c/u",
   incluye:["Mesa infantil blanca","Combinala con sillas Tiffany"]},
  {cat:"Mobiliario", cod:"9.15", nombre:"Sillas Tiffany niños", img:"mob-premium.webp", edad:"Infantil", precio:3500, unidad:"c/u",
   incluye:["Silla Tiffany blanca tamaño niño"]},
  {cat:"Mobiliario", nombre:"Living para chicos de colores", img:"mob-living.webp", edad:"15 puff", precio:25300,
   incluye:["15 puff individuales","2 mesitas ratonas"]},
  {cat:"Mobiliario", nombre:"Mesa picnic con almohadones", img:"mob-picnic.webp", edad:"6 a 8 personas", precio:16500,
   incluye:["Mesa de 1,60 x 0,80 x 0,35 m","8 almohadones de piso de distintos colores"]},
  {cat:"Mobiliario", nombre:"Alfombra", img:"mob-picnic.webp", edad:"Decoración", precio:22000, unidad:"c/u",
   incluye:["Alfombra para zona de picnic o living"]},

  {cat:"Inflables", cod:"9.16", nombre:"Inflable A", img:"inflable-a.webp", edad:"3 x 3 m aprox.", precio:160000,
   incluye:["1 inflable","1 turbina","1 alargue de 10 m"]},
  {cat:"Inflables", cod:"9.17", nombre:"Inflable B", img:"inflable-b.webp", edad:"3 x 5 m aprox.", precio:280000,
   incluye:["1 inflable con tobogán","1 turbina","1 alargue de 10 m"]},
  {cat:"Inflables", cod:"9.18", nombre:"Inflable C", img:"inflable-c.webp", edad:"4 x 6 m aprox.", precio:400000,
   incluye:["1 inflable con tobogán","1 turbina","1 alargue de 10 m"]},

  {cat:"Ambientación", cod:"12.1", nombre:"Ambientación personalizada", img:"evento-rafa-mesa.webp", edad:"A medida", precio:null,
   incluye:["Cumpleaños, bautismos y comuniones","Globos, paneles, centros y más"]},
];
