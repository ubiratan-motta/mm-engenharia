# Copilot Instructions — MM Engenharia (Site Institucional)

Você está atuando no repositório do **site institucional da MM Engenharia**, um projeto estático (HTML + CSS + JS) hospedado via GitHub Pages e conectado ao Wix.

## Princípios

1. **Sem frameworks** — HTML5, CSS3 e JavaScript vanilla (ES5-safe para máxima compatibilidade com embed Wix).
2. **Mobile-first** — sempre respeite os breakpoints existentes (`1100`, `900`, `768`, `420`).
3. **Design System VOLT** — use exclusivamente as variáveis CSS de `assets/css/styles.css` (`--volt`, `--slate`, `--g-brand`, `--r-card`, etc.). Nunca hardcode cores hex já tokenizadas.
4. **Acessibilidade first** — todo elemento interativo deve ter `aria-*` apropriado, foco visível e ser navegável por teclado. Respeite `prefers-reduced-motion`.
5. **SVGs inline** — ícones devem ser SVGs inline (estilo Lucide), nunca dependa de fontes de ícones.
6. **Sem dependências de build** — não introduza Webpack, Vite, npm, etc. sem aprovação explícita.

## Estrutura esperada

- `index.html` — landing page única (todas as seções em uma página com âncoras).
- `assets/css/styles.css` — único arquivo de estilo, organizado por seção (`/* ── HEADER ── */`).
- `assets/js/main.js` — interações em IIFE, ES5-safe.
- `assets/images/` — somente arquivos estáticos.

## Convenções de classes (VOLT)

| Prefixo | Uso                                 |
|---------|-------------------------------------|
| `v*`    | Componentes globais (`vbtn`, `vbadge`, `vcard`, `vpill`) |
| `h*`    | Hero / cards do hero (`hcard`, `hkpi`, `hstat`)          |
| `p*`    | Cards de produtos (`pcard`, `pcta`, `pfeat`)             |
| `d*`    | Diferenciais (`dcard`, `dmain`, `dstat`)                 |
| `cta-*` | Seção CTA final                     |
| `ft-*`  | Footer                              |
| `rv/rvl/rvr` | Scroll reveal (já gerenciado por `main.js`) |

## Acessibilidade — checklist

- `<section>` com `aria-labelledby` apontando para o `<h2>` correspondente.
- Decorações visuais marcadas com `aria-hidden="true"`.
- Listas semânticas usam `role="list"` + `role="listitem"` apenas quando o CSS remove os `disc`.
- Todo `<button>` tem `aria-label` quando contém apenas ícone.

## Commits

Use **Conventional Commits** em português:

- `feat: adicionar seção de cases`
- `fix: corrigir overflow do menu mobile em iOS`
- `style: ajustar contraste do botão CTA`
- `docs: atualizar guia de integração Wix`
- `chore: configurar workflow de deploy`

## Antes de mudar algo crítico

- **Tipografia / cores** → discutir antes (impacta marca).
- **Estrutura HTML do hero** → o conteúdo é equilibrado com o mockup analytics; alterações em uma metade exigem revisão da outra.
- **Formulário de lead** → integração futura com Wix CRM. Mantenha `submitLead()` isolado em `assets/js/main.js`.

## Integração Wix

Quando precisar integrar com Wix Velo:

- Crie pasta `wix/` na raiz com `package.json` do Wix CLI.
- Backend Wix vive em `wix/backend/` (.jsw / .web.js).
- Frontend Wix em `wix/src/pages/` ou `wix/src/public/`.
- Não misture código Wix Velo com o site estático — manter separação clara.

## Não faça

- Não adicione bibliotecas externas via CDN (jQuery, GSAP, etc.) sem motivo claro.
- Não converta este projeto em Next.js / React. Para isso há outros repositórios (`mm-clinic-pro`, `beauty-pro`, `mm-seller-pro-2.0`).
- Não comente código removido — confie no Git.
