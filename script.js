document.addEventListener('DOMContentLoaded', () => {
    const rainContainer = document.querySelector('.rain-container');
    
    function createRaindrop() {
        const raindrop = document.createElement('div');
        raindrop.classList.add('raindrop');
        raindrop.style.left = `${Math.random() * 100}vw`;
        raindrop.style.animationDuration = `${Math.random() * 1 + 0.5}s`;
        rainContainer.appendChild(raindrop);

        // Remove the raindrop after it falls to avoid memory leaks
        setTimeout(() => {
            raindrop.remove();
        }, 2000);
    }

    function generateRain() {
        setInterval(createRaindrop, 100);
    }

    generateRain();
});
