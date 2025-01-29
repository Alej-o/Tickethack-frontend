//Retour sur la page principale
function goToIndex () {
    document.querySelector('#tickethack').addEventListener('click', function() {
        window.location.href = "index.html";
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
fetch('http://localhost:3000/trips')
.then(response => response.json())
.then(data => {
    if(data.trips){
        document.querySelector('').innerHTML += `
        
    `;
    }

})
// dsearchTrip();


function bookTrip() {
    document.querySelector('#btn-book').addEventListener('click', function() {
      const departure = document.querySelector('#search-departure').value;       
      const arrival = document.querySelector('#search-arrival').value;
      const date = document.querySelector('#').value;
      const price = document.querySelector().value;
      document.querySelector('#containertrip').innerHTML += `
        <div class="new-trip-box">
            <div id="new-trip">
                <h4>${departure} > ${arrival}</h4>
                <h4>${date}</h4>
                <h4>${price}</h4>
                <button type="button" id="btn-delete">X</button>
            </div>
        </div>
      // resetInputAddMessage();
      // deleteMessage();
      // countMessage();
//     })
//   }
  
//   bookTrip();