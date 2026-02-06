# KGTHETECH.COM

**Official Website for KG The Tech | Hacking on a Budget**

Built from the hood, for the culture. Cybersecurity tools, ethical hacking devices, and tutorials by Kenneth Gilliam.

---

## 🌐 Live Site

**Production URL:** [https://kgthetech.com](https://kgthetech.com)

---

## 📖 About This Site

This is the official website for **KG The Tech** (Kenneth Gilliam), a self-taught cybersecurity specialist and hardware maker based in Aurora, Colorado. Kenneth builds ethical hacking tools, CANTennas, ESP32 development kits, and cyberdecks — all by hand, on a tight budget.

### Brand Identity: "Hacking on a Budget"

Kenneth is from New York, grew up in poverty, and represents hip-hop culture. Despite homelessness, back injuries, and financial struggles, he continues building professional-grade cybersecurity tools and working toward CompTIA certifications.

---

## 🎨 Design & Aesthetic

### Color Palette
- **Black** (#000000) - Background
- **Gold** (#D4AF37) - Primary accent (inspired by $100 bill filigree)
- **Neon Green** (#39FF14) - Hacker terminal aesthetic
- **Electric Cyan** (#00FFFF) - Trust, tech, clickable elements
- **White** (#FFFFFF) - Text
- **Red/Orange** - CTA buttons and urgency

### Visual Style
- Dark hacker theme with street art/graffiti elements
- NYC alleyway energy — urban, edgy, authentic
- Hip-hop culture, gold meets code
- Mobile-first responsive design
- Accessible, clean code

---

## 📄 Pages

### Core Pages
1. **index.html** - Home page with hero, featured products, testimonials, newsletter signup
2. **store.html** - 3 products (ESP32 kit, standard CANTenna, heavy-duty CANTenna) with PayPal buttons and legal disclaimers
3. **videos.html** - TikTok video embeds and subscriber content teasers
4. **subscribe.html** - Two subscription tiers ($5/month and $10/month) via PayPal
5. **about.html** - Kenneth's authentic story, timeline, skills, and goals
6. **donate.html** - Cash App donations ($GilliamTELLC) with progress tracker
7. **contact.html** - Contact form (Formspree), email, social links, location

### Bonus Features
8. **gallery.html** - Project portfolio with live build status tracker
9. **faq.html** - Comprehensive FAQ with accordion functionality

---

## 🛠️ Technical Stack

- **Pure HTML5** - Semantic, accessible markup
- **CSS3** - Custom styles with CSS variables, flexbox, grid, animations
- **Vanilla JavaScript** - Interactive features, no frameworks
- **GitHub Pages** - Static hosting
- **PayPal** - Product purchases and subscriptions
- **Cash App** - Direct donations
- **TikTok Embeds** - Video content integration
- **Formspree** - Contact form handling (requires setup)

---

## 🚀 Deployment

This site is designed for **GitHub Pages** with a custom domain.

### Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone https://github.com/zzeronerzz/KGTHETECH.COM.git
   cd KGTHETECH.COM
   ```

2. **Configure GitHub Pages:**
   - Go to repository Settings → Pages
   - Source: Deploy from branch `main` (or your preferred branch)
   - The `CNAME` file is already configured with `kgthetech.com`

3. **DNS Configuration (at your domain registrar):**
   ```
   A Record:  185.199.108.153
   A Record:  185.199.109.153
   A Record:  185.199.110.153
   A Record:  185.199.111.153
   CNAME:     www.kgthetech.com → kgthetech.com
   ```

4. **Verify deployment:**
   - Visit https://kgthetech.com
   - Check all pages load correctly
   - Test PayPal buttons (sandbox first)
   - Test responsive design on mobile

---

## 📝 Content Management

### Updating Product Information
Edit `store.html` to change product details, prices, or descriptions.

### Updating Donation Progress
In `donate.html`, update the progress bar data attributes:
```html
<div class="progress-bar" data-current="450" data-goal="5000"></div>
```

### Updating Build Status Tracker
In `gallery.html`, update the build percentage:
```html
<div class="build-percentage" data-value="75">0%</div>
```

### Contact Form Setup
Replace the Formspree placeholder in `contact.html`:
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```
Sign up at [formspree.io](https://formspree.io) to get your form ID.

### Adding Images
Place product photos and project images in the `images/` directory. Update the placeholder `<div class="card-image">` elements with:
```html
<img src="images/your-image.jpg" alt="Description">
```

---

## 🔧 Customization

### Colors
All colors are defined as CSS variables in `css/style.css`:
```css
:root {
    --black: #000000;
    --gold: #D4AF37;
    --neon-green: #39FF14;
    --cyan: #00FFFF;
    --white: #FFFFFF;
}
```

### Typography
Font families are defined in CSS variables:
```css
:root {
    --font-primary: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    --font-mono: 'Courier New', Courier, monospace;
}
```

### JavaScript Features
All interactive features are in `js/main.js`:
- Mobile menu toggle
- FAQ accordion
- Donation progress bar animation
- Build status tracker animation
- Scroll animations
- Newsletter form handler

---

## ⚖️ Legal

### Disclaimer
All products sold on this site are for **authorized testing, educational, and hobby use ONLY**. Comprehensive legal disclaimers are included on the store page and throughout the site.

**Key Points:**
- Buyer assumes 100% responsibility for lawful use
- Unauthorized interception, network access, or surveillance is ILLEGAL
- Products are sold AS-IS for educational/development purposes
- See full disclaimer on `store.html`

### Business Information
- **Business Name:** Gilliam Trades Enterprises LLC
- **Founded:** 2004
- **Location:** Aurora, Colorado
- **Owner:** Kenneth Gilliam

---

## 🔗 External Links

- **TikTok:** [@kgthetech](https://www.tiktok.com/@kgthetech)
- **LinkedIn:** [Kenneth Gilliam](https://www.linkedin.com/in/kgthetech)
- **GitHub:** [@zzeronerzz](https://github.com/zzeronerzz)
- **Etsy Shop:** [KGTheTech](https://www.etsy.com/shop/KGTheTech)
- **Email:** KGtechsupport@kgthetech.com
- **PayPal:** GilliamTradesEnterprisesLLC@gmail.com
- **Cash App:** $GilliamTELLC

---

## 📞 Support

For technical support, product questions, or business inquiries:
- **Email:** KGtechsupport@kgthetech.com
- **Contact Form:** https://kgthetech.com/contact.html
- **Response Time:** Usually 24-48 hours

---

## 🤝 Contributing

This is Kenneth's personal business website. If you find bugs or have suggestions, please open an issue or contact Kenneth directly.

---

## 📜 License

All content, code, and designs are © 2024 Gilliam Trades Enterprises LLC. All rights reserved.

The website code is provided for Kenneth's use. Product designs, branding, and content are proprietary.

---

## 🙏 Acknowledgments

**Built for Kenneth Gilliam**

**From the hood, for the culture. Hacking on a Budget.**

---

## 🏗️ Future Enhancements

- Add product images (replace placeholder emoji)
- Integrate subscriber content delivery platform
- Add blog/news section for updates
- Implement analytics (Google Analytics or privacy-focused alternative)
- Add customer review/rating system
- Create video tutorials page (subscriber content)
- Add email list management (Mailchimp integration)
- Implement inventory tracking for limited builds
- Add live chat support (optional)

---

**Questions?** Reach out to Kenneth at KGtechsupport@kgthetech.com

**Want to support?** Visit [kgthetech.com/donate](https://kgthetech.com/donate.html)