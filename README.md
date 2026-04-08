# Softechgenics (Vite) + Next.js Email API

This repo is a Vite + React site. The contact form auto-sends email via a **Next.js API route** (no Express).

## Run the website (Vite)

```bash
npm run dev
```

## Run the email API server (Next.js)

The API listens on `http://localhost:4000/api/contact`.

```bash
# Windows PowerShell example
$env:SMTP_HOST="mail.softechgenics.com"
$env:SMTP_PORT="465
$env:SMTP_USER="suhaib@softechgenics.com"
$env:SMTP_PASS="Suhaib@321"
$env:SMTP_FROM="suhaib@softechgenics.com"     # optional
$env:SMTP_TO="maliksuhaib543@gmail.com"         # optional (defaults to maliksuhaib543@gmail.com)

npm run email:server
```

If you get `EADDRINUSE` on port `4000`, that means the email API is already running in another terminal.  
Use the existing running server, or stop it first:

```bash
taskkill /PID <pid> /F
```

## Frontend config (optional)

If you want to change the API URL the frontend calls, set:

- `VITE_EMAIL_API_URL` (example: `http://localhost:4000/api/contact`)
