# Apresentação: PL 1087/2025 — Taxação de Dividendos

Apresentação HTML sobre a mudança tributária que encerra a isenção de dividendos.

## Conteúdo do Projeto
- `index.html`: estrutura da apresentação
- `styles.css`: estilos e layout responsivo
- `script.js`: controle de navegação entre slides e atalhos
- `visual-elements.js`: ícones e componentes visuais auxiliares
- `contexto.md`: notas e contexto sobre o PL
- `pptx_extract/`: arquivos extraídos do PPTX para referência visual (imagens e temas)

## Como Executar Localmente
- Opção 1: Abrir diretamente o `index.html` no navegador.
- Opção 2: Servidor estático (recomendado):
  - `npx --yes serve@14.2.5 -p 5173`
  - Abra `http://localhost:5173/`.

## Navegação e Atalhos
- Setas ←/→ ou Espaço: anterior/próximo slide
- `Home`/`End`: primeiro/último slide
- `Ctrl+F`: alternar tela cheia
- Clique direito: abrir notas do apresentador

## Imprimir ou Exportar
- Use o atalho do navegador para imprimir (Ctrl+P). Há estilos de impressão aplicados.

## Publicar no GitHub
Este repositório pode ser versionado com Git e publicado no GitHub.

1. Inicializar e fazer commit (já configurado neste projeto):
   - `git init`
   - `git add -A`
   - `git commit -m "Apresentação PL 1087/2025"`
2. Instalar GitHub CLI (Windows):
   - `winget install --id GitHub.cli -e`
3. Autenticar e criar o repositório remoto:
   - `gh auth login -w` (login pelo navegador)
   - `gh repo create pl-1087-2025 --source=. --remote=origin --push --public`

Caso prefira HTTPS sem CLI, crie o repositório `pl-1087-2025` manualmente em sua conta e configure:
- `git remote add origin https://github.com/<seu-usuario>/pl-1087-2025.git`
- `git branch -M main`
- `git push -u origin main`

## Licença
Uso interno. Ajuste conforme necessidade da sua organização.

## 📋 Descrição

Apresentação profissional em HTML/CSS/JS sobre as mudanças tributárias do PL 1087/2025, especificamente sobre a nova taxação de dividendos. Desenvolvida para empresas que precisam entender o impacto e tomar decisões estratégicas antes da vigência da nova lei.

## 🎯 Objetivo

Informar sobre as mudanças na tributação de dividendos e propor um plano de ação para proteger os resultados empresariais antes da nova regra entrar em vigor em 01/01/2026.

## 📊 Slides da Apresentação

1. **Capa** - Identificação e contexto
2. **Sumário** - Estrutura da apresentação
3. **Contexto da Mudança** - PL 1087/2025 aprovado
4. **Nova Regra de Tributação** - Detalhes da taxação 10%
5. **Regra de Transição** - Janela de oportunidade até 31/12/2025
6. **Plano de Ação** - Estratégia proposta (Parte 1)
7. **Estratégia de Distribuição** - Cronograma e benefícios
8. **Vantagens de Agir em 2025** - Por agir agora
9. **Próximos Passos** - Cronograma de implementação
10. **Decisão Final** - Chamada para ação
11. **Projeções Financeiras** - Simulação com números
12. **Encerramento** - Contatos e próximos passos

## 🚀 Como Usar

### Opção 1: Abrir diretamente no navegador
1. Simplesmente abra o arquivo `index.html` em seu navegador preferido
2. A apresentação funcionará offline com todos os recursos

### Opção 2: Usar servidor local (recomendado)
```bash
# Com Python (se disponível)
python -m http.server 3000

# Com Node.js
npx serve .

# Ou simplesmente
node -e "console.log('Servidor iniciado em: http://localhost:3000')"
```

### Opção 3: Converter para PowerPoint/Google Slides
1. Abra a apresentação no navegador
2. Use Ctrl+P (imprimir)
3. Selecione "Salvar como PDF" ou "Microsoft Print to PDF"
4. Importe o PDF no PowerPoint ou Google Slides

## 🎮 Controles e Navegação

### Teclado
- **Setas (← →) ou Espaço**: Navegar entre slides
- **Home**: Ir para o primeiro slide
- **End**: Ir para o último slide
- **F**: Ativar/Desativar tela cheia
- **N**: Abrir/Fechar notas do apresentador
- **Ctrl+P**: Imprimir
- **ESC**: Sair da tela cheia

