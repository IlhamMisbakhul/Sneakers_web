document.addEventListener('DOMContentLoaded', function () {
    //Menangkap Form
    const buyButtons = document.querySelectorAll('.buy-button');
    const cartItems = document.getElementById('cart-items');

    buyButtons.forEach(button => {
        button.addEventListener('click', function () {
            const product = button.closest('.product');
            const productId = product.getAttribute('data-product-id');
            const productName = product.querySelector('h2').innerText;
            const productImage = product.querySelector('img').scr;

            //Menambahkan Product ke Cart
            const cartItem = document.createElement('li');
            cartItem.innerText = productName;
            cartItem.HTML = <img scr= "{produkImage}" alt="{produkName}"> {produkName};
            </img>
            cartItems.appendChild(cartItem);
        });
    });
});

