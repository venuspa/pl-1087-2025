// Elementos visuais e gráficos para a apresentação
const VisualElements = {
    // Gráfico de barras para comparação tributária
    createTaxComparisonChart() {
        return `
            <div class="chart-container">
                <h4>Comparação: Tributação Atual vs Nova Regra</h4>
                <div class="bar-chart">
                    <div class="bar-group">
                        <div class="bar current" style="height: 80%">
                            <span class="bar-value">0%</span>
                        </div>
                        <div class="bar-label">Atual</div>
                    </div>
                    <div class="bar-group">
                        <div class="bar new" style="height: 60%">
                            <span class="bar-value">10%</span>
                        </div>
                        <div class="bar-label">Nova Regra</div>
                    </div>
                    <div class="bar-group">
                        <div class="bar exempt" style="height: 40%">
                            <span class="bar-value">Isento</span>
                        </div>
                        <div class="bar-label">R$ 50k/mês</div>
                    </div>
                </div>
                <div class="chart-legend">
                    <div class="legend-item">
                        <span class="legend-color current"></span>
                        <span>Isenção total (até 2025)</span>
                    </div>
                    <div class="legend-item">
                        <span class="legend-color new"></span>
                        <span>Tributação 10% (acima de R$ 50k)</span>
                    </div>
                    <div class="legend-item">
                        <span class="legend-color exempt"></span>
                        <span>Isenção até R$ 50.000/mês</span>
                    </div>
                </div>
            </div>
        `;
    },
    
    // Timeline visual para o cronograma
    createTimeline() {
        return `
            <div class="timeline-container">
                <h4>Cronograma de Implementação</h4>
                <div class="timeline">
                    <div class="timeline-item completed">
                        <div class="timeline-marker"></div>
                        <div class="timeline-content">
                            <h5>05/11/2025</h5>
                            <p>Aprovação no Senado</p>
                        </div>
                    </div>
                    <div class="timeline-item current">
                        <div class="timeline-marker"></div>
                        <div class="timeline-content">
                            <h5>HOJE</h5>
                            <p>Deliberação Societária</p>
                        </div>
                    </div>
                    <div class="timeline-item">
                        <div class="timeline-marker"></div>
                        <div class="timeline-content">
                            <h5>31/12/2025</h5>
                            <p>Último dia para formalizar</p>
                        </div>
                    </div>
                    <div class="timeline-item">
                        <div class="timeline-marker"></div>
                        <div class="timeline-content">
                            <h5>01/01/2026</h5>
                            <p>Nova regra entra em vigor</p>
                        </div>
                    </div>
                    <div class="timeline-item">
                        <div class="timeline-marker"></div>
                        <div class="timeline-content">
                            <h5>2026-2028</h5>
                            <p>Distribuição escalonada</p>
                        </div>
                    </div>
                </div>
            </div>
        `;
    },
    
    // Ícones para vantagens
    createAdvantagesIcons() {
        return `
            <div class="advantages-visual">
                <div class="advantage-icon-group">
                    <div class="icon-wrapper">
                        <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"/>
                        </svg>
                    </div>
                    <h5>Economia Tributária</h5>
                    <p>Evite pagar 10% de imposto sobre dividendos</p>
                </div>
                
                <div class="advantage-icon-group">
                    <div class="icon-wrapper">
                        <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                        </svg>
                    </div>
                    <h5>Segurança Jurídica</h5>
                    <p>Cumpra a regra de transição com tranquilidade</p>
                </div>
                
                <div class="advantage-icon-group">
                    <div class="icon-wrapper">
                        <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
                        </svg>
                    </div>
                    <h5>Flexibilidade Financeira</h5>
                    <p>Distribua conforme a saúde financeira da empresa</p>
                </div>
            </div>
        `;
    },
    
    // Gráfico de pizza para distribuição de lucros
    createDistributionChart() {
        return `
            <div class="chart-container">
                <h4>Distribuição Proposta dos Lucros</h4>
                <div class="pie-chart">
                    <svg viewBox="0 0 200 200" class="pie-svg">
                        <circle cx="100" cy="100" r="80" fill="none" stroke="#e5e7eb" stroke-width="20"/>
                        <circle cx="100" cy="100" r="80" fill="none" stroke="#3b82f6" stroke-width="20" 
                                stroke-dasharray="377 502" stroke-dashoffset="125" transform="rotate(-90 100 100)"/>
                    </svg>
                    <div class="pie-center">
                        <span class="pie-value">75%</span>
                        <span class="pie-label">Isento</span>
                    </div>
                </div>
                <div class="pie-legend">
                    <div class="legend-item">
                        <span class="legend-color" style="background: #3b82f6;"></span>
                        <span>Lucros Isentos (R$ 1.5M)</span>
                    </div>
                    <div class="legend-item">
                        <span class="legend-color" style="background: #f59e0b;"></span>
                        <span>Tributado 10% (R$ 500k)</span>
                    </div>
                </div>
            </div>
        `;
    },
    
    // Ícones para o plano de ação
    createActionPlanIcons() {
        return `
            <div class="action-plan-visual">
                <div class="plan-step">
                    <div class="step-number">1</div>
                    <div class="step-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>
                        </svg>
                    </div>
                    <h5>Levantamento Contábil</h5>
                    <p>Apurar lucros acumulados até 2025</p>
                </div>
                
                <div class="plan-step">
                    <div class="step-number">2</div>
                    <div class="step-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>
                        </svg>
                    </div>
                    <h5>Elaboração da Ata</h5>
                    <p>Preparar documentação societária</p>
                </div>
                
                <div class="plan-step">
                    <div class="step-number">3</div>
                    <div class="step-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                        </svg>
                    </div>
                    <h5>Assembleia Geral</h5>
                    <p>Aprovar distribuição de lucros</p>
                </div>
                
                <div class="plan-step">
                    <div class="step-number">4</div>
                    <div class="step-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"/>
                        </svg>
                    </div>
                    <h5>Distribuição Escalonada</h5>
                    <p>Pagar dividendos conforme cronograma</p>
                </div>
            </div>
        `;
    },
    
    // Alerta visual para urgência
    createUrgencyAlert() {
        return `
            <div class="urgency-alert">
                <div class="alert-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
                    </svg>
                </div>
                <div class="alert-content">
                    <h4>⚠️ Janela de Oportunidade Limitada</h4>
                    <p>Apenas <strong>55 dias úteis</strong> até 31/12/2025 para garantir a isenção tributária</p>
                    <div class="countdown-timer">
                        <span class="timer-label">Tempo restante:</span>
                        <span class="timer-value" id="countdownTimer">Calculando...</span>
                    </div>
                </div>
            </div>
        `;
    },
    
    // Métricas de impacto
    createImpactMetrics() {
        return `
            <div class="impact-metrics">
                <div class="metric-card">
                    <div class="metric-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
                        </svg>
                    </div>
                    <div class="metric-content">
                        <h4>Economia Potencial</h4>
                        <span class="metric-value">R$ 200.000</span>
                        <span class="metric-label">Com base em R$ 2M de lucros</span>
                    </div>
                </div>
                
                <div class="metric-card">
                    <div class="metric-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                        </svg>
                    </div>
                    <div class="metric-content">
                        <h4>ROI do Planejamento</h4>
                        <span class="metric-value">15.000%</span>
                        <span class="metric-label">Custo vs Benefício</span>
                    </div>
                </div>
                
                <div class="metric-card">
                    <div class="metric-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                    </div>
                    <div class="metric-content">
                        <h4>Prazo Crítico</h4>
                        <span class="metric-value">55 dias</span>
                        <span class="metric-label">Até 31/12/2025</span>
                    </div>
                </div>
            </div>
        `;
    }
};

