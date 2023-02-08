var shoppingcart = [
    {name: 'shirt', price: 300, quentity: 5},
    {name: 'pant', price: 300, quentity: 4},
    {name: 'shoe', price: 300, quentity: 2},
    {name: 'Belt', price: 300, quentity: 2},
]

function shoppingcartf(shoppingcart){
    let totalCost = 0;
    for (let i = 0; i < shoppingcart.length; i++) {
          const product = shoppingcart[i];
          const productTotal = product.price * product.quentity
          totalCost = totalCost + productTotal; 
    }
    return totalCost;
}


var mycart = shoppingcartf(shoppingcart);
console.log(mycart);