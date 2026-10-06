# MARCELLO.infra — V1

Site comercial B2B estático em Astro, preparado para publicação no Cloudflare Pages.

## Desenvolvimento

```sh
npm install
npm run dev
npm run build
npm run preview
```

## Antes de publicar

1. O domínio principal configurado é `https://mkdsdigital.com.br`. Configure esse domínio como domínio personalizado do projeto Pages e valide o DNS/TLS no Cloudflare.
2. O formulário valida os campos no navegador e prepara uma mensagem `mailto:` para `contato@mkdsdigital.com.br`; o visitante precisa confirmar o envio no seu próprio aplicativo de e-mail. Nenhum dado é transmitido nem armazenado pelo site. Para envio direto/CRM, substitua por uma integração segura e documente a política de privacidade.
3. E-mail, telefone, WhatsApp e LinkedIn já estão habilitados no site. Revise os dados exibidos se algum canal mudar.

No Cloudflare Pages, conecte o repositório GitHub `snowrobot0001/marcello-infra`, use `npm run build` como comando de build e `dist` como diretório de saída. A instalação usa `npm install`. O domínio apex `mkdsdigital.com.br` deverá ser adicionado em Custom Domains no projeto Pages; acompanhe as instruções de DNS/TLS do painel antes de anunciar o site.

## Conteúdo

Serviços, tecnologias e modelos de atuação ficam em `src/data/site.ts`. A página inicial e estilos estão em `src/pages/index.astro`; componentes compartilhados ficam em `src/components` e `src/layouts`.

