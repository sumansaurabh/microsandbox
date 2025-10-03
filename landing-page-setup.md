# MicroSandbox Landing Page - Setup Guide

## 🎉 Your Landing Page is Ready!

A complete, production-ready landing page has been created at `landing-page.jsx`

## 📋 What's Included

### ✅ All Required Features

#### Layout & Structure
- ✅ Hero section with headline, subheading, and dual CTAs
- ✅ Product highlights with animated icons
- ✅ Detailed features section (6 key features)
- ✅ Demo/screenshot section with code example
- ✅ Testimonials section (3 reviews with ratings)
- ✅ Pricing section (3 tiers with monthly/yearly toggle)
- ✅ FAQ section with expandable accordions
- ✅ Blog/resources section (3 latest posts)
- ✅ Newsletter signup form
- ✅ Contact form with validation
- ✅ Comprehensive footer with navigation

#### Design
- ✅ Fully responsive (mobile-first approach)
- ✅ Modern clean UI (rounded cards, shadows, gradients)
- ✅ Sticky navigation bar
- ✅ Smooth scrolling animations (fade-in, slide effects)
- ✅ Dark/light mode toggle
- ✅ Hover states and transitions throughout

#### Functionality
- ✅ Contact form with validation
- ✅ Newsletter signup (email capture)
- ✅ Pricing toggle (Monthly vs Yearly)
- ✅ Multi-language dropdown (English + Spanish)
- ✅ Sticky CTA button on mobile
- ✅ Analytics event hooks (ready for integration)

#### Extra Features
- ✅ Chat widget placeholder
- ✅ Customer/partner logos section
- ✅ Case study highlights
- ✅ Video popup placeholder
- ✅ Back to top button
- ✅ Sticky header (already shrinks with transparency)
- ✅ Animated background blobs

## 🚀 How to Use

### Option 1: Quick Setup (Vite + React)

1. **Create a new React app:**
   ```bash
   npm create vite@latest microsandbox-landing -- --template react
   cd microsandbox-landing
   ```

2. **Install dependencies:**
   ```bash
   npm install
   npm install lucide-react
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p
   ```

3. **Configure Tailwind CSS:**

   Update `tailwind.config.js`:
   ```js
   /** @type {import('tailwindcss').Config} */
   export default {
     content: [
       "./index.html",
       "./src/**/*.{js,ts,jsx,tsx}",
     ],
     darkMode: 'class',
     theme: {
       extend: {},
     },
     plugins: [],
   }
   ```

   Update `src/index.css`:
   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

4. **Copy the landing page:**
   ```bash
   cp ../landing-page.jsx src/App.jsx
   ```

5. **Run the dev server:**
   ```bash
   npm run dev
   ```

### Option 2: Next.js Setup

1. **Create Next.js app:**
   ```bash
   npx create-next-app@latest microsandbox-landing
   cd microsandbox-landing
   ```

2. **Install dependencies:**
   ```bash
   npm install lucide-react
   ```

3. **Copy and adapt:**
   - Copy `landing-page.jsx` to `app/page.tsx`
   - Add `"use client"` at the top of the file
   - Update imports as needed

### Option 3: Add to Existing Project

Simply copy `landing-page.jsx` into your project and import it:

```jsx
import MicroSandboxLandingPage from './landing-page';

function App() {
  return <MicroSandboxLandingPage />;
}
```

## 🎨 Customization Guide

### 1. **Update Content (Hero Section)**
Find and modify these sections in the code:

```jsx
// Line ~200: Hero headline
headline: 'Execute Untrusted Code Safely',

// Line ~201: Subheading
subheading: 'Easy secure execution of untrusted user/AI code...',
```

### 2. **Change Features**
Modify the `features` array (around line 170):

```jsx
const features = [
  {
    icon: <Shield className="w-8 h-8" />,
    title: 'Your Feature',
    description: 'Your description',
    color: 'from-purple-500 to-pink-500'
  },
  // Add more features...
];
```

### 3. **Update Pricing**
Edit the `pricingPlans` array (around line 255):

```jsx
const pricingPlans = [
  {
    name: 'Plan Name',
    price: { monthly: 49, yearly: 470 },
    features: ['Feature 1', 'Feature 2'],
    // ...
  }
];
```

### 4. **Add Real Images/Videos**
Replace placeholders:

```jsx
// Line ~850: Demo video section
<div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900">
  {/* Replace with: */}
  <video src="/path/to/video.mp4" controls />
  {/* or */}
  <img src="/path/to/screenshot.png" alt="Demo" />
</div>
```

### 5. **Integrate Analytics**
Update the `handleAnalyticsEvent` function (around line 380):

```jsx
const handleAnalyticsEvent = (eventName, data) => {
  // Google Analytics
  if (window.gtag) {
    window.gtag('event', eventName, data);
  }

  // Mixpanel
  if (window.mixpanel) {
    window.mixpanel.track(eventName, data);
  }

  // Plausible
  if (window.plausible) {
    window.plausible(eventName, { props: data });
  }
};
```

