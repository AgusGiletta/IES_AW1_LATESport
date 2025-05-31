const accesoriosProducts = [
  {
    title: "Accesorio 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: 9990,
    image: "../Assets/accesorios/accesorio1.avif"
  },
  {
    title: "Accesorio 2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: 10500,
    image: "../Assets/accesorios/accesorio2.avif"
  },
  {
    title: "Accesorio 3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: 700,
    image: "../Assets/accesorios/accesorio3.avif"
  },
  {
    title: "Accesorio 4",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: 5896,
    image: "../Assets/accesorios/accesorio4.avif"
  },
  {
    title: "Accesorio 5",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: 36220,
    image: "../Assets/accesorios/accesorio5.avif"
  },
  {
    title: "Accesorio 6",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: 89,
    image: "../Assets/accesorios/accesorio6.avif"
  }
];

renderCards(accesoriosProducts, 'productContainer');
attachCardEvents();