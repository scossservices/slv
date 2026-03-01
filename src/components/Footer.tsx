import { useState } from "react";
import logo from "@/assets/logo.png";

const productLinks = ["Industrial Generators", "Commercial Generators", "Silent Generators", "Portable Generators"];
const serviceLinks = ["Installation", "AMC", "Spare Parts", "Repairs"];
const companyLinks = ["About Us", "Careers", "Blog", "Privacy Policy"];

const Footer = () => {
  const [email, setEmail] = useState("");

  return (
    <footer className="relative z-10 border-t border-border/50 bg-card/50">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <img src={logo} alt="SLV Diesel Power System" className="h-12 w-auto" />
            </div>
            <p className="text-muted-foreground text-sm mb-6 max-w-sm">
              Your trusted partner for high-performance diesel generators. Powering industries
              with reliable solutions since 2009.
            </p>
            {/* Newsletter */}
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-secondary border border-border/50 rounded-lg px-4 py-2.5 text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <button
                onClick={() => { setEmail(""); alert("Subscribed!"); }}
                className="bg-primary text-primary-foreground px-5 py-2.5 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity"
              >
                Subscribe
              </button>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4 text-sm">Products</h4>
            <ul className="space-y-2">
              {productLinks.map((l) => (
                <li key={l}>
                  <a href="#products" className="text-muted-foreground text-sm hover:text-primary transition-colors">{l}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-4 text-sm">Services</h4>
            <ul className="space-y-2">
              {serviceLinks.map((l) => (
                <li key={l}>
                  <a href="#products" className="text-muted-foreground text-sm hover:text-primary transition-colors">{l}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-4 text-sm">Company</h4>
            <ul className="space-y-2">
              {companyLinks.map((l) => (
                <li key={l}>
                  <a href="#about" className="text-muted-foreground text-sm hover:text-primary transition-colors">{l}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} SLV Diesel Power System. All rights reserved.
          </p>
          <div className="flex gap-4">
            {["Facebook", "Instagram", "LinkedIn", "YouTube"].map((s) => (
              <a key={s} href="#" className="text-muted-foreground text-sm hover:text-primary transition-colors">{s}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
