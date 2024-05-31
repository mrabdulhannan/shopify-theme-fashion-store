document.addEventListener('DOMContentLoaded', function () {
  const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

  function renderWishlist() {
    const wishlistContainer = document.getElementById('wishlist-items');
    wishlistContainer.innerHTML = '';

    wishlist.forEach(product => {
      const productElement = document.createElement('div');
      productElement.innerHTML = `
        <div class="wishlist-item">
          <h3>${product.name}</h3>
          <a href="${product.url}">View Product</a>
        </div>
      `;
      wishlistContainer.appendChild(productElement);
    });
  }

  document.querySelectorAll('.btn-wishlist').forEach(button => {
    button.addEventListener('click', function () {
      const productId = this.getAttribute('data-product-id');
      const productName = this.closest('.product').querySelector('.product-title').innerText;
      const productUrl = this.closest('.product').querySelector('.product-link').href;

      const product = {
        id: productId,
        name: productName,
        url: productUrl,
      };

      if (!wishlist.some(item => item.id === productId)) {
        wishlist.push(product);
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
        alert('Product added to wishlist!');
      } else {
        alert('Product is already in the wishlist.');
      }

      renderWishlist();
    });
  });

  renderWishlist();
});
