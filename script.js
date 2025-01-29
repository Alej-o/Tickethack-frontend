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

function searchTrip() {
    document.querySelector('#btn-search').addEventListener('click', function() {
        const departure = document.querySelector('#search-departure').value;       
        const arrival = document.querySelector('#search-arrival').value;
        const date = document.querySelector('input[type="date"]').value;

        const searchParams = new URLSearchParams({
            departure: departure,
            arrival: arrival,
            date: date
        });

        fetch(`http://localhost:3000/trips?${searchParams.toString()}`)
            .then(response => response.json())
            .then(data => {
                const rightBox = document.querySelector('#right-box');
                rightBox.innerHTML = '';

                if (!data.trips) {
                    document.querySelector('#train-logo').src = './images/notfound.png';
                    rightBox.innerHTML = '<p>No trip found.</p>';
                    return;
                }

                    data.trips.forEach(trip => {
                    const time = new Date(trip.date).getHours();

                    rightBox.innerHTML += `
                        <div id="right-box">
                            <p class="trip">${trip.departure} > ${trip.arrival}</p>
                            <p class="hours">${time}</p>
                            <p class="price">${trip.price}€</p>
                            <button class="book-button" data-trip-id="${trip._id}">Book</button>
                        </div>
                    `;
                });

                // Gestion des boutons de réservation
                // document.querySelectorAll('.book-button').forEach(button => {
                //     button.addEventListener('click', function() {
                //         const tripId = this.getAttribute('data-trip-id');
                //         fetch('http://localhost:3000/bookings', {
                //             method: 'POST',
                //             headers: {
                //                 'Content-Type': 'application/json'
                //             },
                //             body: JSON.stringify({ tripId: tripId })
                //         })
                //         .then(response => response.json())
                //         .then(data => {
                //             if (data.success) {
                //                 window.location.href = '/carts';
                //             }
                //         });
                    });
                });
            }
            // });
    // });
// }

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
        </div>`
      resetInputAddMessage();
      deleteMessage();
      countMessage();
    })
  }
     bookTrip()