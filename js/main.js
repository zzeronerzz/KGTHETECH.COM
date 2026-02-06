/**
 * KG The Tech - Main JavaScript
 * Interactive features for the website
 */

// ==================== MOBILE MENU TOGGLE ====================
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            
            // Animate menu toggle icon
            this.classList.toggle('active');
        });
        
        // Close menu when clicking a link
        const links = navLinks.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', function() {
                navLinks.classList.remove('active');
                menuToggle.classList.remove('active');
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!menuToggle.contains(event.target) && !navLinks.contains(event.target)) {
                navLinks.classList.remove('active');
                menuToggle.classList.remove('active');
            }
        });
    }
    
    // Highlight active page in navigation
    highlightActivePage();
    
    // Initialize FAQ accordion
    initFAQ();
    
    // Initialize donation progress bar
    initDonationProgress();
    
    // Initialize build status tracker
    initBuildTracker();
    
    // Initialize scroll animations
    initScrollAnimations();
});

// ==================== ACTIVE PAGE HIGHLIGHT ====================
function highlightActivePage() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
            link.classList.add('active');
        }
    });
}

// ==================== FAQ ACCORDION ====================
function initFAQ() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const faqItem = this.parentElement;
            const isActive = faqItem.classList.contains('active');
            
            // Close all FAQ items
            document.querySelectorAll('.faq-item').forEach(item => {
                item.classList.remove('active');
            });
            
            // Toggle clicked item
            if (!isActive) {
                faqItem.classList.add('active');
            }
        });
    });
}

// ==================== DONATION PROGRESS BAR ====================
function initDonationProgress() {
    const progressBar = document.querySelector('.progress-bar');
    
    if (progressBar) {
        // Get progress data (can be updated dynamically)
        const current = parseInt(progressBar.getAttribute('data-current')) || 0;
        const goal = parseInt(progressBar.getAttribute('data-goal')) || 5000;
        const percentage = Math.min((current / goal) * 100, 100);
        
        // Animate progress bar
        setTimeout(() => {
            progressBar.style.width = percentage + '%';
            progressBar.textContent = Math.round(percentage) + '%';
        }, 300);
        
        // Update stats
        updateDonationStats(current, goal);
    }
}

function updateDonationStats(current, goal) {
    const currentStat = document.querySelector('.stat-value[data-type="current"]');
    const goalStat = document.querySelector('.stat-value[data-type="goal"]');
    const remainingStat = document.querySelector('.stat-value[data-type="remaining"]');
    
    if (currentStat) {
        animateNumber(currentStat, 0, current, 1500);
    }
    
    if (goalStat) {
        goalStat.textContent = '$' + goal.toLocaleString();
    }
    
    if (remainingStat) {
        const remaining = Math.max(goal - current, 0);
        animateNumber(remainingStat, 0, remaining, 1500);
    }
}

function animateNumber(element, start, end, duration) {
    const startTime = Date.now();
    const prefix = element.textContent.includes('$') ? '$' : '';
    
    function update() {
        const now = Date.now();
        const progress = Math.min((now - startTime) / duration, 1);
        const current = Math.floor(start + (end - start) * progress);
        
        element.textContent = prefix + current.toLocaleString();
        
        if (progress < 1) {
            requestAnimationFrame(update);
        }
    }
    
    update();
}

// ==================== BUILD STATUS TRACKER ====================
function initBuildTracker() {
    const buildItems = document.querySelectorAll('.build-item');
    
    buildItems.forEach(item => {
        const progressFill = item.querySelector('.build-progress-fill');
        const percentage = item.querySelector('.build-percentage');
        
        if (progressFill && percentage) {
            const value = parseInt(percentage.getAttribute('data-value')) || 0;
            
            setTimeout(() => {
                progressFill.style.width = value + '%';
                percentage.textContent = value + '%';
            }, 300);
        }
    });
}

// ==================== SCROLL ANIMATIONS ====================
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe elements
    const animatedElements = document.querySelectorAll('.card, .testimonial, .gallery-item, .tier');
    animatedElements.forEach(element => {
        observer.observe(element);
    });
}

// ==================== NEWSLETTER FORM ====================
function handleNewsletterSubmit(event) {
    event.preventDefault();
    
    const emailInput = event.target.querySelector('input[type="email"]');
    const email = emailInput.value;
    
    if (email) {
        // Store email (you can integrate with a service later)
        console.log('Newsletter signup:', email);
        
        // Show success message
        alert('Thank you for subscribing! You\'ll hear from KG The Tech soon.');
        emailInput.value = '';
    }
}

// Attach newsletter form handler if form exists
document.addEventListener('DOMContentLoaded', function() {
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', handleNewsletterSubmit);
    }
});

// ==================== SMOOTH SCROLL ====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href !== '') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// ==================== PAYPAL BUTTON HELPER ====================
function trackPurchaseClick(productName) {
    console.log('Purchase clicked:', productName);
    // Add analytics tracking here if needed
}

// ==================== UTILITY FUNCTIONS ====================
function formatCurrency(amount) {
    return '$' + amount.toLocaleString('en-US', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    });
}

function formatDate(date) {
    return new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

// ==================== BACK TO TOP BUTTON ====================
window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // You can add a back-to-top button functionality here if needed
    if (scrollTop > 500) {
        // Show back to top button
    } else {
        // Hide back to top button
    }
});

// ==================== LAZY LOADING IMAGES ====================
if ('loading' in HTMLImageElement.prototype) {
    // Browser supports native lazy loading
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.src = img.dataset.src || img.src;
    });
} else {
    // Fallback for browsers that don't support lazy loading
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
    document.body.appendChild(script);
}

// ==================== ERROR HANDLING ====================
window.addEventListener('error', function(e) {
    console.error('JavaScript error:', e.message);
    // You can add error reporting here
});

// ==================== CONSOLE BRANDING ====================
console.log('%cKG THE TECH', 'color: #D4AF37; font-size: 40px; font-weight: bold; text-shadow: 0 0 10px rgba(212, 175, 55, 0.8);');
console.log('%cHacking on a Budget', 'color: #39FF14; font-size: 20px; font-weight: bold;');
console.log('%cWebsite built with ❤️ for the culture', 'color: #00FFFF; font-size: 14px;');
console.log('%cInterested in the code? Check it out: https://github.com/zzeronerzz', 'color: #FFFFFF; font-size: 12px;');
