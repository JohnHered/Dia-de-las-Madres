function createRosesField() {
    const field = document.getElementById('roses-field');


    const grassLayer = document.createElement('div');
    grassLayer.classList.add('rose-layer', 'layer-grass');
    grassLayer.style.bottom = '-10px';
    grassLayer.style.zIndex = 1;

    const grassImageSrc = 'https://i.postimg.cc/qR749VBs/pt.png';


    for (let i = 0; i < 40; i++) {
        const grass = document.createElement('img');
        grass.src = grassImageSrc;
        grass.classList.add('grass-img');


        const width = Math.random() * 240 + 290;
        grass.style.width = width + 'px';

        grass.style.animationDelay = `${Math.random() * 1.5}s`;
        grass.style.transform = `scale(0) rotate(${Math.random() * 16 - 8}deg)`;

        grass.style.filter = `brightness(${Math.random() * 0.4 + 0.3})`;

        grassLayer.appendChild(grass);
    }
    field.appendChild(grassLayer);


    const layers = [
        { class: 'layer-back', count: 25, size: '4rem', bottom: '60px', brightness: '0.6', zIndex: 2 },
        { class: 'layer-middle', count: 18, size: '5.5rem', bottom: '20px', brightness: '0.8', zIndex: 3 },
        { class: 'layer-front', count: 12, size: '7.5rem', bottom: '-10px', brightness: '1', zIndex: 4 }
    ];

    const flowers = ['🌻', '🌼'];

    layers.forEach(layerConfig => {
        const layer = document.createElement('div');
        layer.classList.add('rose-layer', layerConfig.class);

        layer.style.bottom = layerConfig.bottom;
        layer.style.zIndex = layerConfig.zIndex;
        layer.style.filter = `brightness(${layerConfig.brightness})`;

        for (let i = 0; i < layerConfig.count; i++) {
            const flower = document.createElement('div');
            flower.classList.add('rose');
            flower.style.fontSize = layerConfig.size;
            flower.innerHTML = flowers[Math.floor(Math.random() * flowers.length)];

            flower.style.animationDelay = `${Math.random() * 1.5}s`;

            const rotation = Math.random() * 16 - 8;
            flower.style.transform = `scale(0) rotate(${rotation}deg)`;

            layer.appendChild(flower);
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
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modalOverlay.classList.remove('show');
    document.body.style.overflow = 'hidden';
}

readLetterBtn.addEventListener('click', openModal);
closeModalBtn.addEventListener('click', closeModal);

modalOverlay.addEventListener('click', (event) => {
    if (event.target === modalOverlay) {
        closeModal();
    }
});