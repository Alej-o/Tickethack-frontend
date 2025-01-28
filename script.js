//Retour sur la page principale
function goToIndex () {
    document.querySelector('#tickethack').addEventListener('click', function() {
        
    });
};
  
goToIndex();

//Aller sur la page "Cart"
function goToCart () {
    document.querySelector('#cart').addEventListener('click', function() {
        
    });
};
  
goToCart();

//Aller sur la page "Bookings"
function goToBookings () {
    document.querySelector('#bookings').addEventListener('click', function() {
        
    });
};
  
goToBookings();

//Moteur de recherche
function searchTrip () {
    document.querySelector('#btn-search').addEventListener('click', function() {
        fetch('http://localhost:3000/trips')
        .then(response => response.json())
        .then(data => {
            console.log(data);
        });
    });
};
  
searchTrip();
