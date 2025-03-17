document.addEventListener('DOMContentLoaded', function() {
    const cartIcon = document.getElementById('cart-icon');
    const cartSection = document.getElementById('cart');
    const cartItemsContainer = document.querySelector('.cart-items');
    const cartTotalElement = document.getElementById('cart-total');
    let cartTotal = 0;

    cartIcon.addEventListener('click', function() {
        cartSection.scrollIntoView({ behavior: 'smooth' });
    });

    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productCard = button.parentElement;
            const productName = productCard.querySelector('h3').innerText;
            const productPrice = parseFloat(productCard.querySelector('p').innerText.replace('$', ''));
            addItemToCart(productName, productPrice);
        });
    });

    function addItemToCart(name, price) {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <p>${name}</p>
            <p>$${price.toFixed(2)}</p>
        `;
        cartItemsContainer.appendChild(cartItem);
        cartTotal += price;
        cartTotalElement.innerText = cartTotal.toFixed(2);
    }
});
