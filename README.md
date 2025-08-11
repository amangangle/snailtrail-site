# SnailTrail — Next.js + Tailwind + Firebase (Razorpay-ready)

## What this is
A minimal, deployable Next.js scaffold tailored for SnailTrail: homepage, shop, product pages, cart, checkout integrated with Razorpay (test mode), Firebase for auth and Firestore. Deploy on Vercel and store code on GitHub.

## Quick local setup
1. Install dependencies:
   ```
   npm install
   ```
2. Copy `.env.local.example` to `.env.local` and fill in your Firebase and Razorpay credentials.
3. Run dev server:
   ```
   npm run dev
   ```

## Firebase setup (recommended)
1. Go to https://console.firebase.google.com/ and create a project.
2. In Project settings -> Add app -> Web app. Copy the config keys into `.env.local`.
3. Enable **Authentication** (Email/Password) in the Firebase Console.
4. Enable **Firestore** (start in test mode for initial testing) and **Storage** if you want to host images.
5. Use the provided `/lib/firebase.js` which reads from NEXT_PUBLIC_ env vars.

## Razorpay setup
1. Sign up at https://razorpay.com and get test API keys.
2. Paste `RAZORPAY_KEY_ID` and `RAZORPAY_KEY_SECRET` into `.env.local`.
3. The serverless endpoint `/pages/api/create-order.js` uses these keys to create orders.

## Deploy to Vercel
1. Push repository to GitHub.
2. Create a new project in Vercel and import your repo.
3. Add environment variables in Vercel (same keys in `.env.local`).
4. Deploy. Vercel will build and serve your app.

## Notes
- The project includes sample/dummy products stored locally for demo. Connect Firestore to make products editable.
- Payment flow is configured for Razorpay test mode. Switch to live keys when ready.
