# Rao Advisory Partners – static website

Pages: index.html (Home), about.html, services.html, why-choose-us.html, contact.html, 404.html

## Deploy on Vercel
1. Unzip this folder.
2. Option A: drag the folder onto https://vercel.com/new (or push it to GitHub and import the repo).
   Option B: run `npx vercel --prod` inside the folder.
3. Framework preset: "Other". No build command, output directory = root.
4. In Vercel > Project > Settings > Domains, add raoadvisorypartners.com and www.raoadvisorypartners.com
   and set the DNS records Vercel shows you at your domain registrar.

## Editing
- Colours and fonts: css/style.css (top of file)
- Logo: images/logo.svg (header) and images/logo-light.svg (footer)
- Illustrations: images/*.svg – replace with photos (same file names, or update the <img> src) if you prefer.
- The contact form opens the visitor's email app addressed to contact@raoadvisorypartners.com.
  To receive submissions without an email app, swap it for a form service such as Formspree.
