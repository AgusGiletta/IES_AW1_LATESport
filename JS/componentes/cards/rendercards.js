function renderCards(products, containerId) {
  const container = document.getElementById(containerId);
  
  products.forEach(product => {
    const cardHTML = `
      <div class="col">
        <div class="card h-100 shadow-sm">
          <img src="${product.image}" class="card-img-top img-producto" alt="${product.title}">
          <div class="card-body text-center d-flex flex-column">
            <h5 class="card-title">${product.title}</h5>
            <p class="card-text">${product.description}</p>
            <p class="fw-bold text-success">
              Precio unitario: $<span class="precio-unitario">${product.price}</span><br>
              Total: $<span class="precio-total">0</span>
            </p>
            <div class="d-flex justify-content-center align-items-center gap-2 my-2">
              <button class="btn btn-outline-secondary btn-decrease">-</button>
              <span class="quantity">0</span>
              <button class="btn btn-outline-secondary btn-increase">+</button>
            </div>
            <button class="btn btn-outline-danger btn-add-to-cart">Añadir al carrito</button>
          </div>
        </div>
      </div>
    `;
    
    container.insertAdjacentHTML('beforeend', cardHTML);
  });
}

function attachCardEvents() {
  const cards = document.querySelectorAll('.card');

  cards.forEach(card => {
    const decreaseBtn = card.querySelector('.btn-decrease');
    const increaseBtn = card.querySelector('.btn-increase');
    const quantitySpan = card.querySelector('.quantity');
    const priceUnitario = parseFloat(card.querySelector('.precio-unitario').textContent);
    const totalSpan = card.querySelector('.precio-total');

    let quantity = 0;

    increaseBtn.addEventListener('click', () => {
      quantity++;
      quantitySpan.textContent = quantity;
      totalSpan.textContent = (quantity * priceUnitario).toFixed(2);
    });

    decreaseBtn.addEventListener('click', () => {
      if (quantity > 0) {
        quantity--;
        quantitySpan.textContent = quantity;
        totalSpan.textContent = (quantity * priceUnitario).toFixed(2);
      }
    });
  });
} 



