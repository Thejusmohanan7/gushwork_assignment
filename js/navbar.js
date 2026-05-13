// Navbar Component - Loads only the navbar
function loadNavbar() {
    if (document.getElementById('navbar')) {
        document.getElementById('navbar').innerHTML = `
            <nav class="navbar">
                <div class="brand">
                    <span class="brand-name">MANGAALAM</span>
                    <span class="brand-sub">HDPE PIPES</span>
                </div>
                <ul class="nav-links">
                    <li><a href="#home" class="nav-link">About Us</a></li>
                    <li class="dropdown">
                        <a href="#" class="nav-link dropdown-toggle">
                            Products <span class="arrow">▼</span>
                        </a>
                        <ul class="dropdown-menu">
                            <li><a href="#">HDPE Pipes</a></li>
                            <li><a href="#">Fittings</a></li>
                            <li><a href="#">Custom Solutions</a></li>
                        </ul>
                    </li>
                    <li><a href="#contact" class="nav-link contact-btn">Contact Us</a></li>
                </ul>
            </nav>
        `;
    }
}

// Navbar specific functionality (sticky, scroll effects, etc.)
function initNavbar() {
    console.log('Navbar initialized');
    
    // Sticky navbar effect on scroll
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (navbar) {
            if (window.scrollY > 50) {
                navbar.style.boxShadow = '0 2px 15px rgba(0,0,0,0.1)';
            } else {
                navbar.style.boxShadow = '0 1px 3px rgba(0,0,0,0.1)';
            }
        }
    });
}

// Load navbar when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
        loadNavbar();
        initNavbar();
    });
} else {
    loadNavbar();
    initNavbar();
}