### 6. **Connect Forms**
Update form handlers (around line 365):

```jsx
const handleNewsletterSubmit = async (e) => {
  e.preventDefault();

  // Send to your backend
  await fetch('/api/newsletter', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email })
  });
};

const handleContactSubmit = async (e) => {
  e.preventDefault();

  // Send to your backend
  await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(contactForm)
  });
};
```

## 🔧 Integration Tasks

### Add Live Chat
Find line ~1450 and integrate your chat service:

```jsx
// Replace with Intercom
onClick={() => window.Intercom('show')}

// Or Drift
onClick={() => window.drift.api.openChat()}

// Or Crisp
onClick={() => window.$crisp.push(['do', 'chat:open'])}
```

### SEO Meta Tags
Add to your HTML `<head>`:

```html
<!-- In index.html or _document.js -->
<head>
  <title>MicroSandbox - Secure Code Execution Platform</title>
  <meta name="description" content="Easy secure execution of untrusted user/AI code in isolated microVMs. Lightning-fast startup, hardware-level isolation." />

  <!-- Open Graph -->
  <meta property="og:title" content="MicroSandbox - Secure Code Execution" />
  <meta property="og:description" content="Execute untrusted code safely with microVMs" />
  <meta property="og:image" content="https://yourdomain.com/og-image.png" />
  <meta property="og:url" content="https://microsandbox.dev" />

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="MicroSandbox - Secure Code Execution" />
  <meta name="twitter:description" content="Execute untrusted code safely" />
  <meta name="twitter:image" content="https://yourdomain.com/twitter-image.png" />
</head>
```

### Add Real Countdown Timer
Uncomment and customize (around line 1455):

```jsx
// Add state
const [timeLeft, setTimeLeft] = useState({ hours: 23, minutes: 59, seconds: 59 });

// Add countdown logic
useEffect(() => {
  const timer = setInterval(() => {
    // Your countdown logic
  }, 1000);
  return () => clearInterval(timer);
}, []);
```

## 📱 Responsive Breakpoints

The landing page uses Tailwind's default breakpoints:
- `sm`: 640px (mobile landscape)
- `md`: 768px (tablet)
- `lg`: 1024px (desktop)
- `xl`: 1280px (large desktop)

## 🎯 Key Features Reference

### Navigation
- Sticky top nav with blur effect
- Mobile hamburger menu
- Smooth scroll to sections
- Dark mode toggle
- Language selector

### Animations
- Fade-in on scroll
- Blob animations in hero
- Hover effects on cards
- Transform scale on buttons
- Smooth transitions throughout

### Accessibility
- ARIA labels on buttons
- Semantic HTML
- Keyboard navigation support
- Focus states
- Alt text placeholders

## 🔗 External Links to Update

Find and replace these with your actual URLs:
- GitHub: `https://github.com/microsandbox/microsandbox`
- Documentation: `https://docs.microsandbox.dev`
- Discord: `https://discord.gg/T95Y3XnEAK`
- Social media links in footer

## 📦 Dependencies

```json
{
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "lucide-react": "^0.263.1"
  },
  "devDependencies": {
    "tailwindcss": "^3.3.0",
    "autoprefixer": "^10.4.14",
    "postcss": "^8.4.24"
  }
}
```

## 🚀 Deployment

### Vercel
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Drag and drop the dist/ folder to Netlify
```

### GitHub Pages
```bash
npm run build
# Use gh-pages package to deploy
```

## 📝 TODO After Setup

- [ ] Add real images to `/public` folder
- [ ] Record demo video
- [ ] Set up analytics (GA4, Plausible, etc.)
- [ ] Configure contact form backend
- [ ] Connect newsletter service (Mailchimp, ConvertKit, etc.)
- [ ] Add live chat widget
- [ ] Update all placeholder text
- [ ] Set up SEO meta tags
- [ ] Test on multiple devices
- [ ] Run Lighthouse audit
- [ ] Set up monitoring (Sentry, LogRocket, etc.)

## 🎨 Color Palette

Primary gradient: Purple (#9333EA) to Pink (#EC4899)
- Dark mode: Optimized variants
- Accent colors: Blue, Green, Orange for features

## 💡 Pro Tips

1. **Performance**: Images are currently placeholders - use optimized formats (WebP, AVIF)
2. **SEO**: Add structured data (JSON-LD) for rich snippets
3. **Analytics**: Track all button clicks for conversion optimization
4. **A/B Testing**: Test different headlines and CTAs
5. **Loading**: Add skeleton screens for better UX

## 🆘 Support

If you need help customizing:
1. All sections are clearly commented
2. Search for "TODO" in the code for integration points
3. Each component is modular and easy to modify

---

**Created for MicroSandbox** - A modern, conversion-optimized landing page built with React + Tailwind CSS ⚡
