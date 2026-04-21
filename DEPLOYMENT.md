# Ask Build Burn Less - Website Setup & Deployment Guide

Welcome! This repository now contains a beautiful, accessible website built with MkDocs and Material theme, ready to be deployed to GitHub Pages.

## Website Features

✅ **Beautiful Responsive Design** - Matches the Scaling Guacamole design aesthetic with card-based layouts  
✅ **Light/Dark Mode** - Toggle between themes with persistent preference  
✅ **Accessible** - OpenDyslexic font support, keyboard navigation, ARIA labels  
✅ **Video Support** - Embedded HTML5 videos that autoloop and are muted by default  
✅ **Hero Images** - Each chapter features a hero image at the top  
✅ **Mobile Friendly** - Fully responsive design for all screen sizes  

## Local Development

### Prerequisites
- Python 3.8+
- pip

### Setup

1. **Install dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

2. **Serve locally:**
   ```bash
   mkdocs serve
   ```
   
   Visit `http://localhost:8000` in your browser. The site will auto-reload when you make changes.

3. **Build static files:**
   ```bash
   mkdocs build
   ```
   
   This creates the `site/` directory with all static HTML files.

## Deployment to GitHub Pages

### Initial Setup

The website is configured to automatically deploy to GitHub Pages when you push to the `main` branch.

#### Step 1: Enable GitHub Pages

1. Go to your repository settings: `https://github.com/codess-aus/AskBuildBurnNDC/settings`
2. Navigate to **Pages** (left sidebar)
3. Under "Build and deployment":
   - Select **Source**: `Deploy from a branch`
   - Select **Branch**: `gh-pages`
   - Select **Folder**: `/ (root)`
4. Click **Save**

#### Step 2: Automatic Deployment

The GitHub Actions workflow (`.github/workflows/deploy.yml`) will:
1. Automatically run when you push to `main`
2. Install all dependencies
3. Build the MkDocs site
4. Deploy to the `gh-pages` branch
5. GitHub Pages will automatically serve the updated site

Your site will be available at: `https://codess-aus.github.io/AskBuildBurnNDC/`

### Manual Deployment (Advanced)

If you need to deploy manually:

```bash
# Build the site
mkdocs build

# Deploy to GitHub Pages
mkdocs gh-deploy
```

## Website Structure

```
docs/
├── index.md                 # Home page
├── 1-AskBuildBurn.md       # All 21 chapters
├── ...
├── 21-takeways.md
├── images/                 # Hero images for chapters
├── videos/                 # Demo videos
└── (mkdocs configuration)

site/                       # Generated static files (git ignored)
theme/                      # Custom theme files
├── base.html              # Base template
├── js/
│   ├── theme.js          # Dark mode toggle
│   └── main.js           # Video handling, accessibility
└── stylesheets/
    └── main.css          # Custom styling
```

## Configuration

### mkdocs.yml

The main configuration file contains:
- Site metadata (name, description, URL)
- Theme settings (colors, fonts)
- Navigation structure
- Plugin configuration

### Customization

#### Change Site Title
Edit `site_name` in `mkdocs.yml`

#### Change Theme Colors
Edit the color palette in `mkdocs.yml` under `theme.palette`

#### Update Navigation
Edit the `nav` section in `mkdocs.yml`

#### Custom Domain (Optional)
To use a custom domain:
1. Add `cname: yourdomain.com` in `.github/workflows/deploy.yml`
2. Configure your domain's DNS to point to GitHub Pages
3. See [GitHub docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site) for details

## Content Management

### Adding/Edit Chapters

1. Edit markdown files in `docs/`
2. Each chapter automatically includes:
   - Hero image from `docs/images/`
   - Responsive video player if videos are referenced
   - Full accessibility features

### Adding Videos

Videos demonstrate the concepts. They:
- Autoplay and loop automatically
- Are muted by default (no sound interruption)
- Use HTML5 `<video>` tag for broad compatibility
- Adapt to screen size responsively

### Adding Images

Place new images in `docs/images/` and reference them:
```markdown
![Description](../images/filename.png)
```

## Accessibility Features

The website includes:
- **OpenDyslexic Font** - Easier to read for people with dyslexia
- **Keyboard Navigation** - Full tab key support
- **ARIA Labels** - Screen reader support
- **Color Contrast** - WCAG AAA compliance
- **Focus Indicators** - Clear focus states
- **Reduced Motion Support** - Respects prefers-reduced-motion
- **Video Controls** - Accessible video player with captions support

## Troubleshooting

### Deployment Not Working

Check the GitHub Actions logs:
1. Go to **Actions** tab in your repository
2. Click on the most recent workflow run
3. Check for errors in the logs

Common issues:
- Python version mismatch (use 3.11)
- Missing dependencies (run `pip install -r requirements.txt`)
- Incorrect git branch (should be `main`)

### Site Not Appearing

1. Verify GitHub Pages is enabled (see Initial Setup above)
2. Wait 1-2 minutes after first deployment
3. Check that the `gh-pages` branch exists in your repository
4. Clear your browser cache

### Images/Videos Not Loading Locally

If running `mkdocs serve`, images and videos should load automatically from `docs/images/` and `docs/videos/`.

## Browser Support

The website works on:
- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)  
- Safari (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- Static site generation (no server needed)
- ~30 static files (very fast)
- Optimized images and videos
- ~2-3 second load time on average connection

## Security

- No server-side code (fully static)
- No user data collection or tracking
- All content served over HTTPS (automatic with GitHub Pages)

## License

The website uses the [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/) theme.

## Support

For issues or questions:
1. Check [MkDocs Documentation](https://www.mkdocs.org/)
2. Check [Material Theme Documentation](https://squidfunk.github.io/mkdocs-material/)
3. Check [GitHub Pages Help](https://docs.github.com/en/pages)

---

**Ready to deploy?** Push your changes to `main` and the GitHub Actions workflow will automatically build and deploy your site! 🚀
