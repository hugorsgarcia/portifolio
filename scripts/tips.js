const tooltips = [
    { alt: "HTML", text: "HTML: Linguagem de marcação para estruturação de páginas web" },
    { alt: "CSS", text: "CSS: Linguagem de estilo para design e layout web" },
    { alt: "JavaScript", text: "JavaScript: Linguagem de programação para interatividade web" },
    { alt: "NodeJS", text: "Node.js: Ambiente de execução JavaScript no lado do servidor" },
    { alt: "React", text: "React: Biblioteca JavaScript para construção de interfaces de usuário" },
    { alt: "Java", text: "Java: Linguagem de programação orientada a objetos multiplataforma" }
  ];

  
  const iconContainers = document.querySelectorAll('.icon-container');

  iconContainers.forEach((container, index) => {
    const tooltip = document.createElement('span');
    tooltip.className = 'tooltip';
    tooltip.textContent = tooltips[index].text;
    container.appendChild(tooltip);
  });