// Função para inicializar os elementos visuais nas páginas apropriadas
function initializeVisualElements() {
    // Slide 4 - Nova Regra
    const slide4 = document.querySelector('.slide:nth-child(4) .slide-content');
    if (slide4) {
        const chartContainer = document.createElement('div');
        chartContainer.className = 'visual-element';
        chartContainer.innerHTML = VisualElements.createTaxComparisonChart();
        slide4.appendChild(chartContainer);
    }
    
    // Slide 5 - Transição
    const slide5 = document.querySelector('.slide:nth-child(5) .slide-content');
    if (slide5) {
        const timelineContainer = document.createElement('div');
        timelineContainer.className = 'visual-element';
        timelineContainer.innerHTML = VisualElements.createTimeline();
        slide5.appendChild(timelineContainer);
        
        // Adiciona alerta de urgência
        const urgencyContainer = document.createElement('div');
        urgencyContainer.className = 'visual-element';
        urgencyContainer.innerHTML = VisualElements.createUrgencyAlert();
        slide5.appendChild(urgencyContainer);
        
        // Inicializa o contador regressivo
        initializeCountdownTimer();
    }
    
    // Slide 6 - Plano de Ação
    const slide6 = document.querySelector('.slide:nth-child(6) .slide-content');
    if (slide6) {
        const planContainer = document.createElement('div');
        planContainer.className = 'visual-element';
        planContainer.innerHTML = VisualElements.createActionPlanIcons();
        slide6.appendChild(planContainer);
    }
    
    // Slide 7 - Estratégia
    const slide7 = document.querySelector('.slide:nth-child(7) .slide-content');
    if (slide7) {
        const distributionContainer = document.createElement('div');
        distributionContainer.className = 'visual-element';
        distributionContainer.innerHTML = VisualElements.createDistributionChart();
        slide7.appendChild(distributionContainer);
    }
    
    // Slide 8 - Vantagens
    const slide8 = document.querySelector('.slide:nth-child(8) .slide-content');
    if (slide8) {
        const advantagesContainer = document.createElement('div');
        advantagesContainer.className = 'visual-element';
        advantagesContainer.innerHTML = VisualElements.createAdvantagesIcons();
        slide8.appendChild(advantagesContainer);
        
        // Adiciona métricas de impacto
        const metricsContainer = document.createElement('div');
        metricsContainer.className = 'visual-element';
        metricsContainer.innerHTML = VisualElements.createImpactMetrics();
        slide8.appendChild(metricsContainer);
    }
    
    // Slide 11 - Projeções Financeiras
    const slide11 = document.querySelector('.slide:nth-child(11) .slide-content');
    if (slide11) {
        const financialContainer = document.createElement('div');
        financialContainer.className = 'visual-element';
        financialContainer.innerHTML = VisualElements.createTaxComparisonChart();
        slide11.appendChild(financialContainer);
    }
}

