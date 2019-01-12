var db = new PouchDB('orderProduct');
var dbCart = new PouchDB('cart');
window.onload = function () {
  var cakeWeight = document.getElementById('cake-weight');
  var cakeFlavor = document.getElementById('cake-flavor');
  var cakePrice = document.getElementById('cake-price');
  var productImage = document.getElementById('product-image');
  var productname = document.getElementById('product-name');
  var btnPlaceOrder = document.getElementById('btn-place-order');
  var productDetails = {};
  var price = 0;

  dbCart.allDocs({include_docs: true, descending: true}, function(err, doc) {
    console.log('All cart items',doc);
  });



  var addToCart = async function () {
    var docToAdd = {
      name: productDetails.name,
      image: productDetails.image,
      price:price,
      weight:cakeWeight.value,
      qty:1
    };
    console.log('Adding to cart',docToAdd);
    try {
      var response = await dbCart.post(docToAdd);
      console.log('successfully Added',response);
    } catch (error) {
      console.log('error on adding to  cart',error);
      
    }
  }
  btnPlaceOrder.onclick = addToCart;

  var calculatePrice = function () {
    price = cakeWeight.value * cakeFlavor.value;
    console.log(cakeFlavor.value, cakeWeight.value);
    cakePrice.innerText = price;
  }
  cakeFlavor.onchange = calculatePrice;
  cakeWeight.onchange = calculatePrice;
  calculatePrice();

  db.get('selectedProduct').then(function (doc) {
    console.log('got this', doc);
    productDetails.image = doc.productImage;
    productDetails.name = doc.productname;
    productImage.src = doc.productImage;
    productname.innerText = doc.productname;
    return db.remove(doc);
  }).then(function (result) {
    // handle result
  }).catch(function (err) {
    console.log('error', err);
  });
}