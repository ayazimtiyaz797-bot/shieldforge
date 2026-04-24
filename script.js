// ===== NAVBAR HIDE/SHOW ON SCROLL =====
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;
    if (currentScroll > lastScroll && currentScroll > 100) {
        navbar.style.transform = 'translateY(-100%)';
        navbar.style.transition = 'transform 0.3s ease';
    } else {
        navbar.style.transform = 'translateY(0)';
    }
    lastScroll = currentScroll;
});

// ===== HERO TEXT ANIMATION ON LOAD =====
const heroText = document.querySelector('.hero h1');
if (heroText) {
    heroText.style.opacity = '0';
    heroText.style.transform = 'translateY(30px)';
    heroText.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    window.addEventListener('load', () => {
        setTimeout(() => {
            heroText.style.opacity = '1';
            heroText.style.transform = 'translateY(0)';
        }, 300);
    });
}

// ===== CARDS FADE IN ON SCROLL =====
const cards = document.querySelectorAll('.card');
if (cards.length > 0) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 150);
            }
        });
    }, { threshold: 0.1 });

    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(50px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
}

// ===== PRODUCT INFO FADE IN ON DETAIL PAGE =====
const productInfos = document.querySelectorAll('.product-info');
if (productInfos.length > 0) {
    const infoObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateX(0)';
                }, index * 200);
            }
        });
    }, { threshold: 0.1 });

    productInfos.forEach(info => {
        info.style.opacity = '0';
        info.style.transform = 'translateX(40px)';
        info.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        infoObserver.observe(info);
    });
}

// ===== SMOOTH ACTIVE NAV LINK HIGHLIGHT =====
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 200;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.style.color = '#cccccc';
        if (link.getAttribute('href') === `#${current}`) {
            link.style.color = '#e8a020';
        }
    });
});

// ===== CARD CLICK RIPPLE EFFECT =====
cards.forEach(card => {
    card.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        ripple.style.cssText = `
            position: absolute;
            border-radius: 50%;
            background: rgba(232, 160, 32, 0.3);
            width: 100px;
            height: 100px;
            transform: scale(0);
            animation: ripple 0.6s linear;
            left: ${e.clientX - card.getBoundingClientRect().left - 50}px;
            top: ${e.clientY - card.getBoundingClientRect().top - 50}px;
            pointer-events: none;
        `;
        card.style.position = 'relative';
        card.style.overflow = 'hidden';
        card.appendChild(ripple);
        setTimeout(() => ripple.remove(), 600);
    });
});

// ===== RIPPLE ANIMATION =====
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);