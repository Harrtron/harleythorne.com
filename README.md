# harleythorne.com

Personal website hosted on GitHub Pages.

## Setup

1. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Source: Deploy from a branch
   - Branch: `main` / `/ (root)`
   - Click Save

2. **Custom Domain Configuration**
   - The `CNAME` file is already configured with `harleythorne.com`
   - Configure DNS at your domain registrar:
     - **Option A (Recommended)**: Add a CNAME record pointing `harleythorne.com` to `[username].github.io`
     - **Option B**: Add A records pointing to GitHub Pages IPs:
       - `185.199.108.153`
       - `185.199.109.153`
       - `185.199.110.153`
       - `185.199.111.153`
   - Wait for DNS propagation (can take up to 24 hours)
   - GitHub will automatically detect the CNAME file and configure HTTPS

3. **Add Your Content**
   - Replace `assets/photo.jpg` with your headshot
   - Update social links in `index.html` (LinkedIn, Twitter URLs)
   - Add your experience entries in the Experience section
   - Add your projects in the Projects section
   - Customize the About section text

## Local Development

Simply open `index.html` in a browser, or use a local server:

```bash
# Python 3
python -m http.server 8000

# Node.js (if you have http-server installed)
npx http-server
```

Then visit `http://localhost:8000`

## Structure

- `index.html` - Main page structure
- `styles.css` - All styling
- `main.js` - Minimal interactions
- `CNAME` - Custom domain configuration
- `assets/` - Images and other assets
