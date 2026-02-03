// Smooth scroll for anchor links
document.addEventListener('DOMContentLoaded', function() {
    // Handle smooth scrolling for anchor links
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href.length > 1) {
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // Add subtle fade-in animation on scroll (optional, minimal)
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe sections for fade-in effect
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });

    // Trigger initial load animation
    setTimeout(() => {
        sections.forEach(section => {
            if (section.getBoundingClientRect().top < window.innerHeight) {
                section.style.opacity = '1';
                section.style.transform = 'translateY(0)';
            }
        });
    }, 100);

    // Modal functionality for project screenshots
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <span class="modal-close">&times;</span>
        <img class="modal-content" id="modalImage">
    `;
    document.body.appendChild(modal);

    const modalImg = document.getElementById('modalImage');
    const modalClose = document.querySelector('.modal-close');

    // Add click handlers to all project screenshots
    const screenshots = document.querySelectorAll('.project-screenshot');
    screenshots.forEach(img => {
        img.addEventListener('click', function() {
            modal.style.display = 'block';
            modalImg.src = this.src;
            modalImg.alt = this.alt;
            document.body.style.overflow = 'hidden'; // Prevent background scrolling
        });
    });

    // Close modal when clicking the X
    modalClose.addEventListener('click', function() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Restore scrolling
    });

    // Close modal when clicking outside the image
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto'; // Restore scrolling
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto'; // Restore scrolling
        }
    });
});
