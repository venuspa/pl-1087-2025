// Sistema de apresentação de slides
class PresentationController {
    constructor() {
        this.currentSlide = 1;
        this.totalSlides = 12;
        this.slides = document.querySelectorAll('.slide');
        this.navDots = document.getElementById('navigationDots');
        this.presenterNotes = document.getElementById('presenterNotes');
        this.notesContent = document.getElementById('notesContent');
        
        this.initializeEventListeners();
        this.createNavigationDots();
        this.updateSlideCounter();
        this.loadSlideNotes();
        
        // Adiciona atalhos de teclado
        document.addEventListener('keydown', this.handleKeyboard.bind(this));
        
        // Adiciona suporte a gestos para dispositivos móveis
        this.addTouchSupport();
    }
    
    initializeEventListeners() {
        // Botões de navegação
        document.getElementById('prevBtn').addEventListener('click', () => this.previousSlide());
        document.getElementById('nextBtn').addEventListener('click', () => this.nextSlide());
        document.getElementById('fullscreenBtn').addEventListener('click', () => this.toggleFullscreen());
        document.getElementById('closeNotes').addEventListener('click', () => this.togglePresenterNotes());
        
        // Clique nos pontos de navegação
        this.navDots.addEventListener('click', (e) => {
            if (e.target.classList.contains('nav-dot')) {
                const slideNumber = parseInt(e.target.dataset.slide);
                this.goToSlide(slideNumber);
            }
        });
        
        // Botão direito para notas do apresentador
        document.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            this.togglePresenterNotes();
        });
        
        // Previne zoom com Ctrl+Scroll
        document.addEventListener('wheel', (e) => {
            if (e.ctrlKey) {
                e.preventDefault();
            }
        }, { passive: false });
    }
    
    createNavigationDots() {
        this.navDots.innerHTML = '';
        for (let i = 1; i <= this.totalSlides; i++) {
            const dot = document.createElement('div');
            dot.className = 'nav-dot';
            dot.dataset.slide = i;
            if (i === this.currentSlide) {
                dot.classList.add('active');
            }
            this.navDots.appendChild(dot);
        }
    }
    
    updateNavigationDots() {
        const dots = this.navDots.querySelectorAll('.nav-dot');
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index + 1 === this.currentSlide);
        });
    }
    
    updateSlideCounter() {
        document.getElementById('slideCounter').textContent = `${this.currentSlide} / ${this.totalSlides}`;
        
        // Atualiza estado dos botões
        document.getElementById('prevBtn').disabled = this.currentSlide === 1;
        document.getElementById('nextBtn').disabled = this.currentSlide === this.totalSlides;
    }
    
    goToSlide(slideNumber) {
        if (slideNumber < 1 || slideNumber > this.totalSlides) return;
        
        // Remove classe active do slide atual
        this.slides[this.currentSlide - 1].classList.remove('active');
        
        // Vai para o novo slide
        this.currentSlide = slideNumber;
        this.slides[this.currentSlide - 1].classList.add('active');
        
        // Atualiza UI
        this.updateNavigationDots();
        this.updateSlideCounter();
        this.loadSlideNotes();
        
        // Scroll para o topo do slide
        this.slides[this.currentSlide - 1].scrollTop = 0;
        
        // Anima o slide atual
        this.animateSlideContent();
    }
    
    nextSlide() {
        if (this.currentSlide < this.totalSlides) {
            this.goToSlide(this.currentSlide + 1);
        }
    }
    
    previousSlide() {
        if (this.currentSlide > 1) {
            this.goToSlide(this.currentSlide - 1);
        }
    }
    
    animateSlideContent() {
        const currentSlideElement = this.slides[this.currentSlide - 1];
        const animatedElements = currentSlideElement.querySelectorAll('.info-card, .transition-card, .benefit-card, .advantage-card, .timeline-item, .agenda-item, .highlight-box, .final-icon');
        
        // Reseta animações
        animatedElements.forEach(element => {
            element.style.animation = 'none';
            element.offsetHeight; // Trigger reflow
            element.style.animation = null;
        });
    }
    
    handleKeyboard(e) {
        // Previne ações padrão para teclas de navegação
        if ([37, 38, 39, 40, 32, 33, 34].includes(e.keyCode)) {
            e.preventDefault();
        }
        
        switch (e.keyCode) {
            case 37: // Seta esquerda
            case 38: // Seta cima
                this.previousSlide();
                break;
            case 39: // Seta direita
            case 40: // Seta baixo
            case 32: // Espaço
                this.nextSlide();
                break;
            case 33: // Page Up
                this.previousSlide();
                break;
            case 34: // Page Down
                this.nextSlide();
                break;
            case 36: // Home
                this.goToSlide(1);
                break;
            case 35: // End
                this.goToSlide(this.totalSlides);
                break;
            case 70: // F - Fullscreen
                if (e.ctrlKey) {
                    e.preventDefault();
                    this.toggleFullscreen();
                }
                break;
            case 78: // N - Notas (com Ctrl)
                if (e.ctrlKey) {
                    e.preventDefault();
                    this.togglePresenterNotes();
                }
                break;
            case 27: // ESC - Sair do fullscreen
                if (document.fullscreenElement) {
                    document.exitFullscreen();
                }
                break;
        }
    }
    
    addTouchSupport() {
        let touchStartX = 0;
        let touchEndX = 0;
        
        document.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        });
        
        document.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            this.handleSwipe();
        });
        
        this.handleSwipe = () => {
            const swipeThreshold = 50;
            const diff = touchStartX - touchEndX;
            
            if (Math.abs(diff) > swipeThreshold) {
                if (diff > 0) {
                    // Swipe para a esquerda - próximo slide
                    this.nextSlide();
                } else {
                    // Swipe para a direita - slide anterior
                    this.previousSlide();
                }
            }
        };
    }
    
    toggleFullscreen() {
        const container = document.querySelector('.presentation-container');
        
        if (!document.fullscreenElement) {
            if (container.requestFullscreen) {
                container.requestFullscreen();
            } else if (container.webkitRequestFullscreen) {
                container.webkitRequestFullscreen();
            } else if (container.msRequestFullscreen) {
                container.msRequestFullscreen();
            }
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            }
        }
    }
    
    togglePresenterNotes() {
        this.presenterNotes.classList.toggle('open');
        
        if (this.presenterNotes.classList.contains('open')) {
            this.loadSlideNotes();
        }
    }
    
    loadSlideNotes() {
        const notes = this.getSlideNotes(this.currentSlide);
        this.notesContent.innerHTML = notes;
    }
    
    getSlideNotes(slideNumber) {
        const notes = {
            1: `
                <h4>Abertura da Apresentação</h4>
                <p><strong>Contextualização inicial:</strong></p>
                <p>"Bom dia a todos. Convidei vocês com urgência porque tivemos uma mudança tributária importante aprovada ontem. O Projeto de Lei 1087/2025, que amplia a isenção do IRPF para salários baixos, traz também o fim da isenção total de Imposto de Renda sobre dividendos. Vou explicar o que muda e propor um plano de ação para protegermos nossos resultados antes da nova regra entrar em vigor."</p>
                <p><strong>Tom:</strong> Direto, analítico e orientado para ação. Mostrar urgência e oportunidade.</p>
            `,
            2: `
                <h4>Sumário da Apresentação</h4>
                <p><strong>Objetivo:</strong> Informar sobre a mudança na tributação de dividendos e obter aprovação para ações estratégicas antes da nova lei vigorar.</p>
                <p><strong>Público-alvo:</strong> Sócios/Diretoria das empresas</p>
                <p><strong>Estrutura:</strong> 5 tópicos principais que cobrem desde o contexto até a decisão final necessária.</p>
                <p><strong>Duração estimada:</strong> 15-20 minutos</p>
            `,
            3: `
                <h4>Contexto da Mudança</h4>
                <p><strong>Destaques importantes:</strong></p>
                <ul>
                    <li>A mudança foi aprovada em 05/11/2025 com regime de urgência</li>
                    <li>Foi aprovada por unanimidade no Plenário do Senado</li>
                    <li>Vigência a partir de 1º de janeiro de 2026</li>
                    <li>O foco divulgado foi a isenção para salários até R$ 5.000, mas a compensação veio com a taxação de dividendos</li>
                </ul>
                <p><strong>Ênfase:</strong> Ressaltar que a mudança é iminente e afeta o planejamento deste ano.</p>
            `,
            4: `
                <h4>Nova Regra de Tributação</h4>
                <p><strong>Pontos-chave para explicar:</strong></p>
                <ul>
                    <li>Alíquota de 10% sobre dividendos que excederem R$ 50.000 mensais</li>
                    <li>Isenção de R$ 50.000 por empresa, por beneficiário</li>
                    <li>Exceção: empresas do Simples Nacional continuam isentas</li>
                    <li>Dividendos enviados ao exterior: tributados em 10% sobre qualquer valor</li>
                </ul>
                <p><strong>Exemplo prático:</strong> Use o exemplo do slide para deixar claro como funciona a tributação.</p>
                <p><strong>Importante:</strong> Destacar que a regra vale para empresas de Lucro Presumido ou Real.</p>
            `,
            5: `
                <h4>Regra de Transição - Janela de Oportunidade</h4>
                <p><strong>Mensagem principal:</strong> "Este é o ponto mais importante. Temos uma janela até 31/12/2025 para 'carimbar' nossos lucros acumulados como isentos antes da mudança."</p>
                <p><strong>Detalhes importantes:</strong></p>
                <ul>
                    <li>Lucros até 31/12/2025 permanecem isentos mesmo que pagos depois</li>
                    <li>Aprovação em ata é obrigatória até 31/12/2025</li>
                    <li>Pagamento pode ser feito até 2028 mantendo a isenção</li>
                </ul>
                <p><strong>Tom:</strong> Enfatize a urgência e a oportunidade.</p>
            `,
            6: `
                <h4>Plano de Ação - Parte 1</h4>
                <p><strong>Explicação detalhada:</strong></p>
                <p>"Nossa proposta é distribuir todo lucro acumulado até 2025 com isenção. Não significa pagar tudo de imediato, e sim deliberar agora para garantir a isenção e pagar no timing adequado até 2028."</p>
                <p><strong>Passo 2 é o mais crítico:</strong> Deliberação societária deve ser feita urgentemente.</p>
                <p><strong>Benefício:</strong> Assim, preservamos caixa e evitamos o novo imposto.</p>
            `,
            7: `
                <h4>Estratégia de Distribuição</h4>
                <p><strong>Explicação da estratégia:</strong></p>
                <p>A estratégia permite que mantenhamos flexibilidade financeira enquanto garantimos os benefícios fiscais.</p>
                <p><strong>Vantagens:</strong></p>
                <ul>
                    <li>Preservamos o caixa da empresa</li>
                    <li>Evitamos a tributação sobre lucros antigos</li>
                    <li>Garantimos segurança jurídica</li>
                </ul>
                <p><strong>Frase-chave:</strong> "Transformamos a mudança tributária em uma oportunidade de planejamento, em vez de um custo adicional."</p>
            `,
            8: `
                <h4>Vantagens de Agir em 2025</h4>
                <p><strong>Economia Tributária:</strong> Evitamos pagar 10% de imposto sobre lucros que ultrapassariam o limite em 2026.</p>
                <p><strong>Segurança Jurídica:</strong> Cumprimos a regra de transição, evitando questionamentos futuros da Receita Federal.</p>
                <p><strong>Flexibilidade Financeira:</strong> Podemos escalonar pagamentos conforme a saúde financeira da empresa.</p>
                <p><strong>Tom final:</strong> Enfatizar que esta é uma decisão proativa que transforma a mudança em oportunidade.</p>
            `,
            9: `
                <h4>Próximos Passos</h4>
                <p><strong>Cronograma detalhado:</strong></p>
                <ul>
                    <li><strong>Hoje:</strong> Obter aprovação do plano de ação</li>
                    <li><strong>Amanhã:</strong> Iniciar levantamento contábil</li>
                    <li><strong>Curto prazo:</strong> Preparar ata de distribuição</li>
                    <li><strong>Até 31/12:</strong> Realizar assembleia e obter assinaturas</li>
                    <li><strong>Depois:</strong> Implementar cronograma de pagamentos</li>
                </ul>
                <p><strong>Importante:</strong> Ganhar tempo é crucial - quanto antes formalizarmos, melhor.</p>
            `,
            10: `
                <h4>Decisão Final</h4>
                <p><strong>Mensagem final:</strong> "Precisamos já iniciar os trabalhos. Essa ação nos permite atravessar 2026 sem perdas desnecessárias."</p>
                <p><strong>Abertura para perguntas:</strong> Esteja preparado para responder sobre:</p>
                <ul>
                    <li>Impacto no caixa da empresa</li>
                    <li>Prazos legais e formalidades</li>
                    <li>Valores específicos dos lucros</li>
                    <li>Implicações para o planejamento futuro</li>
                </ul>
                <p><strong>Tom:</strong> Decisivo e confiante na proposta apresentada.</p>
            `,
            11: `
                <h4>Dados Financeiros - Simulação</h4>
                <p><strong>Importante:</strong> Estes são valores exemplificativos. Os valores reais devem ser apurados no balanço extraordinário.</p>
                <p><strong>Objetivo:</strong> Mostrar o impacto financeiro da decisão com números concretos.</p>
                <p><strong>Explicação:</strong> Com lucros acumulados de R$ 2 milhões, a economia seria de R$ 200 mil (10% de imposto evitado).</p>
                <p><strong>Prepare-se:</strong> Tenha números reais disponíveis para responder perguntas específicas.</p>
            `,
            12: `
                <h4>Encerramento</h4>
                <p><strong>Mensagem final:</strong> Agradecer a participação e enfatizar que esta é uma decisão consciente e estratégica.</p>
                <p><strong>Próximos passos imediatos:</strong></p>
                <ul>
                    <li>Confirmação da decisão da diretoria/sócios</li>
                    <li>Início imediato do levantamento contábil</li>
                    <li>Agendamento da assembleia</li>
                </ul>
                <p><strong>Disponibilidade:</strong> Manter canais de comunicação abertos para dúvidas.</p>
            `
        };
        
        return notes[slideNumber] || '<p>Sem notas para este slide.</p>';
    }
    
    // Métodos adicionais para funcionalidades extras
    
    exportToPDF() {
        // Implementação básica para exportação (requer biblioteca adicional)
        alert('Para exportar para PDF, use a função de impressão do navegador (Ctrl+P) e selecione "Salvar como PDF".');
    }
    
    printPresentation() {
        window.print();
    }
    
    resetPresentation() {
        this.goToSlide(1);
    }
    
    getCurrentSlideInfo() {
        return {
            slideNumber: this.currentSlide,
            totalSlides: this.totalSlides,
            slideTitle: this.slides[this.currentSlide - 1].querySelector('h2, h1')?.textContent || 'Slide sem título'
        };
    }
}

