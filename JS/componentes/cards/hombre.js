/*const accesoriosProducts = [
  {
    title: "Camiseta Nike Francia Blanca",
    description: "Modelo oficial de la selección francesa. Ideal para hinchas y coleccionistas del fútbol.",
    price: 9990,
    image: "../Assets/hombre/hombre1.avif"
  },
  {
    title: "Remera Nike Negra Dry-FIT",
    description: "Diseño clásico y liviano con tecnología Dry-FIT. Perfecta para entrenamientos o uso diario.",
    price: 3692,
    image: "../Assets/hombre/hombre2.avif"
  },
  {
    title: "Musculosa Nike Pro Negra",
    description: "Musculosa de alto rendimiento, diseñada para potenciar tus entrenamientos más exigentes.",
    price: 33379,
    image: "../Assets/hombre/hombre3.avif"
  },
  {
    title: "Buzo Nike Sportswear Azul",
    description: "Abrigo con capucha y cierre frontal. Estilo moderno para mantener el calor sin perder comodidad.",
    price: 5874,
    image: "../Assets/hombre/hombre4.avif"
  },
  {
    title: "Pantalón Cargo Nike Negro",
    description: "Pantalón casual con bolsillos funcionales. Comodidad urbana con estilo versátil.",
    price: 666,
    image: "../Assets/hombre/hombre5.avif"
  },
  {
    title: "Short Nike Court Blanco",
    description: "Short deportivo ideal para entrenamientos o juegos de tenis. Ligero y cómodo.",
    price: 1235,
    image: "../Assets/hombre/hombre6.avif"
  }
];


renderCards(accesoriosProducts, 'productContainer');
attachCardEvents();*/

fetch('../JSON/hombre.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('No se pudo cargar el archivo JSON de hombre.');
    }
    return response.json();
  })
  .then(hombreProducts => {
    renderCards(hombreProducts, 'productContainer'); 
    attachCardEvents();
  })
  .catch(error => {
    console.error('Error al cargar productos hombre:', error);
  });
