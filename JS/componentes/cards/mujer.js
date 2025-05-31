const accesoriosProducts = [
  {
    title: "Mujer 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: 9990,
    image: "../Assets/mujer/mujer1.avif"
  },
  {
    title: "Mujer 2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: 5963,
    image: "../Assets/mujer/mujer2.avif"
  },
  {
    title: "Mujer 3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: 7410,
    image: "../Assets/mujer/mujer3.avif"
  },
  {
    title: "Mujer 4",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: 9963,
    image: "../Assets/mujer/mujer4.avif"
  },
  {
    title: "Mujer 5",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: 8887,
    image: "../Assets/mujer/mujer5.avif"
  },
  {
    title: "Mujer 6",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: 454,
    image: "../Assets/mujer/mujer6.avif"
  }
];


renderCards(accesoriosProducts, 'productContainer');
attachCardEvents();