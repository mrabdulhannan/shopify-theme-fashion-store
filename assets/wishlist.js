document.addEventListener('DOMContentLoaded', function () {
  // var wishlist = "";
  if(localStorage.getItem('wishlist')){
    console.log("In If");
    const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
  }
  else{
    console.log("In else");
    const wishlist = [];
  }
  

  // function renderWishlist() {
  //   const wishlistContainer = document.getElementById('wishlist-items');
  //   if (wishlistContainer) {
  //     wishlistContainer.innerHTML = '';

  //     wishlist.forEach(product => {
  //       const productElement = document.createElement('div');
  //       productElement.innerHTML = `
  //         <div class="wishlist-item">
  //           <h3>${product.title}</h3>
  //           <a href="${product.url}">View Product</a>
  //         </div>
  //       `;
  //       wishlistContainer.appendChild(productElement);
  //     });
  //   }
  // }

  document.querySelectorAll('.btn-wishlist').forEach(button => {
    button.addEventListener('click', function () {
      const productId = this.getAttribute('data-product-id');
      const productTitle = this.getAttribute('data-product-title');
      const productUrl = this.getAttribute('data-product-url');

      const product = {
        id: productId,
        title: productTitle,
        url: productUrl,
      };

      // // if (!wishlist.some(item => item.id === productId)) {
        wishlist.push(product);
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
        // alert('Product added to wishlist!');
      // } else {
        // alert('Product is already in the wishlist.');
      // }

      // renderWishlist();
    });
  });

  // renderWishlist();
});
