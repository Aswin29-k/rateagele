function animateCard(card) {
    card.style.transform = 'rotateY(360deg)';
    setTimeout(() => {
      card.style.transform = 'scale(1.05)';
    }, 600);
  }
  