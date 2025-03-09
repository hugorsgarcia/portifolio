function applyScrollEffect(sectionClass, scrollSpeed = 10) {
  const section = document.querySelector(sectionClass);
  if (!section) return;

  const sectionWidth = section.clientWidth;
  let scrollPosition = 0;

  function scrollBackground() {
    scrollPosition += scrollSpeed;
    section.style.backgroundPosition = `-${scrollPosition}px 0`;

    
    if (scrollPosition >= sectionWidth) {
      scrollPosition = 0;
    }

    requestAnimationFrame(scrollBackground);
  }

  scrollBackground();
}

applyScrollEffect('.section-1', 10);
applyScrollEffect('.section-4', 10); 