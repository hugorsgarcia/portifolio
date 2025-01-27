function applyScrollEffect(sectionClass, scrollSpeed = 10) {
  const section = document.querySelector(sectionClass);
  if (!section) return; // Verifica se a section existe

  const sectionWidth = section.clientWidth;
  let scrollPosition = 0;

  function scrollBackground() {
    scrollPosition += scrollSpeed; // Usa a velocidade passada como argumento
    section.style.backgroundPosition = `-${scrollPosition}px 0`;

    // Reseta a posição quando a imagem sair completamente da tela
    if (scrollPosition >= sectionWidth) {
      scrollPosition = 0;
    }

    requestAnimationFrame(scrollBackground);
  }

  scrollBackground();
}

applyScrollEffect('.section-1', 10);
applyScrollEffect('.section-4', 10); 