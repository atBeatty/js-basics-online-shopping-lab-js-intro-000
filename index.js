var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 var price = Math.floor(Math.random()*100);
 var itemObject = {};

 itemObject.itemName = item;
 itemObject.itemPrice = price;

 cart.unshift(itemObject);

 return `${item} has been added to your cart.`
}

function viewCart() {
  // write your code here
  var cartList = '';

  for (var i = 0; i < cart.length; i++) {
    if (cart.length === 0) {
      return "Your shopping cart is empty."
    } else if (cart.length === 1) {
      return `In your cart, you have ${cart[i].itemName} at $${cart[i].itemPrice}.`

    } else if (cart.length === 2) {
      return `In your cart, you have ${cart[i].itemName} at $${cart[i].itemPrice}, and ${cart[i+1].itemName} at $${cart[i+1].itemPrice}.`
    } else if (cart.length >= 3) {
      cartList += `${cart[i].itemName} at $${cart[i].itemPrice}.`
    }
  }



}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
