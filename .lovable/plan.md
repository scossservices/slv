

## SLV Diesel Power System — React Recreation

Recreate the SLV Diesel Power System website (currently built with Next.js) as a React + Vite + Tailwind CSS application with the same visual output and functionality.

### 🎨 Design & Theme
- **Dark theme** with deep navy/dark background and **orange accent color** (matching the original Mahindra Powerol branding)
- Inter font family for clean typography
- Animated particle background canvas effect across the site
- Scroll-triggered animations (slide-in, fade-up) using Intersection Observer
- Glass-morphism navbar effect on scroll

### 📄 Single Page Sections

1. **Navbar** — Fixed top navigation with logo, section links (Home, About, Products, Why Us, Contact), active section highlighting on scroll, mobile hamburger menu, and glass effect on scroll

2. **Hero Section** — Full-screen hero with radial gradient background, animated grid pattern, headline "Powering Industries with Reliable Diesel Generators", call-to-action buttons (Get a Quote, Call Now), floating stat badges (Shield, Clock, Award, Cog icons), and mouse-parallax effects

3. **About Section** — Two-column layout with company image + overlay stats badge, feature cards (Authorized Dealer, Expert Team, Customer Focus, Proven Track Record), and certification badges list

4. **Products Section** — Product cards for Industrial Generators (125-3000 kVA), Commercial Generators (15-125 kVA), and Silent Generators (25-500 kVA) with images, feature tags, and "Get Quote" buttons. Plus a services grid (Installation, AMC, 24/7 Support, Spare Parts)

5. **Why Us Section** — Six reason cards with icons (Authorized Dealer, 15+ Years Experience, 24/7 Support, Quick Delivery, Timely Maintenance, Quality Assurance) plus animated counter stats (500+ Installations, 98% Satisfaction, 24/7 Support, 50+ Technicians)

6. **Contact Section** — Contact info cards (Location, Phone, Email, Working Hours) alongside a contact form (Name, Email, Phone, Subject, Message, Send button) with embedded Google Maps iframe

7. **Footer** — Company branding, footer link columns (Products, Services, Company), social media icons, newsletter signup, and copyright notice

### ⚙️ Technical Adaptations (Next.js → React/Vite)
- Replace `next/image` with standard `<img>` tags
- Replace Next.js `"use client"` directives (not needed in Vite)
- Recreate the `useInView` hook using Intersection Observer
- Port the canvas-based particles animation
- Convert the dark theme CSS variables from oklch to HSL format
- Add custom CSS animations (slide-up, slide-in-left, slide-in-right, fade-in)
- All images will use placeholder URLs (you can replace with your actual images later)

