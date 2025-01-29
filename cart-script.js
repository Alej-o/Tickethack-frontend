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
            if (data.cart.length === 0) {
                document.querySelector('.center-box-cart').innerHTML = "<h4>Votre panier est vide.</h4>";
                return;
            }
            let cartHTML = `
                <div class="new-trip-box">
                    <h4>My cart</h4>
                    <div id="new-trip">
            `;

            data.cart.forEach((cart, index) => {
                cartHTML += `
                    <div class="trip-item">
                        <h4>${cart.trip.departure} > ${cart.trip.arrival}</h4>
                        <h4>${new Date(cart.trip.date).toLocaleString('fr-FR')}</h4>
                        <h4>€${cart.trip.price}</h4>
                        <button type="button" id="btn-delete" data-index="${index}">X</button>
                    </div>
                `;
            });

            const totalPrice = data.cart.reduce((sum, cart) => sum + cart.trip.price, 0);
            cartHTML += `
                    </div>
                    <div id="total">
                        <h4>Total: €${totalPrice}</h4>
                        <button type="button" id="btn-purchase">Purchase</button>
                    </div>
                </div>
            `;

            document.querySelector('.center-box-cart').innerHTML = cartHTML;

            document.querySelectorAll('.btn-delete').forEach(btn => {
                btn.addEventListener('click', function () {
                    const index = this.getAttribute("data-index");
                    data.cart.splice(index, 1); 
                    deployCart(); 
                });
            });

        })

}

deployCart();