// Função para inicializar o contador regressivo
function initializeCountdownTimer() {
    function updateCountdown() {
        const targetDate = new Date('2025-12-31T23:59:59');
        const now = new Date();
        const difference = targetDate - now;
        
        if (difference > 0) {
            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            
            const timerElement = document.getElementById('countdownTimer');
            if (timerElement) {
                timerElement.textContent = `${days} dias, ${hours}h ${minutes}m`;
            }
        } else {
            const timerElement = document.getElementById('countdownTimer');
            if (timerElement) {
                timerElement.textContent = 'Prazo encerrado';
                timerElement.style.color = '#ef4444';
            }
        }
    }
    
    updateCountdown();
    setInterval(updateCountdown, 60000); // Atualiza a cada minuto
}

// Adiciona estilos CSS para os elementos visuais
const visualStyles = `
    .visual-element {
        margin: 2rem 0;
        padding: 1.5rem;
        background: rgba(255, 255, 255, 0.05);
        border-radius: 12px;
        border: 1px solid rgba(59, 130, 246, 0.2);
    }
    
    .chart-container {
        text-align: center;
    }
    
    .bar-chart {
        display: flex;
        justify-content: space-around;
        align-items: flex-end;
        height: 200px;
        margin: 2rem 0;
        padding: 0 1rem;
    }
    
    .bar-group {
        display: flex;
        flex-direction: column;
        align-items: center;
        flex: 1;
        max-width: 120px;
    }
    
    .bar {
        width: 60px;
        background: linear-gradient(135deg, var(--primary), var(--primary-dark));
        border-radius: 8px 8px 0 0;
        position: relative;
        display: flex;
        align-items: flex-end;
        justify-content: center;
        padding-bottom: 0.5rem;
        color: white;
        font-weight: 600;
        transition: all 0.3s ease;
        animation: barGrow 1s ease-out;
    }
    
    .bar.current {
        background: linear-gradient(135deg, #10b981, #059669);
    }
    
    .bar.new {
        background: linear-gradient(135deg, #f59e0b, #d97706);
    }
    
    .bar.exempt {
        background: linear-gradient(135deg, #8b5cf6, #7c3aed);
    }
    
    .bar:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
    }
    
    .bar-value {
        font-size: 0.875rem;
        font-weight: 600;
    }
    
    .bar-label {
        margin-top: 0.5rem;
        font-size: 0.875rem;
        font-weight: 500;
        color: var(--text-secondary);
    }
    
    .chart-legend {
        display: flex;
        justify-content: center;
        gap: 1rem;
        flex-wrap: wrap;
        margin-top: 1rem;
    }
    
    .legend-item {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        font-size: 0.875rem;
    }
    
    .legend-color {
        width: 12px;
        height: 12px;
        border-radius: 2px;
    }
    
    .legend-color.current {
        background: #10b981;
    }
    
    .legend-color.new {
        background: #f59e0b;
    }
    
    .legend-color.exempt {
        background: #8b5cf6;
    }
    
    .timeline-container {
        margin: 2rem 0;
    }
    
    .timeline {
        position: relative;
        padding: 2rem 0;
    }
    
    .timeline::before {
        content: '';
        position: absolute;
        left: 50%;
        top: 0;
        bottom: 0;
        width: 2px;
        background: linear-gradient(to bottom, var(--primary), var(--primary-dark));
        transform: translateX(-50%);
    }
    
    .timeline-item {
        position: relative;
        margin: 2rem 0;
        display: flex;
        align-items: center;
    }
    
    .timeline-item:nth-child(odd) {
        flex-direction: row-reverse;
    }
    
    .timeline-item:nth-child(odd) .timeline-content {
        text-align: right;
        margin-right: 2rem;
    }
    
    .timeline-item:nth-child(even) .timeline-content {
        text-align: left;
        margin-left: 2rem;
    }
    
    .timeline-marker {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        width: 16px;
        height: 16px;
        border-radius: 50%;
        background: var(--primary);
        border: 3px solid white;
        box-shadow: 0 0 0 3px var(--primary);
        z-index: 1;
    }
    
    .timeline-item.completed .timeline-marker {
        background: #10b981;
        box-shadow: 0 0 0 3px #10b981;
    }
    
    .timeline-item.current .timeline-marker {
        background: #f59e0b;
        box-shadow: 0 0 0 3px #f59e0b;
        animation: pulse 2s infinite;
    }
    
    .timeline-content {
        flex: 1;
        max-width: 45%;
        background: rgba(255, 255, 255, 0.1);
        padding: 1rem;
        border-radius: 8px;
        border: 1px solid rgba(59, 130, 246, 0.2);
    }
    
    .timeline-content h5 {
        color: var(--primary);
        margin-bottom: 0.5rem;
        font-weight: 600;
    }
    
    .advantages-visual {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 2rem;
        margin: 2rem 0;
    }
    
    .advantage-icon-group {
        text-align: center;
        padding: 1.5rem;
        background: rgba(255, 255, 255, 0.05);
        border-radius: 12px;
        border: 1px solid rgba(59, 130, 246, 0.2);
        transition: all 0.3s ease;
    }
    
    .advantage-icon-group:hover {
        transform: translateY(-5px);
        box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
        border-color: var(--primary);
    }
    
    .icon-wrapper {
        width: 60px;
        height: 60px;
        margin: 0 auto 1rem;
        background: linear-gradient(135deg, var(--primary), var(--primary-dark));
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .icon {
        width: 30px;
        height: 30px;
        color: white;
    }
    
    .urgency-alert {
        display: flex;
        align-items: center;
        gap: 1rem;
        padding: 1.5rem;
        background: linear-gradient(135deg, #fef3c7, #fde68a);
        border: 1px solid #f59e0b;
        border-radius: 12px;
        margin: 2rem 0;
        animation: slideInRight 0.5s ease-out;
    }
    
    .alert-icon {
        width: 40px;
        height: 40px;
        color: #d97706;
        flex-shrink: 0;
    }
    
    .alert-content h4 {
        color: #92400e;
        margin-bottom: 0.5rem;
    }
    
    .countdown-timer {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        margin-top: 0.5rem;
        font-weight: 600;
    }
    
    .timer-value {
        color: #dc2626;
        font-size: 1.1rem;
    }
    
    .impact-metrics {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 1rem;
        margin: 2rem 0;
    }
    
    .metric-card {
        display: flex;
        align-items: center;
        gap: 1rem;
        padding: 1rem;
        background: rgba(255, 255, 255, 0.05);
        border-radius: 8px;
        border: 1px solid rgba(59, 130, 246, 0.2);
    }
    
    .metric-icon {
        width: 40px;
        height: 40px;
        color: var(--primary);
        flex-shrink: 0;
    }
    
    .metric-value {
        display: block;
        font-size: 1.5rem;
        font-weight: 700;
        color: var(--primary);
    }
    
    .metric-label {
        font-size: 0.875rem;
        color: var(--text-secondary);
    }
    
    @keyframes barGrow {
        from { height: 0; }
        to { height: var(--bar-height, 80%); }
    }
    
    @keyframes pulse {
        0%, 100% { transform: translateX(-50%) scale(1); }
        50% { transform: translateX(-50%) scale(1.1); }
    }
    
    @keyframes slideInRight {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    
    @media (max-width: 768px) {
        .timeline::before {
            left: 20px;
        }
        
        .timeline-item {
            flex-direction: row !important;
            padding-left: 40px;
        }
        
        .timeline-marker {
            left: 20px !important;
            transform: translateX(-50%);
        }
        
        .timeline-content {
            text-align: left !important;
            margin: 0 !important;
            max-width: none;
        }
        
        .bar-chart {
            height: 150px;
        }
        
        .bar {
            width: 40px;
        }
        
        .advantages-visual {
            grid-template-columns: 1fr;
        }
        
        .impact-metrics {
            grid-template-columns: 1fr;
        }
    }
`;

// Adiciona os estilos ao documento
const visualStyleSheet = document.createElement('style');
visualStyleSheet.textContent = visualStyles;
document.head.appendChild(visualStyleSheet);

// Inicializa os elementos visuais quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        initializeVisualElements();
    }, 500);
});

// Exporta para uso global
window.VisualElements = VisualElements;
window.initializeVisual