import { useInView } from "@/hooks/useInView";
import { ShieldCheck, Clock, Headphones, Truck, Settings, BadgeCheck } from "lucide-react";
import { useEffect, useState } from "react";

const reasons = [
  { icon: ShieldCheck, title: "Authorized Dealer", desc: "Official Mahindra Powerol partner" },
  { icon: Truck, title: "Quick Delivery", desc: "Fast and reliable delivery" },
  { icon: Headphones, title: "24/7 Support", desc: "Round-the-clock technical support" },
  { icon: Clock, title: "15+ Years Experience", desc: "Decades of industry expertise" },
  { icon: Settings, title: "Timely Maintenance", desc: "Scheduled preventive care" },
  { icon: BadgeCheck, title: "Expert Team", desc: "Skilled technicians with decades of experience" },
];

const counters = [
  { value: 500, suffix: "+", label: "Installations" },
  { value: 98, suffix: "%", label: "Satisfaction" },
  { value: 24, suffix: "/7", label: "Support" },
  { value: 50, suffix: "+", label: "Technicians" },
];

function AnimatedCounter({ target, suffix, active }: { target: number; suffix: string; active: boolean }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = 0;
    const duration = 2000;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [active, target]);
  return <span>{count}{suffix}</span>;
}

const WhyUsSection = () => {
  const { ref, isInView } = useInView();

  return (
    <section id="why-us" className="py-24 relative z-10">
      <div ref={ref} className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
            Your Trusted Power Partner
          </h2>
        </div>

        <div className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20 ${isInView ? "animate-fade-up" : "opacity-0"}`}>
          {reasons.map((r, i) => (
            <div
              key={i}
              className="bg-card border border-border/50 rounded-xl p-6 hover:border-primary/50 transition-colors group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                <r.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">{r.title}</h3>
              <p className="text-muted-foreground text-sm">{r.desc}</p>
            </div>
          ))}
        </div>

        {/* Counter stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {counters.map((c, i) => (
            <div key={i} className="bg-card border border-border/50 rounded-xl p-8 text-center">
              <p className="text-4xl md:text-5xl font-bold text-primary mb-2">
                <AnimatedCounter target={c.value} suffix={c.suffix} active={isInView} />
              </p>
              <p className="text-muted-foreground font-medium">{c.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
