//Aller sur Cart
function goToCart() {
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

//Pour trouver tous les trajets
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
                if (!data.trips || data.trips.length === 0) {
                    document.querySelector('#right-box').innerHTML = '<p>No trip found.</p>';
                    document.querySelector('#train-logo').src = "./images/notfound.png";
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
                });

                
                bookTrip();
            });
    });
}

searchTrip();

// Gestion des boutons de réservation
function bookTrip() {
    document.querySelectorAll('.book-button').forEach(button => {
        button.addEventListener('click', function() {
            const tripId = this.getAttribute('data-trip-id');

            fetch('http://localhost:3000/carts/save', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ tripId: tripId })  
            })
           
    
        });
    });
};