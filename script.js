//Retour sur la page principale
function goToIndex () {
    document.querySelector('#tickethack').addEventListener('click', function() {
        window.location.href = "index.html";
        fetch('http://localhost:3000/trips')
	    .then(response => response.json())
	    .then(data => {
            if(data.trips){
                document.querySelector('').innerHTML += `
				
			`;
            }
    
        })
    });
};
  
goToIndex();

//Aller sur la page "Cart"
function goToCart () {
    document.querySelector('#cart').addEventListener('click', function() {
        window.location.href = "cart.html";
    });
};
  
goToCart();

//Aller sur la page "Bookings"
function goToBookings () {
    document.querySelector('#bookings').addEventListener('click', function() {
        window.location.href = "bookings.html";
    });
};
  
goToBookings();

//Moteur de recherche
// function searchTrip () {
//     document.querySelector('#btn-search').addEventListener('click', function() {
//         const departure = document.querySelector('#search-departure').value;       
//         const arrival = document.querySelector('#search-arrival').value;

//         fetch('http://localhost:3000/trips')
//             .then(response => response.json())
//             .then(data => {
//                 if (departure === '' || arrival === '') {
//                     document.querySelector('#train-logo').src = './images/notfound.png';
//                     document.querySelector('p').textContent = 'No trip found.'
//                 } else {
//                     document.querySelector('#right-box').innerHTML += /* ????? */;
//                 };
//             });
//     });
// };
  
// dsearchTrip();