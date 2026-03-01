import { useInView } from "@/hooks/useInView";
import { MapPin, Phone, Mail, Clock, Send, Loader2 } from "lucide-react";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const WHATSAPP_NUMBER = "918296331201";
const WHATSAPP_NUMBER_2 = "918495842429";
const BUSINESS_EMAIL = "slvdieselpowersystem2018@gmail.com";
const PHONE_1 = "+918296331201";
const PHONE_2 = "+918495842429";
const MAPS_URL = "https://www.google.com/maps/search/Bangalore+Karnataka+India";

const contactInfo = [
  {
    icon: MapPin,
    title: "Location",
    detail: "Bangalore, Karnataka, India",
    href: MAPS_URL,
    label: "Open in Maps",
  },
  {
    icon: Phone,
    title: "Phone",
    detail: "+91 8296331201 / +91 8495842429",
    href: `tel:${PHONE_1}`,
    label: "Call Us",
  },
  {
    icon: Mail,
    title: "Email",
    detail: BUSINESS_EMAIL,
    href: `mailto:${BUSINESS_EMAIL}`,
    label: "Send Email",
  },
  {
    icon: Clock,
    title: "Working Hours",
    detail: "Mon - Sat: 9AM - 7PM",
    href: null,
    label: null,
  },
];

const ContactSection = () => {
  const { ref, isInView } = useInView();
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke("send-contact-email", {
        body: form,
      });

      if (error) throw error;

      toast.success("Message sent! We'll get back to you soon. 🎉");
      setForm({ name: "", email: "", phone: "", subject: "", message: "" });
    } catch (err) {
      console.error(err);
      toast.error("Failed to send message. Please call us directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative z-10">
      <div ref={ref} className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Contact Us</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">Get in Touch</h2>
          <p className="text-muted-foreground mt-3 text-sm">Click on any card to connect with us instantly</p>
        </div>

        <div className={`grid lg:grid-cols-2 gap-12 ${isInView ? "animate-fade-up" : "opacity-0"}`}>
          {/* Info + Map */}
          <div>
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {contactInfo.map((c, i) => {
                const inner = (
                  <div
                    key={i}
                    className={`bg-card border border-border/50 rounded-xl p-5 flex gap-3 ${
                      c.href ? "hover:border-primary/50 hover:bg-primary/5 transition-all cursor-pointer group" : ""
                    }`}
                  >
                    <div className={`w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center shrink-0 ${c.href ? "group-hover:bg-primary/30 transition-colors" : ""}`}>
                      <c.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground text-sm">{c.title}</h3>
                      <p className="text-muted-foreground text-xs mt-0.5">{c.detail}</p>
                      {c.label && (
                        <span className="text-primary text-xs font-medium mt-1 block group-hover:underline">
                          {c.label} →
                        </span>
                      )}
                    </div>
                  </div>
                );

                return c.href ? (
                  <a key={i} href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
                    {inner}
                  </a>
                ) : (
                  <div key={i}>{inner}</div>
                );
              })}
            </div>

            {/* Second phone quick-dial */}
            <a
              href={`tel:${PHONE_2}`}
              className="flex items-center gap-3 bg-card border border-border/50 rounded-xl p-4 mb-6 hover:border-primary/50 hover:bg-primary/5 transition-all group"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center shrink-0 group-hover:bg-primary/30 transition-colors">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground text-sm">Alternate Phone</h3>
                <p className="text-muted-foreground text-xs mt-0.5">+91 8495842429</p>
                <span className="text-primary text-xs font-medium mt-1 block group-hover:underline">Call Us →</span>
              </div>
            </a>

            <div className="rounded-xl overflow-hidden border border-border/50 aspect-video">
              <iframe
                title="SLV Diesel Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.886539092!2d77.46612584898802!3d12.953847716750498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="bg-card border border-border/50 rounded-2xl p-8 space-y-5">
            <h3 className="text-foreground font-semibold text-lg">Send us a Message</h3>

            <div className="grid sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name *"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-secondary border border-border/50 rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <input
                type="email"
                placeholder="Email Address *"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-secondary border border-border/50 rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                type="tel"
                placeholder="Phone Number"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full bg-secondary border border-border/50 rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <input
                type="text"
                placeholder="Subject"
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                className="w-full bg-secondary border border-border/50 rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>
            <textarea
              placeholder="Your Message *"
              rows={5}
              required
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full bg-secondary border border-border/50 rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-primary text-primary-foreground py-3.5 rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity flex items-center justify-center gap-2 disabled:opacity-60"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Send Message
                </>
              )}
            </button>

            {/* WhatsApp Buttons */}
            <div className="grid sm:grid-cols-2 gap-3">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hello!%20I'm%20interested%20in%20your%20diesel%20generators.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 rounded-lg font-semibold text-sm text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: "#25D366" }}
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp 1
              </a>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER_2}?text=Hello!%20I'm%20interested%20in%20your%20diesel%20generators.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 rounded-lg font-semibold text-sm text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: "#128C7E" }}
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp 2
              </a>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
