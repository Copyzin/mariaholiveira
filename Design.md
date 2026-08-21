# Dra. Mariah Oliveira — Style Reference
> warm lotus editorial

**Theme:** light

O site da Dra. Mariah Oliveira (Biomédica Esteta, CRBM 69057) é um editorial quente e acolhedor — canvas Lotus White (#FFF8F5) interrompido por superfícies Lotus Blush (#FCEDEE) e pela tipografia como protagonista. A abertura foge ao canvas claro: uma hero de viewport inteiro em fundo escuro #07101A gerado por shader WebGL2 (prismatic drift), com conteúdo centralizado e o lótus da logo desabrochando como marca d'água. O sistema cromático sai direto da logo: Lotus Red (#E33D4B) como única cor de ação primária, Sage Green (#4CAF7A) reservado exclusivamente à conversão (agendamento/WhatsApp), Deep Espresso (#3E2723) como tinta dominante de todo o texto. A tipografia carrega o peso do design: Playfair Display para headlines editoriais refinadas, Lato para corpo de texto legível e humano, Poppins para UI e navegação geométrica, e Alex Brush como assinatura script — usada com parcimônia, nunca em corpo. Cartões flutuam com raio generoso, sombra quente mínima e separação por tinta de superfície. Botões são sempre pill. A estrutura cromática da página conta a progressão das camadas da logo — extremidades escuras clareando: a hero escura abre para Serviços em Lotus Deep (#E0000A), Localização em Lotus Red (#E33D4B) e o manifesto editorial alinhado à esquerda em Lotus Pink (#EB839E), fechando num CTA de campo claro ultra-borrado gerado por shader. A estética comunica +20 anos de experiência em remodelação corporal, drenagem linfática, pós-operatório e flacidez: sofisticada, feminina e precisa — nunca clínica-fria.

## Tokens — Colors

| Name | Value | Token | Role |
|------|-------|-------|------|
| Lotus White | `#FFF8F5` | `--color-lotus-white` | Background geral do site, canvas dominante, áreas de respiro, containers |
| Lotus Blush | `#FCEDEE` | `--color-lotus-blush` | Backgrounds de seção, cards, banners suaves, hover states |
| Lotus Pink | `#EB839E` | `--color-lotus-pink` | Rosa suave da logo — fundo sólido do manifesto (Filosofia), acentos decorativos, floreios script, detalhes de destaque |
| Lotus Red | `#E33D4B` | `--color-lotus-red` | Cor primária — fundo sólido de Localização, header, botões principais, CTAs, links ativos, ícones principais |
| Lotus Deep | `#E0000A` | `--color-lotus-deep` | Vermelho mais profundo da logo — fundo sólido de Serviços, hover/pressed do botão primário, ênfase máxima |
| Lotus Night | `#2E0E10` | `--color-lotus-night` | Acento script "Florescer" do manifesto (sobre rosa) e véus escuros de mídia — nunca fundo de seção |
| Sage Green | `#4CAF7A` | `--color-sage-green` | Cor de acento — botões de conversão (agendamento/WhatsApp), badges de sucesso, ícones de benefício, separadores |
| Deep Espresso | `#3E2723` | `--color-deep-espresso` | Cor de texto — títulos, parágrafos, legendas, todo conteúdo legível |

## Tokens — Typography

### Playfair Display — Headlines editoriais e display — 120px hero (fluido, clamp 44–120px), ~76px manifesto, 48px abertura de seção, 36px feature, 28px sub-feature. A única família usada em tamanhos ≥ 36px; transmite a sofisticação refinada da marca (depoimentos, assinaturas, títulos de seção). · `--font-playfair`
- **Font file:** `fonts/PlayfairDisplay-*.ttf` (Regular, Medium, Bold, ExtraBold, Black + itálicos)
- **Weights:** 400, 500, 700
- **Sizes:** 24, 28, 36, 48, 72
- **Line height:** 1.08–1.3
- **Letter spacing:** -0.02em no display 72px, -0.01em em 48px, neutro abaixo de 36px
- **Role:** Headlines editoriais e display — hero fluida até 120px, manifesto ~76px, 48px abertura de seção, 36px feature, 28px sub-feature. Itálico reservado para citações e depoimentos.

### Lato — Corpo de texto, legendas e micro-copy. Humanista de curvas abertas — amigável, legível e "quente"; equilibra a informalidade da Alex Brush. 17px/400 para corpo primário (line-height 1.6), 14px/400 para legendas e listas, 12px/400 para fine print. · `--font-lato`
- **Font file:** `fonts/Lato-Regular.ttf`
- **Weights:** 400
- **Sizes:** 12, 14, 17, 20
- **Line height:** 1.45–1.7
- **Letter spacing:** neutro
- **Role:** Corpo de texto, legendas e micro-copy. 17px/400 para corpo primário (line-height 1.6), 14px/400 para legendas, 12px/400 para fine print.

### Poppins — Navegação, botões, labels e eyebrow. Geométrica e moderna, cria contraste limpo com a fluidez da script; profissionalismo sem perder o acolhimento. 14px/500 para itens de nav e labels de botão, 12px/600 uppercase para eyebrows. · `--font-poppins`
- **Font file:** `fonts/Poppins-*.ttf` (Regular, Medium, SemiBold)
- **Weights:** 400, 500, 600
- **Sizes:** 12, 14, 16
- **Line height:** 1.4–1.5
- **Letter spacing:** +0.08em em eyebrows uppercase, neutro no restante
- **Role:** Navegação, botões, labels e eyebrow. 14px/500 para itens de nav e labels de botão, 12px/600 uppercase com tracking aberto para eyebrows.

### Alex Brush — Assinatura script e acentos caligráficos. Usada apenas em momentos pontuais: assinatura "Dra. Mariah Oliveira" e palavras-chave em headlines (ex.: uma palavra em script dentro de um título Playfair). Nunca em corpo, nav ou botões. · `--font-alex-brush`
- **Font file:** `fonts/AlexBrush-Regular.ttf`
- **Weights:** 400
- **Sizes:** 28, 36, 48
- **Line height:** 1.2
- **Letter spacing:** neutro
- **Role:** Assinatura script e acentos caligráficos pontuais — máximo um momento script por viewport.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Family | Token |
|------|------|-------------|----------------|--------|-------|
| caption | 12px | 1.45 | 0 | Lato | `--text-caption` |
| eyebrow | 12px | 1.4 | +0.08em | Poppins 600 uppercase | `--text-eyebrow` |
| body-sm | 14px | 1.55 | 0 | Lato | `--text-body-sm` |
| body | 17px | 1.6 | 0 | Lato | `--text-body` |
| subheading | 24px | 1.35 | 0 | Playfair Display | `--text-subheading` |
| heading-sm | 28px | 1.25 | 0 | Playfair Display | `--text-heading-sm` |
| heading | 36px | 1.2 | -0.005em | Playfair Display | `--text-heading` |
| heading-lg | 48px | 1.12 | -0.01em | Playfair Display | `--text-heading-lg` |
| display | 72px | 1.08 | -0.02em | Playfair Display | `--text-display` |
| script | 36px | 1.2 | 0 | Alex Brush | `--text-script` |

## Tokens — Spacing & Shapes

**Density:** comfortable

### Spacing Scale

| Name | Value | Token |
|------|-------|-------|
| 4 | 4px | `--spacing-4` |
| 8 | 8px | `--spacing-8` |
| 10 | 10px | `--spacing-10` |
| 12 | 12px | `--spacing-12` |
| 14 | 14px | `--spacing-14` |
| 20 | 20px | `--spacing-20` |
| 24 | 24px | `--spacing-24` |
| 28 | 28px | `--spacing-28` |
| 32 | 32px | `--spacing-32` |
| 40 | 40px | `--spacing-40` |
| 56 | 56px | `--spacing-56` |
| 80 | 80px | `--spacing-80` |
| 120 | 120px | `--spacing-120` |

### Border Radius

| Element | Value |
|---------|-------|
| cards | 28px |
| buttons | 9999px (full pill) |
| chips / badges | 9999px |
| nav-pill | 32px |
| small-elements | 12px |

### Shadows

| Name | Value | Token |
|------|-------|-------|
| subtle | `rgba(62, 39, 35, 0.06) 0px 2px 12px 0px` | `--shadow-subtle` |
| lift | `rgba(62, 39, 35, 0.10) 0px 12px 40px -8px` | `--shadow-lift` |

### Layout

- **Page max-width:** 1280px
- **Section gap:** 80px (hero ocupa o viewport inteiro, 100svh)
- **Card padding:** 40px
- **Element gap:** 12px
- **Section order:** Hero → Serviços → Localização → Filosofia (manifesto rosa) → Contato (CTA) → Footer

## Components

### Hero (prismatic drift)
**Role:** Abertura do site — apresentação da profissional

Viewport inteiro (min-height 100svh) em fundo escuro #07101A gerado por shader WebGL2 "prismatic drift" (port vanilla em `js/modules/hero-shader.js` do preset exportado: cores #07101A/#E33D4B/#FEF8F5, duotone 1, scanlines 0.71, grain 0.12, posterize 0.23, glow 0.48, vignette 0.22, contraste 1.08, animação preset 5, pace 0.16). O canvas do shader é absoluto dentro da hero, pausa fora da viewport, renderiza um frame estático com `prefers-reduced-motion` e cai para um gradiente radial CSS quando não há WebGL2. Um véu radial contínuo sobre o shader escurece o centro atrás do texto. Conteúdo centralizado: eyebrow Poppins 12px/600 uppercase com tracking 0.22em em #F2A7B4 ("Biomédica Esteta"); título Playfair Display weight 500 em clamp(44px, 9vw, 120px), line-height 1.05, tracking -0.02em, cor #FEF8F5, com reveal palavra a palavra (spans `.w` em translateY 112% → 0, stagger por `--d`) disparado após a intro via classe `.hero--in`; subtítulo Lato 17px rgba(254,248,245,.85) com max-width 48ch; CTA pill branco #FEF8F5 com texto #07101A ("Agendar avaliação", link WhatsApp). No canto inferior direito, o lótus da logo (as 5 camadas `assets/logo/layer-N.png`) atua como marca d'água a 0.16 de opacidade: desabrocha na entrada (bloom escalonado por pétala) e depois balança ao vento (`petalSway`, com as pétalas externas oscilando mais). Sem fotografia — as fotos hero-800/1600.webp restam apenas como og:image.

### Primary Red Pill Button
**Role:** Ação primária da seção — máximo um por viewport

Background #E33D4B (hover: #E0000A), texto #FFF8F5, Poppins 14px weight 500, border-radius 9999px (pill completo), padding 14px 28px, sem borda. Se presente, é o único botão preenchido vermelho na viewport — nunca dois lado a lado.

### Conversion Green Pill Button
**Role:** Botão de conversão — agendamento / WhatsApp (14 99632-4412)

Background #4CAF7A, texto #FFF8F5, Poppins 14px weight 500, border-radius 9999px, padding 14px 28px, com ícone de WhatsApp quando aplicável. Sage Green é reservado a este papel: nunca usar em headings, links de texto ou decoração.

### Text-Link Button
**Role:** Ação secundária ou terciária

Background transparente, texto #E33D4B, Lato 17px weight 400, com seta (→) ao final. Zero padding, zero borda. Underline apenas no hover. É o tipo dominante de ação secundária do site. Sobre imagem (hover de service card) ou fundo escuro, vira #FCEDEE; sobre o vermelho de Localização, vira branco puro (o vermelho original do link some no fundo).

### Service Card (hover revela foto)
**Role:** Card de serviço — transmite o tratamento por imagem

Background #FFF8F5 (`.card--inverted`, com `color: var(--color-deep-espresso)` explícito no `.card`) sobre a seção #E0000A de Serviços, border-radius 28px, sem borda, padding 40px. Estrutura: `figure.card__media` absoluta cobrindo o card (opacity 0, img com scale 1.08) + `.card__body` com ícone outline, headline Playfair 28px, corpo Lato 14px e text-link. No hover/focus-within a foto do tratamento correspondente fadeia para opacity 1 (img assenta para scale 1 em ~900ms) sob um scrim gradiente quente (espresso 0.30–0.70), e todo o texto vira Lotus White / Blush. Cada serviço tem sua própria foto (remodelação, drenagem, pós-operatório, flacidez). Em touch (sem hover), a foto vira header estático no topo do card (16:10), sem scrim. O card nunca depende de ícone sozinho para comunicar o serviço.

### Feature Card (Blush)
**Role:** Painel genérico de benefício ou conteúdo

Background #FCEDEE, border-radius 28px, sombra `--shadow-subtle` ou nenhuma, sem borda. Padding interno mínimo de 40px. Headline Playfair Display 28px #3E2723, corpo Lato 17px #3E2723, um text-link ao final. Ícones de benefício em Sage Green (#4CAF7A).

### Localização (editorial + mapa em arco)
**Role:** Endereço, horários e acesso — sobre a segunda camada da logo

Seção full-bleed em Lotus Red (#E33D4B) sólido (`.section--red`), com grid assimétrico 5fr/6fr (`.location__grid`, gap clamp 40–96px, alinhamento vertical centrado; abaixo de 900px empilha em coluna única). Coluna esquerda (`.location__content`): eyebrow branco, headline Playfair 48px branca com max-width 15ch, endereço como tipografia Playfair 28px (`address.location__address`, font-style normal), text-link "Como chegar" em branco (o vermelho original do link some no fundo), lista de horários `.location__hours` com divisórias hairline rgba(255,248,245,.32) — linhas flex space-between: dia à esquerda em branco 78%, horário à direita — e badge "Atendimento com hora marcada" na variante `.badge--light` (pill branco cheio, texto espresso). À direita, o iframe do Google Maps veste o arco da marca (`border-radius: 999px 999px var(--radius-cards) var(--radius-cards)`, aspect-ratio 4/4.4) com filtro CSS quente (`grayscale(.5) sepia(.3) saturate(1.4) hue-rotate(-18deg) brightness(1.02)`) para o mapa não introduzir verdes/azuis na seção vermelha, e sombra profunda quente rgba(46,14,16,.38) 0 28px 70px -18px. Textos sobre o vermelho: corpo em branco 92%, títulos/eyebrow/text-link em branco puro.

### Manifesto (Filosofia)
**Role:** Momento de impacto emocional — penúltima seção, antes do CTA

Seção full-bleed em Lotus Pink (#EB839E) sólido, min-height ~92svh, conteúdo alinhado à esquerda e centrado verticalmente. Eyebrow "Filosofia" em Poppins 12px/600 uppercase Deep Espresso. Texto do manifesto em Playfair Display display grande (clamp 2.5rem → 4.75rem, ~76px máx) weight 500, cor Deep Espresso (#3E2723) — branco sobre rosa falharia contraste — line-height 1.12, tracking -0.02em, max-width 22ch, com copy em quatro frases curtas e afirmativas ("Todo corpo carrega uma história. Escutá-la é o meu ofício há mais de vinte anos. Devolver forma, leveza e confiança é o meu trabalho. Florescer é o seu tempo.") e reveal palavra a palavra via scroll (opacity 0.12 → 1, scrub). A palavra script "Florescer" sai em Alex Brush Lotus Night (#2E0E10) na variante `.script-accent--night` — único uso do Lotus Night no corpo da página. Assinatura em Alex Brush Deep Espresso + credencial em Lato espresso 78% abaixo, à esquerda. É a terceira camada da progressão cromática da logo (vinho → vermelho → rosa) — o impacto vem da cor, não de elementos extras.

### Global Header + Hamburger Overlay
**Role:** Navegação persistente superior

Background #FFF8F5 com backdrop blur ao rolar, altura ~64px. Logo (ou "Mariah Oliveira" em Alex Brush) à esquerda, botão hamburger pill à direita que se transforma em X com animação fluida e abre uma UI de menu full-screen em overlay — transição suave de fade/slide do painel e stagger dos itens de menu (referência: jam.dev/c/050311a5). Links do overlay em Playfair Display grande com índice numérico Poppins em Lotus Pink. O overlay usa Lotus Blush (#FCEDEE) como superfície. Sobre a hero escura (topo, sem scroll) o header fica transparente, com marca e toggle em claro — toggle pill transparente com borda rgba(254,248,245,.30); ao rolar, volta ao padrão pill branco com blur. Com o menu overlay aberto, o header sobe acima do overlay via `body:has(.menu-overlay.is-open)` e tudo retorna ao escuro.

### Section Header Block
**Role:** Título editorial de seção

Eyebrow Poppins 12px/600 uppercase #E33D4B com tracking +0.08em, seguido de headline Playfair Display 48px weight 500 #3E2723, alinhamento à esquerda. Opcionalmente uma palavra da headline em Alex Brush. Espaçamento vertical de 80px da seção anterior. Sobre os fundos coloridos da progressão (Serviços #E0000A, Localização #E33D4B), eyebrow e headline vão a Lotus White e o corpo do header a branco 92%.

### Info Footer Band
**Role:** Rodapé com contato, horário e endereço

Background #FCEDEE, full-width, padding vertical generoso (~56px). Colunas em Lato 14px #3E2723: horários (Seg–Sex 08h–18h, Sáb 08h–14h), endereço (Rua Doutor Augusto Barreto, 380, Jd. Maria Izabel, Marília-SP), links sociais (Facebook, Instagram) e WhatsApp. Linha de fine print com CRBM 69057. Sem divisores visíveis — apenas espaçamento separa as colunas.

### Badge (Especialidade / credencial)
**Role:** Indicador de credencial ou benefício

Pill transparente com borda 1px #4CAF7A e texto #4CAF7A (`.badge--benefit`) ou preenchimento #FCEDEE com texto #3E2723 (`.badge--credential`), sempre Poppins 12px/500. Sobre os fundos vermelhos da progressão (Localização), a variante `.badge--light` é pill branco cheio com texto espresso — é o caso de "Atendimento com hora marcada". Credenciais fortes (ex.: "+20 anos") vivem em texto corrido — subtítulo da hero, copy da Filosofia — nunca em card.

## Do's and Don'ts

### Do
- Use #E33D4B (Lotus Red) como única cor de botão primário — um por viewport, hover sempre em #E0000A.
- Reserve #4CAF7A (Sage Green) exclusivamente para conversão (agendamento/WhatsApp), badges de sucesso e ícones de benefício.
- A separação entre superfícies vem da tinta, não de bordas: canvas #FFF8F5, blush #FCEDEE (footer, menu overlay, cards) e os blocos coloridos sólidos da progressão da logo (#E0000A → #E33D4B → #EB839E).
- Use Playfair Display em todos os tamanhos ≥ 28px e Lato em todo corpo de texto; Poppins fica restrita a nav, botões e eyebrows.
- Use Alex Brush no máximo uma vez por viewport — assinatura ou uma palavra-acento.
- Apresente credenciais como tipografia em texto corrido ("+20 anos" vive no subtítulo da hero e na copy da Filosofia), nunca como cards flutuantes com numeralão.
- Mantenha os fundos sempre em blocos de cor sólida, sem degradês — com duas exceções de shader: o prismatic drift da hero (#07101A) e o campo ultra-borrado em deriva lenta do contato (CTA final). Os blocos coloridos seguem a progressão das camadas da logo, da hero escura ao fecho claro: Serviços em Lotus Deep (#E0000A), Localização em Lotus Red (#E33D4B), Filosofia em Lotus Pink (#EB839E) — não existe mais seção "night" no corpo da página.
- Nos cards de serviço, revele a foto do tratamento no hover com scrim quente e texto claro.
- Mantenha 80px de gap vertical entre seções editoriais; a hero ocupa o viewport inteiro (100svh) com conteúdo centrado.
- Use pill completo (9999px) em todos os botões, independente da largura.

### Don't
- Não use nenhuma cor de botão além de #E33D4B (primário), #4CAF7A (conversão) e a variante branca `.btn--light` (uso exclusivo sobre o fundo #E0000A de Serviços) — nunca dois preenchidos na mesma linha.
- Não coloque bordas ou sombras pesadas em cards; separação por tinta de superfície e whitespace.
- Não use cards flutuantes de estatística (número grande + legenda) sobre imagens — é o padrão genérico que este design evita.
- Não use Alex Brush em corpo de texto, navegação, botões ou qualquer string longa — é script de acento apenas.
- Não introduza cores fora da paleta (os três tons da logo + Lotus Night + Sage Green + Deep Espresso + Lotus White/Blush + o escuro da hero #07101A com seus acentos #F2A7B4/#FEF8F5).
- Não use pesos decorativos ou famílias fora do quarteto Playfair / Lato / Poppins / Alex Brush.
- Não use raios fora de 12px (small), 28px (card), 32px (nav pill) e 9999px (pill).
- Não use gradientes em nenhuma seção — fundos são sempre blocos de cor sólida; as únicas exceções são o shader prismatic drift da hero e o campo ultra-borrado animado no fundo do contato (CTA final).

## Surfaces

| Level | Name | Value | Purpose |
|-------|------|-------|---------|
| 0 | Lotus White Canvas | `#FFF8F5` | Background geral do site, áreas de respiro |
| 1 | Lotus Blush | `#FCEDEE` | Footer, menu overlay, cards, hover states e hover do botão light |
| 2 | Lotus Deep | `#E0000A` | Seção de Serviços — fundo sólido, primeira camada colorida da progressão da logo |
| 3 | Lotus Red | `#E33D4B` | Seção de Localização — fundo sólido, segunda camada da progressão |
| 4 | Lotus Pink | `#EB839E` | Seção de Filosofia (manifesto) — fundo sólido, terceira camada da progressão |
| 5 | Lotus White Card | `#FFF8F5` | Cards de serviço sobre a seção #E0000A (inversão para hierarquia) |
| 6 | Lotus Night | `#2E0E10` | Acento script "Florescer" do manifesto (sobre rosa) e véus escuros de mídia — nunca fundo de seção |
| 7 | Hero Night | `#07101A` | Exclusiva da hero — fundo escuro gerado pelo shader prismatic drift; única superfície escura do site |

## Elevation

- **Card hover / menu overlay:** `rgba(62, 39, 35, 0.10) 0px 12px 40px -8px`
- **Subtle inset (raro):** `rgba(62, 39, 35, 0.06) 0px 2px 12px 0px`

Sombras sempre quentes (base Deep Espresso), nunca cinza-neutras ou azuladas.

## Imagery

Fotografia profissional e quente é o meio visual principal: tratamentos reais de estética corporal (massagem modeladora, drenagem linfática, cuidado pós-operatório, firmeza da pele), sempre em alta resolução (fonte ≥ 2400px, export webp q85 em 1600w e 800w) e temperatura de cor quente que converse com o canvas #FFF8F5. Nada de fotografia clínica fria (fundo branco-estéril, azul hospitalar) nem imagem sobre-comprimida/borrada. A hero não usa fotografia — seu visual vem do shader prismatic drift e do lótus marca d'água. Cada card de serviço tem sua foto correspondente, revelada no hover (desktop) ou fixa no topo (touch). A logo (logo png.png / logo layers) aparece em versões recortadas por camada quando útil como elemento decorativo. Ícones são glyphs outline minimalistas em #E33D4B (principais), #4CAF7A (benefícios) ou #3E2723 (neutros), stroke 1.5px. Ilustrações abstratas são ausentes — a linguagem é fotografia + tipografia + os três tons da logo.

## Motion & Interaction

- **Intro + cursor customizado** (referência: simonholm.studio): ponto preenchido de 10px em Lotus White com `mix-blend-mode: difference` (inverte qualquer fundo, claro ou escuro), que cresce sutilmente para scale 2.2 (~22px) sobre elementos interativos (`.is-active`) — menor e mais tímido que um anel; segue o ponteiro com lerp suave (gsap quickTo 0.35s), só roda em hover/pointer:fine e some ao sair da janela (`.cursor-dot` segue oculto no markup). E uma intro de primeira visita (overlay com bloom da logo + nome) que, ao terminar, dispara o reveal da hero via `.hero--in`.
- **Shader prismatic drift da hero:** WebGL2 vanilla (`js/modules/hero-shader.js`) rodando o preset exportado (cores #07101A/#E33D4B/#FEF8F5, duotone, scanlines, grain, posterize, glow, vignette; pace 0.16), escopo absoluto na hero (100svh); pausa fora da viewport, reduced-motion renderiza um frame estático e a ausência de WebGL2 cai para um gradiente radial CSS. O título da hero entra com reveal palavra a palavra (translateY 112% → 0, stagger por `--d`) após a intro.
- **Lótus marca d'água:** as 5 camadas da logo fixas no canto inferior direito da hero (opacidade 0.16) desabrocham na entrada (bloom escalonado por pétala) e depois balançam ao vento com `petalSway` — as pétalas externas oscilam mais.
- **Header + transições de seção** (referência: off.site): fade suave entre seções durante o scroll — o conteúdo entra com opacidade e leve deslocamento vertical, nunca com cortes secos.
- **Menu hamburger** (referência: jam.dev/c/050311a5): animação de morph do ícone hamburger → X e transição do overlay de menu, com stagger na entrada dos itens.
- **Campo ultra-borrado do contato** (referência: off.site): shader WebGL1 (`js/modules/shader-gradient.js`) exclusivo do fundo da seção de contato (CTA final), único movimento de fundo do site — fundação vertical clara (#FFF8F5 no topo aprofundando para rosado embaixo, mix blush→pink) atravessada por 4 massas enormes de blush/pink/red/white com falloff larguíssimo, em deriva lenta (Lissajous dessincronizado, t = time × 0.05), com dithering por hash (±0.007) para matar o banding; DPR cap 1.5, pausa fora da viewport (IntersectionObserver) e com a aba oculta (visibilitychange), frame estático em reduced-motion e remoção silenciosa sem WebGL. Sobre o campo claro: texto espresso, botão `.btn--conversion` sage e text-link vermelho "Seguir no Instagram".
- **Manifesto:** reveal palavra a palavra com scrub de scroll (opacity 0.12 → 1) sobre o Lotus Pink sólido.
- **Service cards:** foto do tratamento fade + scale 1.08 → 1 no hover (~900ms), com transição de cor do texto para claro.
- Todas as animações são suaves (ease-out, 300–600ms), respeitando `prefers-reduced-motion`.

## Agent Prompt Guide

Quick Color Reference:
- text: #3E2723
- background: #FFF8F5
- surface alt: #FCEDEE
- section progression (camadas da logo): #E0000A Serviços → #E33D4B Localização → #EB839E Filosofia → campo claro no CTA
- primary action: #E33D4B (hover #E0000A)
- conversion: #4CAF7A
- decorative accent: #EB839E
- script accent (manifesto, sobre rosa): #2E0E10
- dark surface (hero only): #07101A — shader prismatic drift, única superfície escura do site

Example Component Prompts:
1. Hero section: viewport inteiro (100svh) com fundo escuro #07101A gerado por shader WebGL2 prismatic drift (preset exportado; cores #07101A/#E33D4B/#FEF8F5, duotone, scanlines 0.71, grain 0.12, posterize 0.23, glow 0.48, vignette 0.22, pace 0.16) e véu radial escurecendo o centro. Conteúdo centralizado: eyebrow Poppins 12px/600 uppercase tracking 0.22em #F2A7B4 ("Biomédica Esteta"); título Playfair Display 500 clamp(44px, 9vw, 120px) #FEF8F5 com reveal palavra a palavra após a intro; subtítulo Lato 17px rgba(254,248,245,.85) max-width 48ch; CTA pill branco #FEF8F5 com texto #07101A ("Agendar avaliação", WhatsApp). Lótus da logo em 5 camadas como marca d'água (opacidade 0.16) no canto inferior direito, com bloom escalonado na entrada e sway contínuo. Sem fotografia.
2. Seção de Serviços: fundo sólido #E0000A (`.section--deep`) com header em Lotus White (eyebrow, h2, parágrafos); cards brancos: background #FFF8F5, radius 28px, sem borda, padding 40px, texto espresso e ícone outline #E33D4B. No hover, foto do tratamento cobre o card (fade + scale settle) sob scrim espresso em gradiente; texto vira #FFF8F5/#FCEDEE. Touch: foto fixa no topo 16:10. CTA da seção: `.btn--light` (pill branco, texto espresso).
3. Localização: fundo sólido #E33D4B (`.section--red`), grid assimétrico 5fr/6fr. Esquerda: eyebrow branco, h2 Playfair branco (max 15ch), endereço em Playfair 28px, text-link "Como chegar" branco, horários em hairlines rgba(255,248,245,.32) (dia em branco 78% à esquerda, horário à direita) e `.badge--light` "Atendimento com hora marcada" (pill branco, texto espresso). Direita: iframe do Maps em arco (border-radius 999px 999px 28px 28px, aspect-ratio 4/4.4) com filtro quente (grayscale/sepia/hue-rotate) e sombra rgba(46,14,16,.38). Mobile (<900px): coluna única.
4. Botão de conversão: background #4CAF7A, texto #FFF8F5, Poppins 14px/500, radius 9999px, ícone WhatsApp. Label "Agendar horário".
5. Manifesto: seção 92svh em Lotus Pink #EB839E sólido, editorial alinhado à esquerda; eyebrow "Filosofia" em Poppins uppercase espresso; texto Playfair Display até ~76px Deep Espresso #3E2723 com reveal por palavra no scroll (opacity 0.12 → 1, scrub) e palavra script "Florescer" em Alex Brush Lotus Night #2E0E10; assinatura Alex Brush espresso + credencial Lato espresso 78%.
6. Footer: background #FCEDEE, colunas Lato 14px #3E2723 com horários, endereço, redes sociais e WhatsApp; fine print com CRBM 69057; sem divisores visíveis.

## Typographic Philosophy

Sistema de quatro famílias com papéis estritos: Playfair Display domina o editorial (≥ 28px, headlines e display), Lato carrega todo o corpo e micro-copy, Poppins resolve a camada de UI (nav, botões, eyebrows) com sua geometria limpa, e Alex Brush existe apenas como assinatura — no máximo um momento script por viewport. O contraste entre a serifada refinada, a humanista quente e a geométrica moderna equilibra sofisticação e acolhimento; a script adiciona o gesto pessoal e feminino da marca. Letter-spacing é neutro ou levemente negativo nas serifadas grandes, aberto (+0.08em) apenas nos eyebrows uppercase. Numerais de destaque ("+20") aparecem em Playfair bold dentro de texto Poppins — nunca como card isolado.

## Layout Philosophy

Seções full-bleed empilhadas verticalmente, conteúdo centrado em container de ~1280px. A abertura é uma hero de viewport inteiro (100svh) em fundo escuro #07101A com shader prismatic drift, conteúdo centralizado e o lótus da logo como marca d'água — sem fotografia. As demais superfícies são blocos de cor 100% sólida com cortes secos entre seções, contando a progressão cromática das camadas da logo (extremidades escuras clareando): Serviços em Lotus Deep #E0000A, Localização em Lotus Red #E33D4B e o manifesto em Lotus Pink #EB839E, até o fecho claro do CTA — um campo ultra-borrado gerado por shader. A hero #07101A é a única superfície escura do site, e há apenas duas exceções de shader: o prismatic drift da hero e o campo ultra-borrado do contato. Cards são módulos de conteúdo (serviços, benefícios), não scaffolding de layout — a página lê como um editorial contínuo de scroll. Navegação é uma única barra superior persistente com menu hamburger em overlay full-screen. Ritmo: 80px entre seções editoriais, 40px entre cards adjacentes, 12px entre elementos pareados. Ordem: Hero → Serviços → Localização → Filosofia → Contato.

## Visual Language

A linguagem é calorosa e editorial: fotografia profissional dos tratamentos em temperatura quente e alta resolução, tipografia serifada elegante com acentos caligráficos pontuais, e os três vermelhos/rosas da logo (#E0000A, #E33D4B, #EB839E) como única família cromática além do verde de conversão e do espresso de texto. Ícones outline minimalistas, sem ilustrações abstratas nem 3D. Cor decorativa limitada aos acentos Lotus Pink em floreios e detalhes. O clímax visual é a progressão completa das camadas da logo — da hero escura #07101A ao campo claro ultra-borrado do CTA. Movimento suave e cinematográfico: cursor customizado, fades de seção, menu overlay animado e hover-fotos nos serviços. Densidade equilibrada: imagem e tipografia dividem o protagonismo.

## Similar Brands

- **Aesop** — Mesma restrição cromática quente com tipografia editorial serifada e ritmo de seções generoso.
- **Goop** — Mesma combinação de feminilidade sofisticada: serifadas elegantes, blush tones e fotografia lifestyle quente.
- **Apple** — Mesma disciplina de uma única cor de ação por seção, botões pill e separação de superfícies por tinta.
- **Glossier** — Mesma paleta rosa-blush com tipografia limpa e tom acolhedor voltado a bem-estar e beleza.

## Quick Start

### CSS Custom Properties

```css
:root {
  /* Colors */
  --color-lotus-white: #FFF8F5;
  --color-lotus-blush: #FCEDEE;
  --color-lotus-pink: #EB839E;
  --color-lotus-red: #E33D4B;
  --color-lotus-deep: #E0000A;
  --color-lotus-night: #2E0E10;
  --color-sage-green: #4CAF7A;
  --color-deep-espresso: #3E2723;

  /* Typography — Font Families */
  --font-playfair: 'Playfair Display', Georgia, 'Times New Roman', serif;
  --font-lato: 'Lato', ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
  --font-poppins: 'Poppins', ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
  --font-alex-brush: 'Alex Brush', 'Playfair Display', cursive;

  /* Typography — Scale */
  --text-caption: 12px;
  --leading-caption: 1.45;
  --tracking-caption: 0;
  --text-eyebrow: 12px;
  --leading-eyebrow: 1.4;
  --tracking-eyebrow: 0.08em;
  --text-body-sm: 14px;
  --leading-body-sm: 1.55;
  --tracking-body-sm: 0;
  --text-body: 17px;
  --leading-body: 1.6;
  --tracking-body: 0;
  --text-subheading: 24px;
  --leading-subheading: 1.35;
  --tracking-subheading: 0;
  --text-heading-sm: 28px;
  --leading-heading-sm: 1.25;
  --tracking-heading-sm: 0;
  --text-heading: 36px;
  --leading-heading: 1.2;
  --tracking-heading: -0.005em;
  --text-heading-lg: 48px;
  --leading-heading-lg: 1.12;
  --tracking-heading-lg: -0.01em;
  --text-display: 72px;
  --leading-display: 1.08;
  --tracking-display: -0.02em;
  --text-script: 36px;
  --leading-script: 1.2;
  --tracking-script: 0;

  /* Typography — Weights */
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;

  /* Spacing */
  --spacing-4: 4px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-14: 14px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-28: 28px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-56: 56px;
  --spacing-80: 80px;
  --spacing-120: 120px;

  /* Layout */
  --page-max-width: 1280px;
  --section-gap: 80px;
  --card-padding: 40px;
  --element-gap: 12px;

  /* Border Radius */
  --radius-small: 12px;
  --radius-cards: 28px;
  --radius-nav-pill: 32px;
  --radius-full: 9999px;

  /* Shadows */
  --shadow-subtle: rgba(62, 39, 35, 0.06) 0px 2px 12px 0px;
  --shadow-lift: rgba(62, 39, 35, 0.10) 0px 12px 40px -8px;

  /* Surfaces */
  --surface-lotus-white-canvas: #FFF8F5;
  --surface-lotus-blush: #FCEDEE;
  --surface-lotus-white-card: #FFF8F5;
}
```

### Tailwind v4

```css
@theme {
  /* Colors */
  --color-lotus-white: #FFF8F5;
  --color-lotus-blush: #FCEDEE;
  --color-lotus-pink: #EB839E;
  --color-lotus-red: #E33D4B;
  --color-lotus-deep: #E0000A;
  --color-lotus-night: #2E0E10;
  --color-sage-green: #4CAF7A;
  --color-deep-espresso: #3E2723;

  /* Typography */
  --font-playfair: 'Playfair Display', Georgia, 'Times New Roman', serif;
  --font-lato: 'Lato', ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
  --font-poppins: 'Poppins', ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
  --font-alex-brush: 'Alex Brush', 'Playfair Display', cursive;

  /* Typography — Scale */
  --text-caption: 12px;
  --leading-caption: 1.45;
  --tracking-caption: 0;
  --text-eyebrow: 12px;
  --leading-eyebrow: 1.4;
  --tracking-eyebrow: 0.08em;
  --text-body-sm: 14px;
  --leading-body-sm: 1.55;
  --tracking-body-sm: 0;
  --text-body: 17px;
  --leading-body: 1.6;
  --tracking-body: 0;
  --text-subheading: 24px;
  --leading-subheading: 1.35;
  --tracking-subheading: 0;
  --text-heading-sm: 28px;
  --leading-heading-sm: 1.25;
  --tracking-heading-sm: 0;
  --text-heading: 36px;
  --leading-heading: 1.2;
  --tracking-heading: -0.005em;
  --text-heading-lg: 48px;
  --leading-heading-lg: 1.12;
  --tracking-heading-lg: -0.01em;
  --text-display: 72px;
  --leading-display: 1.08;
  --tracking-display: -0.02em;
  --text-script: 36px;
  --leading-script: 1.2;
  --tracking-script: 0;

  /* Spacing */
  --spacing-4: 4px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-14: 14px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-28: 28px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-56: 56px;
  --spacing-80: 80px;
  --spacing-120: 120px;

  /* Border Radius */
  --radius-small: 12px;
  --radius-cards: 28px;
  --radius-nav-pill: 32px;
  --radius-full: 9999px;

  /* Shadows */
  --shadow-subtle: rgba(62, 39, 35, 0.06) 0px 2px 12px 0px;
  --shadow-lift: rgba(62, 39, 35, 0.10) 0px 12px 40px -8px;
}
```
