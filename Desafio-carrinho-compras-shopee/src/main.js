import createItem from "./services/item.js";
import * as cartService from "./services/cart.js";

// Carrinho sendo criado
const myCart = [];

console.log("Welcome to your Shopee Cart!\n----------------");

// Criando Itens
const item1 = await createItem("Teclado Logitech", 100.0, 3);
const item2 = await createItem("Mouse Logitech", 159.99, 2);
const item3 = await createItem("HeadSet", 659.99, 4);

// Adicionando Itens
await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);
await cartService.addItem(myCart, item3);

// Removendo Itens
await cartService.removeItem(myCart, item1);

// Mostrando Itens
await cartService.displayCart(myCart);

// Deletando itens
// await cartService.deleteItem(myCart, item3.name);

// Total Itens
await cartService.calculateTotal(myCart);
