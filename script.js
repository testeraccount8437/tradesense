// 1. Scroll Reveal Animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

// 2. Infinite Ticker Logic
// This grabs the ticker content and duplicates it multiple times 
// to ensure the animation is long enough to loop seamlessly.
document.addEventListener("DOMContentLoaded", () => {
    const tickerContent = document.querySelector('.ticker-content');
    if(tickerContent) {
        // Clone the content 4 times for a very long loop
        const originalContent = tickerContent.innerHTML;
        tickerContent.innerHTML = originalContent + originalContent + originalContent + originalContent;
    }
});

// 3. Simple Button Interaction
document.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('click', (e) => {
        if(!e.target.closest('a')) {
            // Only alert if it's not a link
            console.log("Button Clicked");
        }
    });
});
