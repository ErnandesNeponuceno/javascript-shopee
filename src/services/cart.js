async function addItem (userCart, item) {
    userCart.push(item);
}    

async function deleteItem (userCart, nameItem) {
    const index = userCart.findIndex((item)=>item.name === nameItem)
    if (index !== -1){
        userCart.splice(index, 1)
    }
}    

async function removeItem (userCart, item) {
   const indexFound = userCart.findIndex((produto) => produto.name === item.name)
  
   if(indexFound == -1){
    console.log('item não encontrado')
    return;
   }

   if(userCart[indexFound].quantity > 1){
        userCart[indexFound].quantity -= 1;
   } else if (userCart[indexFound].quantity === 1){
        userCart.splice(indexFound, 1);
   }
} 

async function calculaTotal (userCart) {
    const result = (userCart.reduce((total, item) => total + item.subtotal(), 0)) ;
    console.log(`\nTotal: ${result.toFixed(2)}`)
} 

async function displayCart(userCart) {
    console.log('Shopee cart list: ');
    userCart.forEach((item, index) => {
        console.log(`${index + 1}. ${item.name} - R$ ${item.price} | ${item.quantity}x | Subtotal ${item.subtotal()}`)
    });
}

export {
    addItem, deleteItem, removeItem, calculaTotal, displayCart
}