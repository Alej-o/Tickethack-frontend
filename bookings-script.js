//Aller sur Cart
function goToCart() {
    document.querySelector('#cart').addEventListener('click', function() {
        window.location.href = "cart.html";
    });
};

goToCart();
//Retour sur la page principale
function goToIndex () {
    document.querySelector('#tickethack').addEventListener('click', function() {
        window.location.href = "index.html";
    });
};
  
goToIndex();
