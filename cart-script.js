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
function deployCart () {
    fetch('http://localhost:3000/carts')
        .then(response => response.json())
        .then(data => {
                // data.forEach(cart => {
                //     const cartDate = new Date(cart.date);
                //     const time = cartDate.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' });

                document.querySelector('.center-box-cart').innerHTML = `
                    <div class="new-trip-box">
                        <h4>My cart</h4>
                            <div id="new-trip">
                                <h4>${data.trip[].departure} > ${data.trip.arrival}</h4>
                                <h4>${data.trip.date}</h4>
                                <h4>${data.trip.price}</h4>
                                <button type="button" id="btn-delete">X</button>
                            </div>
                            <div id="total">
                                <h4>Total:€</h4>
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
                })
            }
        // );
// };

deployCart();