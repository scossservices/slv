import { useInView } from "@/hooks/useInView";
import { Wrench, FileCheck, Headphones, Package, ArrowRight } from "lucide-react";
import industrialImg from "@/assets/industrial-generator.jpg";
import commercialImg from "@/assets/commercial-generator.jpg";
import silentImg from "@/assets/silent-generator.jpg";

const products = [
  {
    title: "Industrial Generators",
    range: "125 kVA - 3000 kVA",
    desc: "Heavy-duty Mahindra Powerol generators engineered for continuous industrial operations and maximum reliability.",
    tags: ["Continuous Duty", "Low Fuel Consumption", "Heavy Duty Engine"],
    img: industrialImg,
  },
  {
    title: "Commercial Generators",
    range: "15 kVA - 125 kVA",
    desc: "Reliable power backup solutions for commercial establishments, offices, and retail spaces.",
    tags: ["Compact Design", "Low Noise", "Auto Start"],
    img: commercialImg,
  },
  {
    title: "Silent Generators",
    range: "25 kVA - 500 kVA",
    desc: "Acoustic enclosure generators ideal for hospitals, hotels, and noise-sensitive environments.",
    tags: ["Sound Proof", "Weather Resistant", "Easy Access"],
    img: silentImg,
  },
];

const services = [
  { icon: Wrench, title: "Installation", desc: "Professional setup & commissioning" },
  { icon: FileCheck, title: "AMC", desc: "Annual maintenance contracts" },
  { icon: Headphones, title: "24/7 Support", desc: "Round-the-clock assistance" },
  { icon: Package, title: "Spare Parts", desc: "Genuine parts availability" },
];

const ProductsSection = () => {
  const { ref, isInView } = useInView();

  return (
    <section id="products" className="py-24 relative z-10">
      <div ref={ref} className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Products</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
            Power Solutions for Every Need
          </h2>
        </div>

        <div className={`grid md:grid-cols-3 gap-8 mb-20 ${isInView ? "animate-fade-up" : "opacity-0"}`}>
          {products.map((p, i) => (
            <div
              key={i}
              className="bg-card border border-border/50 rounded-2xl overflow-hidden group hover:border-primary/50 transition-all duration-300"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              {/* Image with orange range badge */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute bottom-4 left-4 bg-primary text-primary-foreground text-sm font-semibold px-4 py-1.5 rounded-full">
                  {p.range}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">{p.title}</h3>
                <p className="text-muted-foreground text-sm mb-5 leading-relaxed">{p.desc}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {p.tags.map((t) => (
                    <span key={t} className="border border-border text-muted-foreground text-xs px-3 py-1.5 rounded-full">
                      {t}
                    </span>
                  ))}
                </div>
                <a
                  href="#contact"
                  className="flex items-center justify-center gap-2 w-full bg-card border border-border text-foreground py-3 rounded-lg font-semibold text-sm hover:border-primary/50 transition-colors"
                >
                  Get Quote <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Services */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <div
              key={i}
              className="bg-card border border-border/50 rounded-xl p-6 text-center hover:border-primary/50 transition-colors"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <s.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">{s.title}</h3>
              <p className="text-muted-foreground text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
