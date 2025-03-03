// Classe para criar o item
class Item {
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }

  subtotal() {
    return this.price * this.quantity;
  }

  updateSubtotal() {
    return this.subtotal();
  }
}

export default function createItem(name, price, quantity) {
  return new Item(name, price, quantity);
}
