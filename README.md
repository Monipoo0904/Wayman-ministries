# Wayman Temple AME Church — website

Next.js site for Wayman Temple (wayman.org/ministries), deployed on Vercel.

## Live content

The site updates itself — no redeploy needed:

- **Events** come from the church's existing calendar on wayman.org
  (The Events Calendar plugin). Add or edit events there as usual; the site
  refreshes every 15 minutes. If an event has a **cost** set, the site sells
  tickets for it through Stripe.
- **Videos** come from the church's YouTube channel feed and refresh every
  30 minutes.

## Giving & registration setup

Copy `.env.example` and fill in the keys (locally in `.env.local`, and in
Vercel → Settings → Environment Variables):

| Feature | Variables | Without them |
| --- | --- | --- |
| Online giving + event tickets | `STRIPE_SECRET_KEY`, `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | Give button opens the existing Vanco page |
| Registration emails | `RESEND_API_KEY`, `REGISTRATION_FROM_EMAIL`, `REGISTRATION_TO_EMAIL` | Forms ask people to email temple@wayman.org |

Gifts can be one-time or monthly to **Tithes** or **Offerings**. Payments,
receipts and recurring gifts are managed in the Stripe dashboard.

Registrations (plan a visit, event RSVP, ministry/volunteer sign-up) are
emailed to `REGISTRATION_TO_EMAIL` with reply-to set to the person, and the
person receives a confirmation email.

## Development

```bash
npm install
npm run dev
```