### Mouse/Touch
- **Clique nos pontos**: Navegar diretamente para slide
- **Swipe (mobile)**: Deslizar para mudar slides
- **Botão direito**: Abrir notas do apresentador

### Interface
- **Setas na tela**: Navegação anterior/próximo
- **Contador**: Slide atual / total
- **Pontos de navegação**: Indicadores visuais

## 📝 Notas do Apresentador

Cada slide contém notas detalhadas para o apresentador:
- **Como acessar**: Pressione **N** ou clique com botão direito
- **Conteúdo**: Explicações detalhadas, exemplos práticos e frases-chave
- **Tom**: Orientações sobre o tom da apresentação
- **Perguntas**: Possíveis questionamentos da audiência

## 🎨 Elementos Visuais

A apresentação inclui:
- **Gráficos interativos**: Comparação tributária, distribuição de lucros
- **Timeline visual**: Cronograma de implementação
- **Ícones personalizados**: Para vantagens e etapas do plano
- **Alertas de urgência**: Contador regressivo até 31/12/2025
- **Métricas de impacto**: Valores financeiros e ROI

## 📱 Responsividade

- **Desktop**: Experiência completa com todos os recursos
- **Tablet**: Layout adaptado para telas médias
- **Mobile**: Interface otimizada para smartphones
- **Impressão**: Versão otimizada para PDF/Papel

## 💡 Dicas para Apresentação

### Preparação
1. **Estude as notas**: Leia todas as notas do apresentador
2. **Prepare números reais**: Substitua os valores exemplificativos
3. **Teste o equipamento**: Verifique o projetor/som antes
4. **Tenha backup**: Salve uma cópia em PDF

### Durante a apresentação
1. **Mantenha o ritmo**: 15-20 minutos no total
2. **Interaja**: Faça perguntas para envolver a audiência
3. **Use as notas**: Consulte quando necessário
4. **Seja direto**: Foque nos pontos principais

### Tom recomendado
- **Urgente**: Mas sem parecer desesperado
- **Confiante**: Mostre domínio do assunto
- **Orientado para ação**: Sempre termine com próximos passos
- **Acessível**: Evite jargões técnicos excessivos

## 🔧 Personalização

### Cores e branding
Edite as variáveis CSS em `styles.css`:
```css
:root {
    --primary: #2563eb;        /* Azul principal */
    --secondary: #1e40af;      /* Azul escuro */
    --accent: #f59e0b;         /* Laranja */
    --success: #10b981;        /* Verde */
    --warning: #f59e0b;        /* Amarelo */
}
```

### Conteúdo
- **Textos**: Edite diretamente no `index.html`
- **Notas**: Modifique em `script.js` (função `getSlideNotes`)
- **Números**: Atualize os valores exemplificativos

### Imagens e logos
Substitua os SVGs por suas imagens/logos na pasta do projeto

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica
- **CSS3**: Estilos modernos e animações
- **JavaScript ES6+**: Funcionalidades interativas
- **SVG**: Gráficos escaláveis
- **Web APIs**: Fullscreen, touch events

## 📄 Arquivos do Projeto

```
PL 1087-2025/
├── index.html              # Estrutura da apresentação
├── styles.css              # Estilos e layout
├── script.js                # Navegação e controles
├── visual-elements.js       # Gráficos e elementos visuais
├── contexto.md               # Conteúdo base (referência)
└── README.md                # Este arquivo
```

## ⚠️ Importante

- **Prazo crítico**: 31/12/2025 é a data limite para formalização
- **Validação jurídica**: Consulte seu contador/advogado
- **Números reais**: Substitua os valores exemplificativos
- **Documentação**: Mantenha registros de todas as decisões

## 📞 Suporte

Para questões técnicas sobre a apresentação:
1. Verifique se todos os arquivos estão no mesmo diretório
2. Teste em diferentes navegadores (Chrome, Firefox, Safari)
3. Verifique o console do navegador (F12) para erros
4. Certifique-se de que JavaScript está habilitado

---

**Desenvolvido para apresentações corporativas sobre mudanças tributárias**  
*Baseado no PL 1087/2025 - Taxação de Dividendos*