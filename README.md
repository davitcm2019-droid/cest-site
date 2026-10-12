# CEST — site institucional

Next.js 16, React e TypeScript. Publicação vinculada ao repositório GitHub na Vercel.

## Desenvolvimento

- npm ci
- npm run dev
- npm run lint
- npm run build
- npm start

## Conteúdo e identidade

Contatos, responsável técnico, navegação e endereço público: src/config/siteConfig.ts.
Serviços e temas: src/data/.
Referência visual: design-system/cest/MASTER.md.

A imagem public/industrial-hero.webp foi gerada com o recurso ImageGen integrado e otimizada em WebP (1536 px). É uma cena industrial conceitual; não representa cliente ou instalação real. A fotografia de Eduardo e o logotipo são os ativos originais.

Brief de geração: fotografia editorial de corredor industrial com estrutura de aço grafite, luz natural, faixa de segurança verde-lima e profissional distante de capacete, sem marcas ou textos. Paleta dessaturada e perspectiva arquitetônica.

## Contato

O formulário valida os dados localmente e prepara uma URL do WhatsApp. O visitante abre o link e confirma o envio no WhatsApp. Não existe envio automático, serviço de e-mail ou banco de leads neste projeto.

## Publicação e verificação

Projeto Vercel: cest-site. Branch de produção: main.
Endereço público verificado: https://cest-site.vercel.app.
A configuração anterior apontava para www.cest-sst.com.br, que não resolvia em 12/10/2026. Atualize siteConfig.url somente após conectar e verificar um domínio próprio.

Antes de publicar: lint, build e teste de navegação/contato em desktop e celular. Preservar acessibilidade por teclado e preferência de movimento reduzido.
