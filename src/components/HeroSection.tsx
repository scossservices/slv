import { Shield, Clock, Award, Cog } from "lucide-react";
import { useEffect, useState, useCallback } from "react";
import heroBg1 from "@/assets/hero-bg-1.jpeg";
import heroBg2 from "@/assets/hero-bg-2.jpeg";
import heroBg3 from "@/assets/hero-bg-3.jpeg";
import heroBg4 from "@/assets/hero-bg-4.jpeg";

const heroImages = [heroBg1, heroBg2, heroBg3, heroBg4];

const stats = [
  { icon: Shield, label: "Certified", delay: "0s" },
  { icon: Clock, label: "24/7 Support", delay: "0.5s" },
  { icon: Award, label: "15+ Years", delay: "1s" },
  { icon: Cog, label: "Expert Team", delay: "1.5s" },
];

const HeroSection = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [currentImg, setCurrentImg] = useState(0);

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImg((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Slideshow background */}
      {heroImages.map((img, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
          style={{
            opacity: currentImg === i ? 1 : 0,
            backgroundImage: `url(${img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      ))}

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-background/75" />

      {/* Radial gradient bg */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(25_95%_53%/0.15)_0%,_transparent_70%)]" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(hsl(25 95% 53% / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(25 95% 53% / 0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          transform: `translate(${mousePos.x * 0.5}px, ${mousePos.y * 0.5}px)`,
        }}
      />

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="animate-slide-up">
          <span className="inline-block bg-primary/20 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-6 border border-primary/30">
            Authorized Mahindra Powerol Dealer
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
            Powering Industries with
            <br />
            <span className="text-primary">Reliable Diesel Generators</span>
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-8">
            Your trusted partner for high-performance diesel generators. From industrial
            powerhouses to commercial solutions, we deliver unmatched reliability.
          </p>
          <div className="flex flex-col items-center gap-6">
            {/* Small badge cards */}
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-2 bg-card/80 backdrop-blur-sm border border-border/50 rounded-full px-4 py-2">
                <Clock className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-foreground">24/7 Support</span>
              </div>
              <div className="flex items-center gap-2 bg-card/80 backdrop-blur-sm border border-border/50 rounded-full px-4 py-2">
                <Shield className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-foreground">Certified</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="bg-primary text-primary-foreground px-8 py-3.5 rounded-lg font-semibold text-lg hover:opacity-90 transition-opacity animate-pulse-glow"
              >
                Get a Quote
              </a>
              <a
                href="tel:+919876543202"
                className="border border-border text-foreground px-8 py-3.5 rounded-lg font-semibold text-lg hover:bg-secondary transition-colors"
              >
                📞 Call Now
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
