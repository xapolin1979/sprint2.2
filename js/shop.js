// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
var products = [
  {
    id: 1,
    name: "cooking oil",
    price: 10.5,
    type: "grocery",
    offer: {
      number: 3,
      percent: 20,
    },
  },
  {
    id: 2,
    name: "Pasta",
    price: 6.25,
    type: "grocery",
  },
  {
    id: 3,
    name: "Instant cupcake mixture",
    price: 5,
    type: "grocery",
    offer: {
      number: 10,
      percent: 30,
    },
  },
  {
    id: 4,
    name: "All-in-one",
    price: 260,
    type: "beauty",
  },
  {
    id: 5,
    name: "Zero Make-up Kit",
    price: 20.5,
    type: "beauty",
  },
  {
    id: 6,
    name: "Lip Tints",
    price: 12.75,
    type: "beauty",
  },
  {
    id: 7,
    name: "Lawn Dress",
    price: 15,
    type: "clothes",
  },
  {
    id: 8,
    name: "Lawn-Chiffon Combo",
    price: 19.99,
    type: "clothes",
  },
  {
    id: 9,
    name: "Toddler Frock",
    price: 9.99,
    type: "clothes",
  },
];

// => Reminder, it's extremely important that you debug your code.
// ** It will save you a lot of time and frustration!
// ** You'll understand the code better than with console.log(), and you'll also find errors faster.
// ** Don't hesitate to seek help from your peers or your mentor if you still struggle with debugging.

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cartList = [];
var total = 0;
let descuento = 0;
let subtotalWithDiscount = 0;
let lista = document.querySelector("#cart_list");
let precioFinal = document.querySelector("#total_price");
let carrito = document.querySelector("#count_product");

// Exercise 1
function buy(id) {
  // 1. Loop for to the array products to get the item to add to cart
  // 2. Add found product to the cart array
  total++;
  carrito.innerHTML = total;

  products.forEach((productos) => {
    if (productos.id == id) {
      if (!cartList.includes(productos)) {
        productos.quantity = 1;
        cartList.push(productos);
      } else {
        productos.quantity++;
      }
    }
  });

  calculateTotal();
}

// Exercise 2
function cleanCart() {
  total = 0;
  carrito.innerHTML = total;
  cartList = [];
  lista.innerHTML = "";
  precioFinal.innerHTML = 0;
}

// Exercise 3
function calculateTotal() {
  // Calculate total price of the cart using the "cartList" array
  applyPromotionsCart();
  subtotalWithDiscount = 0;
  cartList.forEach((productos) => {
    subtotalWithDiscount += parseFloat(productos.subtotal);
  });

  subtotalWithDiscount = subtotalWithDiscount.toFixed(2);
}

// Exercise 4
function applyPromotionsCart() {
  // Apply promotions to each item in the array "cart"

  for (let i = 0; i < cartList.length; i++) {
    cartList[i].subtotal = (cartList[i].quantity * cartList[i].price).toFixed(
      2
    );

    if (
      cartList[i].hasOwnProperty("offer") &&
      cartList[i].quantity == cartList[i].offer.number
    ) {
      descuento =
        ((cartList[i].quantity * cartList[i].price) / 100) *
        cartList[i].offer.percent;
      cartList[i].subtotal = (
        cartList[i].quantity * cartList[i].price -
        descuento
      ).toFixed(2);
    }
    console.log(cartList[i].subtotal);
  }

  printCart();
}

// Exercise 5
function printCart() {
  // Fill the shopping cart modal manipulating the shopping cart dom

  listaProductosElegidos = "";

  for (let i = 0; i < cartList.length; i++) {
    listaProductosElegidos += `
    <tr>
    <th>${cartList[i].name}</th>
    <td>$${cartList[i].price}</td>
    <td>${cartList[i].quantity}</td>
    <td> ${cartList[i].subtotal} </td>

    <td><img class="menosCantidad" onclick="removeFromCart(${cartList[i].id})" src="./images/signo-menos.png" alt=""></td>
     
  </tr>
    
 `;
  }

  lista.innerHTML = listaProductosElegidos;
  precioFinal.innerHTML = subtotalWithDiscount;
}

// ** Nivell II **

// Exercise 7
function removeFromCart(id) {
  total--;
  carrito.innerHTML = total;
  for (let i = 0; i < cartList.length; i++) {
    if (cartList[i].id == id) {
      cartList[i].quantity = cartList[i].quantity - 1;

      if (cartList[i].quantity < 1) {
        cartList.splice(i, 1);
      }
    }
  }
  applyPromotionsCart();
  calculateTotal();
  printCart();
}

function open_modal() {
  printCart();
  calculateTotal();
}
