

const cart = ["shoes", "bag", "jeans"];

const promise = createOrder(cart);

promise
  .then(function (orderId) {
    proceedToPayment(orderId);
  })
  .catch(function (error) {
    console.error(error.message);
  });

function proceedToPayment(orderId) {
  console.log("proceed to payment", orderId);
}
function validateCart() {
  return true;
}

function createOrder(cart) {
  const pr = new Promise(function (resolve, reject) {
    if (!validateCart()) {
      const err = new Error("order not created");
      reject(err);
    } else {
      const orderId = 1234;
      if (orderId){setTimeout(function(){
        resolve(orderId);
      },2000)}
      
    }
  });
  return pr;
}

