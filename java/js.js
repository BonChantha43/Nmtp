document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.querySelector('input[placeholder="Search products..."]');
    const cartButtons = document.querySelectorAll('button:contains("Add to Cart")');
    const wishlistButtons = document.querySelectorAll('.ri-heart-line').parent();
    const newsletterForm = document.querySelector('form');
    searchInput.addEventListener('input', function(e) {
    console.log('Searching for:', e.target.value);
    });
    cartButtons.forEach(button => {
    button.addEventListener('click', function() {
    const cartCount = document.querySelector('.ri-shopping-bag-line').nextElementSibling;
    cartCount.textContent = parseInt(cartCount.textContent) + 1;
    });
    });
    wishlistButtons.forEach(button => {
    button.addEventListener('click', function() {
    const wishlistCount = document.querySelector('.ri-heart-line').nextElementSibling;
    wishlistCount.textContent = parseInt(wishlistCount.textContent) + 1;
    });
    });
    newsletterForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const email = this.querySelector('input[type="email"]').value;
    if (email) {
    const toast = document.createElement('div');
    toast.className = 'fixed bottom-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg';
    toast.textContent = 'Thank you for subscribing!';
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
    this.reset();
    }
    });
    });

    tailwind.config = {
        theme: {
        extend: {
        colors: {
        primary: '#2563eb',
        secondary: '#f97316'
        },
        borderRadius: {
        'none': '0px',
        'sm': '4px',
        DEFAULT: '8px',
        'md': '12px',
        'lg': '16px',
        'xl': '20px',
        '2xl': '24px',
        '3xl': '32px',
        'full': '9999px',
        'button': '8px'
        }
        }
        }
        }
        document.addEventListener('DOMContentLoaded', function() {
            const modal = document.getElementById('quickViewModal');
            const modalImage = document.getElementById('modalImage');
            const modalTitle = document.getElementById('modalTitle');
            const modalPrice = document.getElementById('modalPrice');
            const closeModalBtn = document.getElementById('closeModalBtn');
            
            // Open modal when eye icon is clicked
            document.querySelectorAll('.ri-eye-line').forEach(button => {
              button.closest('button').addEventListener('click', function(e) {
                e.stopPropagation(); // Prevent event bubbling
                const product = this.closest('.group');
                const image = product.querySelector('img').src;
                const title = product.querySelector('h3').textContent;
                const price = product.querySelector('.text-primary').textContent;
                modalImage.src = image;
                modalTitle.textContent = title;
                modalPrice.textContent = price;
                modal.classList.add('show');
                document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
              });
            });
            
            // Close modal when close button is clicked
            closeModalBtn.addEventListener('click', function() {
              closeQuickView();
            });
            
            // Close modal when clicking outside
            modal.addEventListener('click', function(e) {
              if (e.target === modal) {
                closeQuickView();
              }
            });
            
            // Close modal function
            window.closeQuickView = function() {
              modal.classList.remove('show');
              document.body.style.overflow = ''; // Re-enable scrolling
            };
            
            // Close modal when pressing Escape key
            document.addEventListener('keydown', function(e) {
              if (e.key === 'Escape' && modal.classList.contains('show')) {
                closeQuickView();
              }
            });
            
            // Cart functionality
            const cartButtons = document.querySelectorAll('button:contains("Add to Cart")');
            cartButtons.forEach(button => {
              button.addEventListener('click', function() {
                const cartCount = document.querySelector('.ri-shopping-bag-line').nextElementSibling;
                cartCount.textContent = parseInt(cartCount.textContent) + 1;
              });
            });
            
            // Wishlist functionality
            const wishlistButtons = document.querySelectorAll('.ri-heart-line');
            wishlistButtons.forEach(button => {
              button.closest('button').addEventListener('click', function() {
                const wishlistCount = document.querySelector('.ri-heart-line').nextElementSibling;
                wishlistCount.textContent = parseInt(wishlistCount.textContent) + 1;
              });
            });
          });