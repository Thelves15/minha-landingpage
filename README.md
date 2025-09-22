# Landing Page – Thelves Andrade

Site institucional focado em conversão, performance e SEO. Produção: `https://bythelves.site/`.

## Visão Geral
- Design moderno, responsivo e orientado a resultados
- Estrutura semântica e SEO on-page configurados
- Portfólio, depoimentos, planos e CTA integrados ao WhatsApp
- Stack simples (HTML/CSS/JS) para manutenção e deploy estático

## Demo
- Produção: `https://bythelves.site/`

## Tecnologias
- HTML5 semântico
- CSS3 (layout responsivo e animações)
- JavaScript (efeitos e UX)
- Google Fonts (Work Sans, Open Sans)

## Estrutura do Projeto
```
minha-landingpage-master/
  ├─ public/
  │  ├─ file-_1_.jpg
  │  ├─ foto site contadora.png
  │  ├─ foto site dentista.png
  │  └─ ChatGPT Image 17 de ago. de 2025, 15_16_38.png
  ├─ index.html
  ├─ styles.css
  └─ script.js
```

## Como Rodar Localmente
- Opção 1: abra `index.html` diretamente no navegador.
- Opção 2 (recomendado): servidor local para evitar problemas de cache/paths.
  - VS Code + Live Server: clique em “Go Live”.
  - Node: `npx serve .` e acesse `http://localhost:3000`.

## Deploy
Site estático — opções recomendadas:
- Netlify, Vercel, GitHub Pages, Cloudflare Pages, S3/CloudFront
- Aponte a raiz do projeto como diretório público

Boas práticas de produção:
- Cache de longo prazo para `*.css`, `*.js` e imagens
- Compressão de imagens (WebP/AVIF quando possível)
- Compressão HTTP (Gzip/Brotli) habilitada no host

## SEO (aplicado)
- Title/description voltados a conversão e atendimento nacional (Brasil)
- Open Graph e Twitter Cards com URLs absolutas do domínio
- Canonical: `https://bythelves.site/`
- Hierarquia de headings consistente (H1 no herói; H2 por seção)
- `alt` descritivo e `loading="lazy"` em imagens
- JSON‑LD `ProfessionalService` + listas (serviços e portfólio)

Checklist adicional (opcional):
- Minificar `styles.css` e `script.js`
- Converter imagens pesadas para WebP/AVIF
- Renomear arquivos com espaços/acentos para melhor compatibilidade/CDN

## Acessibilidade
- Contraste verificado em textos principais
- Textos alternativos em imagens
- Foco em legibilidade e hierarquia visual

## Personalização Rápida
- Cores/tipografia: ajuste variáveis em `:root` no `styles.css`
- Conteúdo: edite blocos em `index.html`
- Efeitos/UX: funções em `script.js` (scroll reveal, botões, etc.)

## Contato
- Site: `https://bythelves.site/`
- WhatsApp: `https://wa.me/5598970005227`
- E‑mail: `thelvesrocha2@gmail.com`
- Instagram: `https://www.instagram.com/thel.dev/`
- GitHub: `https://github.com/Thelves15`

## Licença
Projeto de uso profissional próprio. Reutilize sob sua responsabilidade e mantenha créditos quando aplicável.

