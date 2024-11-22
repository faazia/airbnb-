document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav ul');

    // Toggle navigation menu on small screens
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }

    // Handle search button click
    const searchButton = document.querySelector('.search-button');
    if (searchButton) {
        searchButton.addEventListener('click', () => {
            const location = document.querySelector('.location-input').value;
            const checkInDate = document.querySelector('.date-input:nth-of-type(1)').value;
            const checkOutDate = document.querySelector('.date-input:nth-of-type(2)').value;

            if (location && checkInDate && checkOutDate) {
                alert(`Searching for properties in ${location} from ${checkInDate} to ${checkOutDate}`);
            } else {
                alert('Please fill in all search fields.');
            }
        });
    }
});
