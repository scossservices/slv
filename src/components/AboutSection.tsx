import { useInView } from "@/hooks/useInView";
import { ShieldCheck, Users, Heart, Trophy, CheckCircle } from "lucide-react";

const features = [
  { icon: ShieldCheck, title: "Authorized Dealer", desc: "Official Mahindra Powerol authorized dealer" },
  { icon: Users, title: "Expert Team", desc: "Skilled technicians with decades of experience" },
  { icon: Heart, title: "Customer Focus", desc: "Dedicated to customer satisfaction and support" },
  { icon: Trophy, title: "Proven Track Record", desc: "500+ successful installations across industries" },
];

const certs = [
  "ISO 9001:2015 Certified",
  "Mahindra Powerol Authorized",
  "CPCB Compliant",
  "BIS Standards",
];

const AboutSection = () => {
  const { ref, isInView } = useInView();

  return (
    <section id="about" className="py-24 relative z-10">
      <div ref={ref} className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <div className={`relative ${isInView ? "animate-slide-in-left" : "opacity-0"}`}>
            <div className="rounded-2xl overflow-hidden border border-border/50 aspect-[4/3] bg-secondary flex items-center justify-center">
              <img
                src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&q=80"
                alt="Industrial diesel generator"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground rounded-xl px-6 py-4 shadow-lg">
              <p className="text-3xl font-bold">15+</p>
              <p className="text-sm">Years Experience</p>
            </div>
          </div>

          {/* Content side */}
          <div className={isInView ? "animate-slide-in-right" : "opacity-0"}>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">About Us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
              Trusted Name in Diesel Power Solutions
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              SLV Diesel Power System has been a leading provider of diesel generators and power
              solutions for over 15 years. As an authorized Mahindra Powerol dealer, we deliver
              world-class generators backed by comprehensive support and service.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {features.map((f) => (
                <div key={f.title} className="bg-card border border-border/50 rounded-xl p-4 flex gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
                    <f.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-sm">{f.title}</h3>
                    <p className="text-muted-foreground text-xs mt-0.5">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              {certs.map((c) => (
                <span key={c} className="inline-flex items-center gap-1.5 bg-secondary text-muted-foreground text-xs px-3 py-1.5 rounded-full border border-border/50">
                  <CheckCircle className="w-3.5 h-3.5 text-primary" />
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
