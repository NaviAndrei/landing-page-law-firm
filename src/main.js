const header = document.querySelector('header');
const scrollThreshold = 50; // Pixels scrolled before changing header

window.addEventListener('scroll', () => {
    console.log("Scroll event detected! Y position:", window.scrollY);
    if (window.scrollY > scrollThreshold) {
        // Scrolled down: remove initial white, add semi-transparent + effects
        header.classList.remove('bg-white');
        header.classList.add('bg-white/80', 'shadow-md', 'backdrop-blur-sm'); 
    } else {
        // Scrolled to top: remove semi-transparent + effects, add initial white back
        header.classList.remove('bg-white/80', 'shadow-md', 'backdrop-blur-sm');
        header.classList.add('bg-white'); 
    }
});
