# Comando único — recriar o site Esporte em Rota / ORION (estado final)

**Antes de colar:** no projeto novo, anexe o design system **"ORION Analysis — Design System"** e faça upload do **logo ER** (PNG com fundo transparente).

Cole tudo abaixo como primeira mensagem. Ele já entrega o site no estado exato desta etapa — sem precisar de ajustes depois.

---

Crie o site institucional da empresa **Esporte em Rota (ER)**, cujo produto principal é o **ORION Analysis**. Não me faça perguntas — siga exatamente este briefing.

## Contexto do negócio
Esporte em Rota leva análise de jogo profissional para o futebol de base — escolinhas e clubes pequenos, que não são televisionados, não têm vídeo para análise e não têm banco de dados de desempenho. O produto **ORION Analysis** é câmera + software: filma a partida inteira sem operador, a IA rastreia os jogadores e gera cortes de vídeo, relatórios de performance e histórico de evolução do atleta. Posicionamento: a **alternativa nacional** ao Veo, feita para a realidade brasileira. "Rota" significa direção e propósito — direcionar a carreira do atleta.

- **Valores:** Inovação · Performance · Visibilidade do atleta · Prosperidade · Profissionalismo
- **Público:** dirigentes de clubes, donos de escolinhas, comissões técnicas e pais de atletas
- **Visão:** expansão em franquias pelo Brasil e Europa

## Identidade visual — tema CLARO litorâneo
Reescreva os tokens de cor do design system para tema claro com esta paleta:

- `#00a6a6` **teal** — cor principal (botões, palavra-destaque, ícones)
- `#7bdff2` **aqua** — secundária, brilhos
- `#f2e8cf` **areia** — fundos quentes
- `#f4a261` **coral** — único acento quente (nunca como cor de área)
- `#264653` **azul-mar profundo** — texto

Clima: ensolarado, litorâneo, animado. Fundo creme (`#fdf9f1`), cards brancos, texto azul-mar, sombras suaves com tom de mar, brilhos suavizados para tema claro.

**Tipografia:** Chakra Petch (display) · IBM Plex Sans (corpo) · IBM Plex Mono (dados, eyebrows em caixa alta com tracking largo).
**Motifs:** grid de dados e dot-matrix de fundo, brilhos radiais suaves, overlays de rastreamento (linhas tracejadas animadas, brackets de foco, chips de telemetria, mapa de calor).

## Estrutura — site multi-página
- **Home** — hero com foto e overlay de rastreamento · o problema da base (3 cards + frase de impacto) · teaser do ORION (4 passos + painel de dashboard + o que você recebe) · diferenciais/valores (5 cards + bloco "alternativa nacional") · produtos (3 cards) · teaser do sobre · prova social (4 métricas com contador animado + 2 depoimentos + logos de clubes) · CTA final
- **ORION-Analysis** — página do produto com painel interativo: abas, player com rastreamento, stats, mapa de calor
- **Escolinhas** — plataforma de gestão de alunos, turmas e comunicação com os pais
- **Camera** — locação de câmera avulsa, inclusive para pais de atletas
- **Sobre** — marca, conceito de "rota", visão
- **Contato** — formulário (nome, e-mail, WhatsApp, tipo de organização, interesse, mensagem)

## Header e logo
- Header fixo, translúcido com blur, e o **logo ER no canto superior esquerdo em destaque (altura ~56px), SEM o texto "Esporte em Rota" ao lado** — só a marca
- Recorte as margens transparentes do PNG do logo antes de usar; sem caixa ou fundo atrás dele
- Mesmo logo no rodapé (~68px) e como favicon
- Menu: ORION Analysis · Escolinhas · Câmera · Sobre · Contato, com versão mobile
- Alternador **PT/EN** no header, persistindo a escolha
- Botão CTA "Solicitar demonstração" no header

## Requisitos
- Site **bilíngue PT/EN** completo
- Animações expressivas: reveal ao rolar, contadores animados nas métricas, linhas de rastreamento animadas, scan no hero; respeitando `prefers-reduced-motion`
- Áreas de **placeholder para eu soltar minhas fotos depois** (fotos de jogos da base, avatares dos depoimentos)
- Botão flutuante de WhatsApp
- No botão secundário do hero, "Conhecer o ORION", use um **ícone de radar em traço** (círculos concêntricos com marcações) — não use o logo ali
- Depoimentos e logos de clubes como placeholders bem construídos
- Contato: WhatsApp **(11) 94491-1475** · e-mail **contato@esporteemrota.com.br** · São Paulo, Brasil
- Métricas de destaque (placeholders): 40+ clubes parceiros · 1.200+ atletas monitorados · 8.000+ cortes de vídeo · 98% recomendam

## Tom de voz
Técnico, sério e preciso — "futebol não é para descontrair, é uma profissão". Ousado mas profissional. Números são conteúdo, nunca decoração. Eyebrows em mono caixa alta (ex.: `// O PROBLEMA`). Headlines em sentence case com uma palavra em destaque no gradiente teal. **Sem emoji.**
