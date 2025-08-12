# SnailTrail — Skin1004-inspired Landing + Razorpay (/pay)

This is a minimal Next.js Pages Router project styled with Tailwind (Skin1004-like colors). Ready to upload to GitHub and deploy on Vercel (no local terminal required).

## Quick deploy (no terminal)
1. Unzip and upload files to a new GitHub repo via the web UI (Add file → Upload files).
2. In Vercel, import your GitHub repo and deploy.
3. Add environment variables in Vercel settings (NEXT_PUBLIC_RAZORPAY_KEY and RAZORPAY_KEY_SECRET).

## Local testing (optional)
1. Install Node.js LTS.
2. Run `npm install` then `npm run dev`.

## Pages
- `/` : Premium landing with "Add to cart" & "Buy Now" → goes to `/pay`.
- `/pay` : Razorpay checkout integration (test mode).

Remember to replace placeholder images in /public with real assets.
