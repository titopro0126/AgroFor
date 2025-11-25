// Animación simple para retrasar la aparición de cada producto
document.querySelectorAll('.product-card').forEach((card, i) => {
    card.style.animationDelay = `${0.2 + i * 0.2}s`;
});