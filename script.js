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
        fetch('http://localhost:3000/carts')
            .then(response => response.json())
            .then(data => {
                if (!data) {
                    window.location.href = "cart.html";
                } else {
                    window.location.href = "cart.html";
                    document.querySelector('#container-trip').innerHTML += `
                        <div class="new-trip-box">
                            <h4>My cart</h4>
                                <div id="new-trip">
                                    <h4>${data.departure} > ${data.arrival}</h4>
                                    <h4>${data.date}</h4>
                                    <h4>${data.price}</h4>
                                    <button type="button" id="btn-delete">X</button>
                                </div>
                                <div id="total">
                                    <h4>Total: ${sommetotale/*fonction à créer*/}euros</h4>
                                    <button type="button" id="btn-purchase">Purchase</button>
                                </div>
                            </div>
                        </div>
                    `
                    //bouton delete des trips dans Cart, vérifier si ça fonctionne
                    
                    // document.querySelectorAll('#btn-delete').forEach(btn => {
                    //     btn.addEventListener('click', function(event) {
                    //         event.target.closest('.new-trip-box').remove();
                    //     });
                    // });
                }
            })
        
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
        const inputs = document.querySelectorAll('.search');
        const departure = inputs[0].value;
        const arrival = inputs[1].value;
        const date = document.querySelector('#calendar').value;

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

                if (!data.trips || data.trips.length === 0) {
                    document.querySelector('#train-logo').src = './images/notfound.png';
                    rightBox.innerHTML = '<p>No trip found.</p>';
                    return;
                }

                data.trips.forEach(trip => {
                    const tripDate = new Date(trip.date);
                    const time = tripDate.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' });

                    rightBox.innerHTML += `
                        <div class="trip-card">
                            <p class="trip">${trip.departure} > ${trip.arrival}</p>
                            <p class="hours">${time}</p>
                            <p class="price">${trip.price}€</p>
                            <button class="book-button" data-trip-id="${trip._id}">Book</button>
                        </div>
                    `;
                    cartTrip()
                });
               
            })
    });
}

searchTrip();

 // Gestion des boutons de réservation
 function cartTrip() {
                document.querySelectorAll('.book-button').forEach(button => {
                    button.addEventListener('click', function() {
                        const tripId = this.getAttribute('data-trip-id');
                        fetch('http://localhost:3000/carts', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({ tripId: tripId })
                        })
                        .then(response => response.json())
                        .then(data => {
                            if (data.success) {
                                window.location.href = '/carts';
                            }
        
                    });
                });
                });
            }
            cartTrip()

// 
