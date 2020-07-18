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

    if (cart.length < 1) {
      return "Your shopping cart is empty."
    } else if (cart.length === 1) {
      return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`

    } else if (cart.length === 2) {
      return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`
    } else {

      for (var i = 0; i < cart.length -1; i++) {
        cartList += `${cart[i].itemName} at $${cart[i].itemPrice}, `
        var lastItem = `and ${cart[cart.length-1].itemName} at $${cart[cart.length-1].itemPrice}.`;
      }
      return `In your cart, you have ${cartList}${lastItem}`
    }
}

function total() {
  // write your code her
  var totalAmount = 0;
  for (var i = 0; i < cart.length; i++) {
    var currentPrice = cart[i].itemPrice;
    totalAmount += currentPrice;
  }

  return totalAmount;
}

function removeFromCart(item) {
  //item
  //i want to search the cart/object.itemName and see if it exists
  for (var i = 0; i < cart.length; i++) {
    JSON.stringify(cart[i])
    if (item === cart[i].itemName) {
      cart.splice(i, 1);
      return cart;
    } else {
      console.alert(`That item is not in your cart.`)
    }
  }
}

function placeOrder(cardNumber) {
  // write your code here
}
