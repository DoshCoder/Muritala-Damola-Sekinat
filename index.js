// Mobile Navigation Toggle
        const hamburger = document.getElementById('hamburger');
        const navLinks = document.getElementById('navLinks');

        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.innerHTML = navLinks.classList.contains('active') 
                ? '<i class="fas fa-times"></i>' 
                : '<i class="fas fa-bars"></i>';
        });

        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                hamburger.innerHTML = '<i class="fas fa-bars"></i>';
            });
        });

        // Publication Filtering
        const filterButtons = document.querySelectorAll('.filter-btn');
        const publicationItems = document.querySelectorAll('.publication-item');

        // Function to filter publications
        function filterPublications(category) {
            publicationItems.forEach(item => {
                if (category === 'all' || item.getAttribute('data-category') === category) {
                    item.style.display = 'block';
                    // Add animation effect
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'translateY(0)';
                    }, 10);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'translateY(10px)';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                }
            });
        }

        // Initialize with all publications shown
        filterPublications('all');

        // Add click event listeners to filter buttons
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Remove active class from all buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                // Add active class to clicked button
                button.classList.add('active');
                
                // Get the filter value
                const filterValue = button.getAttribute('data-filter');
                
                // Filter publications
                filterPublications(filterValue);
                
                // Scroll to publications section if on mobile
                if (window.innerWidth < 768) {
                    const publicationsSection = document.getElementById('publications');
                    window.scrollTo({
                        top: publicationsSection.offsetTop - 100,
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Form Submission
        const contactForm = document.getElementById('contactForm');

        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // In a real application, you would send this data to a server
            // For now, we'll just show an alert
            alert(`Thank you, ${name}! Your message has been received. I'll get back to you at ${email} as soon as possible.`);
            
            // Reset form
            contactForm.reset();
        });

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if(targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if(targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Check if image loads successfully
        window.addEventListener('load', function() {
            const img = document.querySelector('.profile-image');
            const fallback = document.getElementById('imageFallback');
            
            if (img && img.naturalHeight === 0) {
                // Image failed to load
                img.style.display = 'none';
                fallback.style.display = 'flex';
            }
        });

        // Highlight current section in navigation
        window.addEventListener('scroll', function() {
            let current = '';
            const sections = document.querySelectorAll('section');
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (scrollY >= (sectionTop - 100)) {
                    current = section.getAttribute('id');
                }
            });
            
            document.querySelectorAll('.nav-links a').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${current}`) {
                    link.classList.add('active');
                }
            });
        });

        // Add animation to publication items on load
        document.addEventListener('DOMContentLoaded', function() {
            // Add animation classes to publication items
            publicationItems.forEach((item, index) => {
                item.style.opacity = '0';
                item.style.transform = 'translateY(10px)';
                item.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
                
                // Stagger the animation
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'translateY(0)';
                }, 100 + (index * 50));
            });
        });