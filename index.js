import createItem from "./src/services/item.js";
import * as cartService from "./src/services/cart.js"
const myCart = [];

const item1 = await createItem('Caderno', 20.80, 1);
const item2 = await createItem('Lapis', 1.80, 3);
const item3 = await createItem('Caneta', 3.80, 2);

await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);
await cartService.addItem(myCart, item3);

// await cartService.deleteItem(myCart, item1.name);

await cartService.calculaTotal (myCart)

await cartService.removeItem (myCart, item3)
       
await cartService.displayCart(myCart)