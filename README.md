# DeAlba & Sons LLC Premium Website

Static Netlify-ready website for DeAlba & Sons LLC.

Production domain:

https://dealbaandsons.com/

## Deployment

This repo is designed for GitHub -> Netlify continuous deployment.

Netlify settings:

- Build command: leave blank
- Publish directory: .
- Branch: main

## Clean URL structure

The site now uses real directory pages instead of rewrite-only flat pages:

- `/` -> `index.html`
- `/ova/` -> `ova/index.html`
- `/services/` -> `services/index.html`
- `/process/` -> `process/index.html`
- `/about/` -> `about/index.html`
- `/book/` -> `book/index.html`
- `/privacy/` -> `privacy/index.html`
- `/terms/` -> `terms/index.html`
- `/thank-you/` -> `thank-you/index.html`
- `/paid/` -> `paid/index.html`

This is better for Google Search Console and avoids redirect-error indexing problems.

## Stripe payment links

Do not place secret keys in this repo.

Only add public Stripe Payment Link URLs in `stripe-config.js`.

Example:

```js
window.DEALBA_STRIPE_LINKS = {
  ova: "https://buy.stripe.com/your_public_payment_link",
  validationSprint: "",
  launchBlueprint: "",
  operationsAudit: "",
  advisory: ""
};
```

Leave a value blank to keep the related checkout button hidden.

## SEO notes

- Sitemap: `/sitemap.xml`
- Robots: `/robots.txt`
- Primary domain: `https://dealbaandsons.com/`
- LinkedIn company page: `https://www.linkedin.com/company/dealba-and-sons-consulting/`
- Legal business email: `emanuel@dealbaandsons.com`
- Do not add public address, phone, fake hours, fake testimonials, fake metrics, or public OVA pricing unless approved.

## Codex instructions

Follow `AGENTS.md` before making edits.


## Funnel decision
Primary conversion path: OVA purchase through Stripe. Secondary path: short fit question by email only. Do not expose calendar scheduling before payment.

OVA Stripe link: https://buy.stripe.com/14A7sE2ktblL4sF2wt6J201
