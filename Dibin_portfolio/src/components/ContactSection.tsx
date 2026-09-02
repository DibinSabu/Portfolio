import { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import { Mail, Linkedin, Github, Send } from "lucide-react";
import { motion } from "framer-motion";

const socials = [
  { icon: Mail, label: "Email", value: "dibinsabu111@gmail.com", href: "mailto:dibinsabu111@gmail.com" },
  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/dibin-sabu", href: "https://www.linkedin.com/in/dibin-sabu-155398340/" },
  { icon: Github, label: "GitHub", value: "github.com/DibinSabu", href: "https://github.com/DibinSabu" },
];

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // placeholder
  };

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-2">Get in Touch</p>
          <h2 className="section-heading">Let's <span className="text-gradient">Connect</span></h2>
          <p className="section-subheading mb-12">Have a project in mind or want to chat about cloud engineering? Reach out!</p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Socials */}
          <ScrollReveal>
            <div className="flex flex-col gap-4">
              {socials.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 4 }}
                  className="glass-card-hover p-4 flex items-center gap-4"
                >
                  <s.icon className="text-primary icon-hover" size={20} />
                  <div>
                    <p className="text-xs text-muted-foreground">{s.label}</p>
                    <p className="text-sm text-foreground">{s.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </ScrollReveal>

          {/* Form */}
          <ScrollReveal delay={0.1}>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="glass-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
              />
              <input
                type="email"
                placeholder="Email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="glass-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
              />
              <textarea
                placeholder="Message"
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="glass-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors resize-none"
              />
              <button
                type="submit"
                className="glow-button relative z-10 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:brightness-110 transition-all"
              >
                Send Message <Send size={16} />
              </button>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
