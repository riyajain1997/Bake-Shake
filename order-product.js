var db = new PouchDB('orderProduct');
window.onload = function () {
    var cakeWeight = document.getElementById('cake-weight');
    var cakeFlavor = document.getElementById('cake-flavor');
    var cakePrice = document.getElementById('cake-price');
    var productImage = document.getElementById('product-image');
    var productname = document.getElementById('product-name');

    var calculatePrice = function () {
        var price = cakeWeight.value * cakeFlavor.value;
        console.log(cakeFlavor.value,cakeWeight.value);
        cakePrice.innerText = price;
    }
    cakeFlavor.onchange = calculatePrice;
    cakeWeight.onchange = calculatePrice;
    calculatePrice();

    db.get('selectedProduct').then(function(doc) {
        console.log('got this',doc);
        productImage.src = doc.productImage;
        productname.innerText = doc.productname;
        return db.remove(doc);
      }).then(function (result) {
        // handle result
      }).catch(function (err) {
        console.log('error',err);
      });
    
}