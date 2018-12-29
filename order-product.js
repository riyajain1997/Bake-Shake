var db = new PouchDB('orderProduct');
var remoteCouch = false;
window.onload = function () {
    var cakeWeight = document.getElementById('cake-weight');
    var cakeFlavor = document.getElementById('cake-flavor');
    var cakePrice = document.getElementById('cake-price');
    var productImage = document.getElementById('product-image');

    var calculatePrice = function () {
        var price = cakeWeight.value * cakeFlavor.value;
        console.log(cakeFlavor.value);
        cakePrice.innerText = price;
    }
    cakeFlavor.onchange = calculatePrice;
    cakeWeight.onchange = calculatePrice;
    calculatePrice();

    db.get('selectedProduct').then(function(doc) {
        console.log('got this',doc);
        productImage.src = doc.productImage;
        return db.remove(doc);
      }).then(function (result) {
        // handle result
      }).catch(function (err) {
        console.log('error',err);
      });
    
}