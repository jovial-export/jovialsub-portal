let currentProduct = "";

let currentPrice = "";

function selectProduct(name, price, moq) {

    document.getElementById('click-sound').play();

    currentProduct = name;

    currentPrice = price;

    

    const screen = document.getElementById('display');

    screen.innerHTML = `

        >> PRODUCT: ${name.toUpperCase()}<br>

        >> EXPORT RATE: ${price}<br>

        >> MOQ: ${moq}<br>

        >> [READY FOR QUOTATION]

    `;

}

function sendToWhatsApp() {

    const qty = document.getElementById('qty-input').value;

    const phoneNumber = "918200313100"; // Your Verified Number

    if (!currentProduct || !qty) {

        alert("Please select a product and enter quantity.");

        return;

    }

    const message = `*JOVIALSUB EXPORT ENQUIRY*%0A--------------------------%0A*Product:* ${currentProduct}%0A*Quantity:* ${qty}%0A*Rate:* ${currentPrice}%0A--------------------------%0APlease send me a formal quote.`;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    

    window.open(whatsappUrl, '_blank');

}

function clearData() {

    if(confirm("Reset Terminal?")) { localStorage.clear(); location.reload(); }

}