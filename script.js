function celebrate() {
    const balloons = document.querySelectorAll('.balloon');
    balloons.forEach((balloon, index) => {
        // Animar los globos
        setTimeout(() => {
            balloon.style.opacity = 1;
            balloon.style.animation = "float 2s ease-in-out infinite";
        }, index * 300); // Retraso entre globos
    });

    // Generar confeti
    generateConfetti(200); // Número de partículas de confeti
}

function generateConfetti(count) {
    const confettiContainer = document.getElementById('confetti-container');

    for (let i = 0; i < count; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        
        // Asignar un color aleatorio al confeti
        confetti.style.backgroundColor = getRandomColor();
        
        // Posición inicial aleatoria
        confetti.style.left = `${Math.random() * 100}vw`;
        confetti.style.animationDuration = `${Math.random() * 3 + 2}s`; // Duración aleatoria de la caída
        
        confettiContainer.appendChild(confetti);

        // Eliminar confeti después de que haya caído
        setTimeout(() => {
            confetti.remove();
        }, 5000); // 5 segundos
    }
}

function getRandomColor() {
    const colors = ['#f06', '#f9a', '#fcd', '#00bfff', '#ff6347', '#32cd32'];
    return colors[Math.floor(Math.random() * colors.length)];
}

