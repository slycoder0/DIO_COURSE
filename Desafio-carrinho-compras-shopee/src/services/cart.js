// -> Adicionar item no carrinho
async function addItem(userCart, item) {
  userCart.push(item);
}

// -> Calcular total do carrinho
async function calculateTotal(userCart) {
  console.log("\n---------------");
  console.log("Shopee Cart total:");
  const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
  console.log(`Total: R$ ${result.toFixed(2)}`);
}

// -> Remover item no carrinho (diminuir um item)
async function removeItem(userCart, item) {
  const indexFound = userCart.findIndex((p) => p.name === item.name);

  if (indexFound === -1) {
    console.log("Item não encontrado");
    return;
  }

  if (userCart[indexFound].quantity > 1) {
    userCart[indexFound].quantity -= 1;
    return;
  }

  userCart.splice(indexFound, 1);
}

// -> Mostrar carrinho
async function displayCart(userCart) {
  userCart.forEach((item, index) => {
    console.log(
      `\n${index + 1}. ${item.name} - R$ ${item.price} | ${
        item.quantity
      }x | Subtotal R$ ${item.subtotal()}`
    );
  });
}

// -> Deletar item
async function deleteItem(userCart, name) {
  const index = userCart.findIndex((item) => item.name === name);
  if (index !== -1) {
    userCart.splice(index, 1);
  }
}

export { addItem, calculateTotal, deleteItem, removeItem, displayCart };
