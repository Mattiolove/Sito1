// Script.js

// Ottieni riferimenti agli elementi del DOM
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-btn');
const addToCartButtons = document.getElementsByClassName('add-to-cart-btn');
const cartItemsList = document.getElementById('cart-items');
const checkoutButton = document.getElementById('checkout-btn');

// Aggiungi event listener per la barra di ricerca
searchButton.addEventListener('click', searchGames);

// Aggiungi event listener per i pulsanti "Aggiungi al Carrello"
for (let i = 0; i < addToCartButtons.length; i++) {
  addToCartButtons[i].addEventListener('click', addToCart);
}

// Funzione di ricerca giochi
function searchGames() {
  const searchTerm = searchInput.value.toLowerCase();
  const gameItems = document.getElementsByClassName('game-item');

  // Nascondi tutti i giochi
  for (let i = 0; i < gameItems.length; i++) {
    gameItems[i].style.display = 'none';
  }

  // Mostra solo i giochi che corrispondono al termine di ricerca
  for (let i = 0; i < gameItems.length; i++) {
    const gameName = gameItems[i].getElementsByTagName('h3')[0].innerText.toLowerCase();
    if (gameName.includes(searchTerm)) {
      gameItems[i].style.display = 'block';
    }
  }
}

// Funzione per aggiungere un gioco al carrello
function addToCart(event) {
  const gameItem = event.target.parentNode;
  const gameName = gameItem.getElementsByTagName('h3')[0].innerText;

  // Crea un nuovo elemento li per il carrello
  const cartItem = document.createElement('li');
  cartItem.innerText = gameName;

  // Aggiungi l'elemento al carrello
  cartItemsList.appendChild(cartItem);
}

// Event listener per il pulsante "Checkout"
checkoutButton.addEventListener('click', checkout);

// Funzione per il checkout
function checkout() {
  // Ottieni tutti gli elementi nel carrello
  const cartItems = cartItemsList.getElementsByTagName('li');

  // Stampa i giochi nel carrello
  console.log('Hai acquistato i seguenti giochi:');

  for (let i = 0; i < cartItems.length; i++) {
    const gameName = cartItems[i].innerText;
    console.log(gameName);
  }

  // Svuota il carrello
  cartItemsList.innerHTML = '';
}
