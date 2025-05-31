const accesoriosProducts = [
  {
    title: "Hombre 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: 9990,
    image: "../Assets/hombre/hombre1.avif"
  },
  {
    title: "Hombre 2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: 3692,
    image: "../Assets/hombre/hombre2.avif"
  },
  {
    title: "Hombre 3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: 33379,
    image: "../Assets/hombre/hombre3.avif"
  },
  {
    title: "Hombre 4",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: 5874,
    image: "../Assets/hombre/hombre4.avif"
  },
  {
    title: "Hombre 5",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: 666,
    image: "../Assets/hombre/hombre5.avif"
  },
  {
    title: "Hombre 6",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: 1235,
    image: "../Assets/hombre/hombre6.avif"
  }
];


renderCards(accesoriosProducts, 'productContainer');
attachCardEvents();