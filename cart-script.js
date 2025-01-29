//Retour sur la page principale
function goToIndex () {
    document.querySelector('#tickethack').addEventListener('click', function() {
        window.location.href = "index.html";
    });
};
  
goToIndex();

//Aller sur la page "Bookings"
function goToBookings () {
    document.querySelector('#bookings').addEventListener('click', function() {
        window.location.href = "bookings.html";
    });
};

goToBookings();

//Affichage contenu de la page "Cart"
function deployCart() {
    fetch('http://localhost:3000/carts')
        .then(response => response.json())
        .then(data => {
            let cartHTML = `
                <div class="new-trip-box">
                    <h4>My cart</h4>
                    <div id="new-trips">
            `;
            data.cart.forEach(cart => {
                cartHTML += `
                    <div class="trip-item">
                        <h4>${cart.trip.departure} > ${cart.trip.arrival}</h4>
                        <h4>${new Date(cart.trip.date).toLocaleString('fr-FR')}</h4>
                        <h4>€${cart.trip.price}</h4>
                        <button type="button" class="btn-delete">X</button>
                    </div>
                `;
            });

            cartHTML += `
                    </div>
                    <div id="total">
                        <h4>Total: €${data.cart.reduce((sum, cart) => sum + cart.trip.price, 0)}</h4>
                        <button type="button" id="btn-purchase">Purchase</button>
                    </div>
                </div>
            `;

            document.querySelector('.center-box-cart').innerHTML = cartHTML;
            document.querySelectorAll('.btn-delete').forEach((btn, index) => {
                btn.addEventListener('click', function () {
                    data.cart.splice(index, 1); // Supprime l'élément du tableau
                    deployCart(); 
                });
            });

        })
        .catch(error => console.error("Erreur :", error));
}

deployCart();