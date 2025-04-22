// Mobile Navigation Toggle
document.getElementById('hamburger').addEventListener('click', function() {
    document.getElementById('mobile-menu').classList.toggle('hidden');
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            // Close mobile menu if open
            document.getElementById('mobile-menu').classList.add('hidden');

            // Scroll to the target element
            window.scrollTo({
                top: targetElement.offsetTop - 60, // Offset for navbar height
                behavior: 'smooth'
            });
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.copy-link').forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const textToCopy = link.textContent;
            navigator.clipboard.writeText(textToCopy).then(function() {
                alert('Text copied to clipboard: ' + textToCopy);
            }).catch(function(err) {
                console.error('Could not copy text: ', err);
            });
        });
    });
});

tailwind.config = {
    theme: {
        extend: {
            colors: {
                primary: '#289c68',
                secondary: '#099492',
                tertiary: '#ab002b',
                dark: '#000000', // Black
                light: '#ffffff' // White
            }
        }
    }
}

// --- Custom Grid Overlay Effect ---
// Get a reference to the overlay element.
const gridOverlay = document.getElementById('grid-overlay');

document.addEventListener('mousemove', function(e) {
    // Update the mask position to follow the cursor
    const pos = `${e.clientX}px ${e.clientY}px`;
    gridOverlay.style.maskPosition = pos;
    gridOverlay.style.webkitMaskPosition = pos;
});
