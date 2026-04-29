# MM Engenharia — Site Institucional

Site institucional oficial da **MM Engenharia** — empresa que desenvolve sistemas inteligentes de gestão com Analytics e Visualização de Dados (ClinicPro, BeautyPro e SellerPro).

> Projeto estático (HTML + CSS + JS) versionado no GitHub e conectado ao **Wix** como página oficial da empresa.

## Stack

- **HTML5** semântico + acessibilidade (ARIA, skip-link, `prefers-reduced-motion`)
- **CSS3** puro com Design System próprio (`VOLT`) e variáveis CSS
- **JavaScript** vanilla (ES5-safe) — scroll reveal, mobile menu, formulário
- **Fonts:** Inter (300–900) + JetBrains Mono — via Google Fonts
- **Hospedagem:** GitHub Pages → embed/conexão Wix

## Estrutura

```
.
├── index.html                # Página única (landing)
├── assets/
│   ├── css/styles.css        # Design System VOLT
│   ├── js/main.js            # Interações (reveal, menu, form)
│   └── images/               # Assets visuais (logos, OG, favicons)
├── .github/
│   ├── copilot-instructions.md
│   ├── ISSUE_TEMPLATE/
│   ├── PULL_REQUEST_TEMPLATE.md
│   └── workflows/pages.yml   # Deploy GitHub Pages
├── .editorconfig
├── .gitignore
└── README.md
```

## Design System — VOLT

| Token        | Valor                           |
|--------------|---------------------------------|
| Volt Blue    | `#33A1E0`                       |
| Deep Blue    | `#0066CC`                       |
| Dark Slate   | `#0F172A`                       |
| Ghost White  | `#F8FAFC`                       |
| Emerald      | `#10B981`                       |
| Amber        | `#F59E0B`                       |
| Radius Cards | `24px`                          |
| Radius Btns  | `16px`                          |
| Radius Icons | `12px`                          |

Efeitos: **Panel Shadow**, **Brand Glow**, **Glassmorphism** no header.

## Desenvolvimento

Por ser estático, basta abrir o `index.html` no navegador. Para servir localmente com live-reload:

```bash
# Opção 1 — Node.js
npx serve .

# Opção 2 — Python
python -m http.server 8080

# Opção 3 — VS Code
# Use a extensão "Live Server" e clique em "Go Live"
```

Acesse `http://localhost:8080` (ou a porta indicada).

## Integração com o Wix

O fluxo de publicação é:

1. **GitHub** — fonte da verdade do código (este repositório).
2. **GitHub Pages** — publicação automática a cada push em `main` via workflow `.github/workflows/pages.yml`.
3. **Wix** — página oficial da MM Engenharia.

### Opções de conexão Wix → GitHub Pages

- **Embed (iframe):** adicionar elemento *HTML iframe* no Wix Studio/Editor apontando para a URL do GitHub Pages.
- **Velo (Wix CLI):** usar o Wix CLI para sincronizar código de páginas/widgets entre o Wix e este repositório (recomendado para integrações server-side com formulários e CMS Wix).
- **Domínio próprio:** configurar `mmengenharia.com.br` no GitHub Pages via DNS e apontar subpáginas do Wix conforme necessário.

> O formulário de leads atualmente abre o WhatsApp pré-preenchido. Para integrar com **Wix Forms / Wix CRM** ou um endpoint serverless, edite `submitLead()` em `assets/js/main.js`.

## Convenções de código

- Mobile-first; breakpoints `1100`, `900`, `768`, `420`.
- HTML semântico com `aria-*` e `role` em listas decorativas.
- Sem dependências de build — escreva CSS/JS prontos para o navegador.
- IDs e classes seguem o padrão **VOLT** (`vbtn`, `vcard`, `pcard`, `dcard`, `hcard`, `vbadge`, etc.).
- Commits no padrão **Conventional Commits** (`feat:`, `fix:`, `chore:`, `docs:`, `style:`, `refactor:`).
- Branch principal: `main`. Toda mudança via Pull Request.

## Acessibilidade

- Skip-link para o conteúdo principal.
- Navegação operável por teclado (foco visível, `Esc` fecha menu mobile).
- Contraste validado (Volt Blue sobre Dark Slate).
- Respeita `prefers-reduced-motion`.

## Performance

- Sem frameworks/JS pesado.
- Fontes via `preconnect` + `display=swap`.
- CSS e JS minificáveis (não obrigatório — peso atual já é leve).
- Sem imagens externas críticas no above-the-fold (SVGs inline).

## Roadmap

- [ ] Integrar formulário com Wix Forms / Wix CRM
- [ ] Adicionar OG image, favicons e manifest
- [ ] Página `/obrigado` para conversão pós-formulário
- [ ] Política de Privacidade (LGPD) e Termos de Uso
- [ ] Analytics (GA4 / Wix Analytics)
- [ ] Testes E2E básicos com Playwright

## Contato

- **Site:** mmengenharia.com.br
- **WhatsApp:** [(41) 99890-9345](https://wa.me/5541998909345)
- **E-mail:** contato@mmengenharia.com.br
- **Local:** Curitiba, PR — Brasil

---

© 2026 MM Engenharia — Todos os direitos reservados.
