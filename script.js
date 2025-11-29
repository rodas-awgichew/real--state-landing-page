document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-list .nav-link');

    // 2. Function to toggle the mobile menu state
    const toggleMenu = () => {
        // Toggle the 'active' class on the menu itself
        navMenu.classList.toggle('active');

  
        const icon = menuToggle.querySelector('i');
        if (navMenu.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times'); // 'fa-times' is the standard close icon
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    };

    // 3. Event Listener for the Menu Button
    menuToggle.addEventListener('click', toggleMenu);

    // 4. Close the menu when a link is clicked (for single-page navigation)
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            // Only close the menu if it's currently open (on mobile)
            if (navMenu.classList.contains('active')) {
                toggleMenu();
            }
        });
    });
});