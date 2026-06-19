# DeAlba & Sons LLC Website

Static Netlify site for DeAlbaAndSons.com.

## Current architecture

This repository intentionally uses a flat file structure to avoid GitHub browser-upload folder mistakes.

Netlify rewrites pretty URLs such as `/book/` to flat files such as `book.html`.

## Deploy settings

Build command: leave blank.
Publish directory: `.`

## Critical rules

- Do not list the official OVA price publicly.
- Primary CTA: Book Your OVA / Founder Launch Call.
- Keep the brand premium, restrained, black / ivory / champagne gold.
- Do not add fake metrics, fake testimonials, or fake media logos.
- Keep SDVOSB status in the footer.


## Brand refresh

This repo uses the final DeAlba & Sons black/ivory/champagne-gold identity. Do not reintroduce purple, neon gradients, generic AI graphics, or gimmicky motion backgrounds. The home button uses `brand-home-logo-ivory.png`. The favicon uses the new DeAlba mark.

Primary conversion goal: Book Your OVA / Founder Launch Call.


## SEO and Stripe update

This build removes public phone/address/email structured data, uses a controlled title/meta description system, and includes public Stripe Payment Link placeholders in `payment-links.js`.

Only paste public Stripe Payment Links beginning with `https://buy.stripe.com/`. Never add Stripe secret keys to this repo.