// Inicialização da apresentação
document.addEventListener('DOMContentLoaded', () => {
    const presentation = new PresentationController();
    
    // Adiciona controles extras no menu de contexto (botão direito)
    document.addEventListener('contextmenu', (e) => {
        // Previne o menu de contexto padrão se as notas estiverem abertas
        if (document.getElementById('presenterNotes').classList.contains('open')) {
            e.preventDefault();
        }
    });
    
    // Adiciona suporte a atalhos adicionais
    document.addEventListener('keydown', (e) => {
        // Ctrl + R: Resetar apresentação
        if (e.ctrlKey && e.key === 'r') {
            e.preventDefault();
            presentation.resetPresentation();
        }
        
        // Ctrl + P: Imprimir
        if (e.ctrlKey && e.key === 'p') {
            e.preventDefault();
            presentation.printPresentation();
        }
        
        // Ctrl + E: Exportar (mostra instruções)
        if (e.ctrlKey && e.key === 'e') {
            e.preventDefault();
            presentation.exportToPDF();
        }
    });
    
    // Adiciona classe para indicar que JavaScript está carregado
    document.body.classList.add('js-loaded');
    
    // Log inicial
    console.log('Apresentação de slides carregada com sucesso!');
    console.log('Atalhos disponíveis:');
    console.log('- Setas ou Espaço: Navegação entre slides');
    console.log('- Home/End: Primeiro/Último slide');
    console.log('- F: Tela cheia');
    console.log('- N: Notas do apresentador');
    console.log('- Ctrl+P: Imprimir');
    console.log('- Ctrl+E: Exportar (instruções)');
    console.log('- Clique direito: Notas do apresentador');
    
    // Animação inicial
    setTimeout(() => {
        presentation.animateSlideContent();
    }, 300);
});

