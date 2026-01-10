// Fade In Animation Observer
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el));

// Button Interactions (Demo)
document.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('click', (e) => {
        // Prevent redirect for demo buttons, but allow navigation links
        if(!e.target.closest('a')) {
            alert("This feature requires a backend account!");
        }
    });
});
