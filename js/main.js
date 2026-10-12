/* ============================================
   ShopEase E-Commerce Template - JavaScript
   ============================================ */

// ===== Cart Count Variable =====
// This keeps track of how many items are in the cart
var cartCount = 0;


// ===== Get Important Elements from the Page =====
var cartCountElement = document.getElementById('cartCount');
var searchInput = document.getElementById('searchInput');
var searchBtn = document.getElementById('searchBtn');
var newsletterForm = document.getElementById('newsletterForm');
var notificationBox = document.getElementById('notification');
var notificationMsg = document.getElementById('notificationMsg');
var newsletterMsg = document.getElementById('newsletterMsg');


// ============================================
// SEARCH FUNCTIONALITY
// ============================================

// When the user clicks the Search button
searchBtn.addEventListener('click', function () {
    handleSearch();
});

// When the user presses Enter in the search box
searchInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        handleSearch();
    }
});

// This function handles the search action
function handleSearch() {
    var query = searchInput.value.trim();

    if (query === '') {
        showNotification('Please enter a product name to search.');
        return;
    }

    showNotification('You searched for: "' + query + '"');

    // Clear the search input after searching
    searchInput.value = '';
}


// ============================================
// ADD TO CART FUNCTIONALITY
// ============================================

// This function is called when "Add to Cart" button is clicked
// It receives the product name as a parameter
function addToCart(productName) {
    // Increase the cart count by 1
    cartCount = cartCount + 1;

    // Update the cart badge number on the page
    cartCountElement.textContent = cartCount;

    // Show notification to the user
    showNotification(productName + ' added to cart!');

    // Find the button that was clicked
    // We use the event object to find it
    var clickedButton = event.target;

    // Change button text to "Added!"
    clickedButton.textContent = 'Added!';
    clickedButton.classList.add('added');

    // After 1.5 seconds, change it back to "Add to Cart"
    setTimeout(function () {
        clickedButton.textContent = 'Add to Cart';
        clickedButton.classList.remove('added');
    }, 1500);
}


// ============================================
// NEWSLETTER SUBSCRIPTION
// ============================================

// When the newsletter form is submitted
newsletterForm.addEventListener('submit', function (event) {
    // Prevent the page from reloading
    event.preventDefault();

    var emailInput = document.getElementById('emailInput');
    var email = emailInput.value.trim();

    if (email === '') {
        newsletterMsg.textContent = 'Please enter a valid email address.';
        newsletterMsg.style.color = '#DC2626';
        return;
    }

    // Show success message
    newsletterMsg.textContent = 'Thank you for subscribing!';
    newsletterMsg.style.color = '#16A34A';

    // Clear the email input
    emailInput.value = '';

    // Also show a notification popup
    showNotification('Thank you for subscribing!');
});


// ============================================
// NOTIFICATION POPUP FUNCTION
// ============================================

// This function shows a small popup message at the bottom of the screen
function showNotification(message) {
    // Set the message text
    notificationMsg.textContent = message;

    // Show the notification by adding the 'show' class
    notificationBox.classList.add('show');

    // Hide the notification after 2.5 seconds
    setTimeout(function () {
        notificationBox.classList.remove('show');
    }, 2500);
}


// ============================================
// NAVIGATION - ACTIVE LINK HIGHLIGHT
// ============================================

// Get all navigation links
var navLinks = document.querySelectorAll('.nav-link');

// When a nav link is clicked, highlight it
navLinks.forEach(function (link) {
    link.addEventListener('click', function (event) {
        event.preventDefault();

        // Remove 'active' class from all links
        navLinks.forEach(function (navLink) {
            navLink.classList.remove('active');
        });

        // Add 'active' class to the clicked link
        this.classList.add('active');
    });
});