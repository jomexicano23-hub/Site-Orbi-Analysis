# Esporte em Rota — ORBI (site)

Site institucional bilíngue (PT/EN, atualmente fixado em PT) da **Esporte em Rota**, com os produtos **ORBI Analysis**, **ORBI Academy** e **ORBI Go**.

## Como abrir no Claude Code

1. Baixe o projeto (zip) e descompacte numa pasta.
2. Abra essa pasta no **Claude Code**.
3. O site é **HTML estático** — não tem build. Para ver no navegador, sirva a pasta com um servidor estático simples, por exemplo:
   ```bash
   npx serve .
   # ou
   python3 -m http.server 8000
   ```
   Depois abra `http://localhost:8000/Home.dc.html`.

> Importante: os arquivos `.dc.html` dependem do runtime `support.js` e do `styles.css` (tokens de design) que já estão inclusos na pasta. Mantenha todos juntos e sirva via servidor (abrir o arquivo com `file://` não carrega o `support.js`).

## Páginas (entrypoints)

| Arquivo | Página |
|---|---|
| `Home.dc.html` | Home (institucional + vídeo de fundo) |
| `ORBI-Analysis.dc.html` | ORBI Analysis (produto de análise) |
| `ORBI-Academy.dc.html` | ORBI Academy (gestão + cursos) |
| `Camera.dc.html` | ORBI Go (locação sob demanda) |
| `Sobre.dc.html` | Sobre / história do José Mexicano |
| `Contato.dc.html` | Contato (WhatsApp, e-mail, Instagram) |
| `Ativar-Analise.dc.html` | Agendamento ORBI Analysis (form + contador 3 min) |
| `Agendar-Academy.dc.html` | Agendamento ORBI Academy (form próprio) |

**Compartilhados:** `SiteHeader.dc.html` (nav + seletor de idioma) e `SiteFooter.dc.html`, importados por todas as páginas via `<dc-import>`.

## Estrutura de arquivos

- `*.dc.html` — páginas (Design Components: template + lógica em cada arquivo).
- `support.js` — runtime dos Design Components (**não editar**).
- `styles.css` — ponto de entrada de CSS; importa os tokens.
- `tokens/` — variáveis de design (cores, tipografia, espaçamento, sombras, efeitos).
- `er.js` — scroll-reveal + contadores animados.
- `image-slot.js` — componente de placeholder de imagem (arrastar e soltar).
- `assets/` — logos, ícones da marca e fotos usadas nas páginas.
- `uploads/` — mídias originais enviadas (vídeos, imagens de origem).

## Identidade visual

Tema escuro "holográfico/HUD". Paleta principal: aqua-cyan `#00EEDD`, azul `#17A6FF`, violeta `#7C5CFF`, coral `#F4A261` (acento quente, uso pontual). Tipografia: Chakra Petch (display), IBM Plex Sans (texto), IBM Plex Mono (dados/labels). Todos os valores estão em `tokens/`.

## Contato / integrações

- WhatsApp: `(11) 94491-1475` → `https://wa.me/5511944911475`
- E-mail: `contato@esporteemrota.com.br`
- Instagram: `@esporteemrota`
- Os formulários de agendamento (Ativar-Analise, Agendar-Academy) hoje só validam no front-end e mostram a confirmação; **ainda não enviam** para e-mail/planilha/CRM.

## Pendências

- [ ] Trocar o vídeo do ORBI pela versão comercial sem marca d'água (hoje usa `assets/video-2.mp4`; trocável pelos tweaks `demoVideoSrc` / `demoYouTubeId`).
- [ ] Preencher o preço `[valor]` do pacote base do ORBI Go em `Camera.dc.html`.
- [ ] Conectar o envio dos formulários a um destino real (e-mail, planilha ou WhatsApp/CRM).
