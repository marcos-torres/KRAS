document.addEventListener('DOMContentLoaded', () => {
    // --- Funcionalidade Menu Toggle para Mobile ---
    const menuToggleButton = document.getElementById('menu-toggle-button');
    const navLinksMenu = document.getElementById('nav-links-menu');

    if (menuToggleButton && navLinksMenu) {
        menuToggleButton.addEventListener('click', () => {
            navLinksMenu.classList.toggle('active');
        });
        navLinksMenu.querySelectorAll('a:not(.btn)').forEach(link => { // Modificado para não fechar em botões
            link.addEventListener('click', () => {
                if (navLinksMenu.classList.contains('active')) {
                    navLinksMenu.classList.remove('active');
                }
            });
        });
    }

    // --- Smooth Scroll para links âncora ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            // Não previne o default se for um link de menu para fechar
            if (!this.closest('.nav-links.active')) {
                 e.preventDefault();
            }

            const targetId = this.getAttribute('href');
            // Verifica se o targetId é apenas "#" para evitar erros
            if (targetId === "#") return;

            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const headerOffset = document.querySelector('header')?.offsetHeight || 0;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });

    // --- Atualizar ano no footer ---
    const yearSpan = document.getElementById('currentYear');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // --- Animação de 'reveal' ao fazer scroll para secções ---
    const sections = document.querySelectorAll('.section');
    const revealSection = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            } else {
                // entry.target.style.opacity = "0"; // Para re-animar ao sair
                // entry.target.style.transform = "translateY(20px)"; // Para re-animar ao sair
            }
        });
    };
    if (sections.length > 0) {
        sections.forEach(section => {
            section.style.opacity = "0";
            section.style.transform = "translateY(20px)";
            section.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
        });
        const sectionObserver = new IntersectionObserver(revealSection, {
            root: null, threshold: 0.10, /* Reduzido para acionar mais cedo */
        });
        sections.forEach(section => { sectionObserver.observe(section); });
    }

    // --- Lógica do Visualizador de Imagem ---
    const imageViewer = document.getElementById('image-viewer');
    const viewerImage = document.getElementById('viewer-image');
    const viewerTitle = document.getElementById('viewer-title');
    const closeViewerBtn = document.getElementById('close-viewer-btn');
    const resultCards = document.querySelectorAll('.result-card');

    resultCards.forEach(card => {
        card.addEventListener('click', () => {
            const title = card.dataset.title;
            const placeholderText = card.dataset.placeholderText; // Usado para o alt da imagem
            
            // Por agora, vamos criar uma imagem placeholder com o título
            // No futuro, substituirás 'generatePlaceholderImageURL' pela URL da tua imagem real
            const imageUrl = generatePlaceholderImageURL(placeholderText); 

            viewerTitle.textContent = title;
            viewerImage.src = imageUrl;
            viewerImage.alt = placeholderText; // Descrição da imagem
            imageViewer.classList.add('active');
            document.body.classList.add('viewer-active'); // Para bloquear scroll do body
        });
    });

    if (closeViewerBtn) {
        closeViewerBtn.addEventListener('click', () => {
            imageViewer.classList.remove('active');
            document.body.classList.remove('viewer-active');
        });
    }
    // Fechar o viewer ao clicar fora da imagem (no overlay)
    if (imageViewer) {
        imageViewer.addEventListener('click', (event) => {
            if (event.target === imageViewer) { // Verifica se o clique foi no próprio overlay
                imageViewer.classList.remove('active');
                document.body.classList.remove('viewer-active');
            }
        });
    }


    // Função para gerar uma URL de imagem placeholder (simples, apenas para demonstração)
    // Podes usar um serviço como placehold.co ou similar para placeholders reais,
    // ou simplesmente ter as tuas imagens prontas.
    function generatePlaceholderImageURL(text, width = 800, height = 600) {
        // Esta é uma forma MUITO SIMPLES de gerar um SVG como placeholder
        // Não é ideal para produção, mas serve para o propósito aqui.
        const bgColor = '#cccccc'; // Cor de fundo do placeholder
        const textColor = '#555555'; // Cor do texto
        const encodedText = encodeURIComponent(text);
        // Criar um SVG como Data URL
        const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
                        <rect fill="${bgColor}" width="100%" height="100%"/>
                        <text fill="${textColor}" font-family="Poppins, sans-serif" font-size="30" dy="0.35em" x="50%" y="50%" text-anchor="middle">${text}</text>
                     </svg>`;
        return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
    }

});