function createRosesField() {
    const field = document.getElementById('roses-field');

    const layers = [
        { class: 'layer-back', count: 30, size: '3.5rem', bottom: '80px', brightness: '0.5', zIndex: 1 },
        { class: 'layer-middle', count: 22, size: '5rem', bottom: '30px', brightness: '0.75', zIndex: 2 },
        { class: 'layer-front', count: 16, size: '7rem', bottom: '-20px', brightness: '1', zIndex: 3 }
    ];

    layers.forEach(layerConfig => {
        const layer = document.createElement('div');
        layer.classList.add('rose-layer', layerConfig.class);


        layer.style.bottom = layerConfig.bottom;
        layer.style.zIndex = layerConfig.zIndex;
        layer.style.filter = `brightness(${layerConfig.brightness})`;


        for (let i = 0; i < layerConfig.count; i++) {
            const rose = document.createElement('div');
            rose.classList.add('rose');
            rose.style.fontSize = layerConfig.size;
            rose.innerHTML = '​🌼🌻​';
            rose.style.animationDelay = `${Math.random() * 1.5}s`;

            const rotation = Math.random() * 20 - 10;
            rose.style.transform = `scale(0) rotate(${rotation}deg)`;

            layer.appendChild(rose);
        }
        field.appendChild(layer);
    });
}


createRosesField();

function createParticle() {
    const particlesContainer = document.getElementById('background-particles');
    const particle = document.createElement('div');
    particle.classList.add('particle');

    particle.innerHTML = '❤️';
    particle.style.left = Math.random() * 100 + 'vw';
    particle.style.animationDelay = Math.random() * 2 + 's';
    particle.style.animationDuration = Math.random() * 3 + 3 + 's';

    particle.style.fontSize = Math.random() * 1.5 + 0.8 + 'rem';

    particlesContainer.appendChild(particle);

    particle.addEventListener('animationend', () => {
        particle.remove();
    });
}

setInterval(createParticle, 300);


const readLetterBtn = document.getElementById('read-letter-btn');
const modalOverlay = document.getElementById('modal-overlay');
const closeModalBtn = document.getElementById('close-modal');

function openModal() {
    modalOverlay.classList.add('show');
}

function closeModal() {
    modalOverlay.classList.remove('show');
}

readLetterBtn.addEventListener('click', openModal);
closeModalBtn.addEventListener('click', closeModal);

modalOverlay.addEventListener('click', (event) => {
    if (event.target === modalOverlay) {
        closeModal();
    }
});