// Previne comportamentos indesejados
window.addEventListener('beforeunload', (e) => {
    // Se estiver em tela cheia, sai antes de recarregar
    if (document.fullscreenElement) {
        document.exitFullscreen();
    }
});

// Suporte a mudanças de orientação em dispositivos móveis
window.addEventListener('orientationchange', () => {
    setTimeout(() => {
        // Recalcula layouts após mudança de orientação
        window.dispatchEvent(new Event('resize'));
    }, 300);
});

// Detecta se é um dispositivo touch
if ('ontouchstart' in window) {
    document.body.classList.add('touch-device');
}

// Adiciona estilos adicionais para impressão
const printStyles = `
    @media print {
        body { 
            background: white !important;
            overflow: visible !important;
        }
        .presentation-container {
            height: auto !important;
            background: white !important;
        }
        .slide {
            position: static !important;
            opacity: 1 !important;
            visibility: visible !important;
            transform: none !important;
            page-break-after: always;
            height: auto !important;
            min-height: 100vh;
        }
        .slide-content {
            box-shadow: none !important;
            border: 1px solid #ccc !important;
            height: auto !important;
        }
        .presentation-nav,
        .navigation-dots,
        .presenter-notes {
            display: none !important;
        }
    }
`;

const styleSheet = document.createElement('style');
styleSheet.textContent = printStyles;
document.head.appendChild(styleSheet);