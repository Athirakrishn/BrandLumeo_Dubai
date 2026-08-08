# Deploy to Namecheap cPanel (Static Hosting)

Namecheap shared cPanel **cannot run** `npm start` / Node.js the same way as your computer.
You must upload the **static export** from the `out` folder.

## Step 1 — Build on your computer

```bash
npm install
npm run build
```

This creates an **`out`** folder with your full website (HTML + CSS + JS + images + keywords).

## Step 2 — Upload to cPanel

1. Log in to **Namecheap cPanel**
2. Open **File Manager**
3. Go to **`public_html`** (or your domain folder)
4. **Delete old files** inside (old `index.html`, old site files) — keep a backup first if needed
5. Upload **everything inside the `out` folder** (not the `out` folder itself)
   - `index.html`
   - `about/`, `services/`, `portfolio/`, `blog/`, `contact/`
   - `_next/` folder (required!)
   - `images/` folder
   - `.htaccess`

## Step 3 — Check your site

Visit your domain. Hard refresh: `Ctrl + Shift + R`

### Verify SEO keywords
- **View Page Source** → search `Best Digital Marketing Agency`
- Meta description is in `<head>` — not visible on the page design

## Important

| Do NOT upload | DO upload |
|---------------|-----------|
| `src/` folder | Contents of `out/` |
| `node_modules/` | `_next/` folder |
| `.next/` folder | `images/` folder |
| Whole project zip | `.htaccess` |

## After every update

1. Run `npm run build` on your computer
2. Re-upload the new **`out`** folder contents to cPanel

## Optional — Node.js on Namecheap

If your plan has **Setup Node.js App** in cPanel, you can run Next.js with Node instead.
Most shared plans use static upload above — that is the recommended method.
