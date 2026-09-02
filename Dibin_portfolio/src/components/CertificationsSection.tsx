import ScrollReveal from "./ScrollReveal";
import { Award, Heart } from "lucide-react";
import { motion } from "framer-motion";

const certs = [
  { name: "Oracle Cloud Infrastructure 2025 Certified Foundations Associate", href: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=4763489D9C960709208A33E3FAB89FF70E2C90BA169E8B8F5FAA0AAF210F907E" },
  { name: "Oracle Cloud Infrastructure 2025 Certified Architect Associate", href: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=98CF04AFA42091A5146FDC6AA75F9B45CEFD7037EC3428F50E12552F71FEEF88" },
  { name: "AWS Solutions Architect", href: undefined },
  { name: "Google Cloud Associate", href: undefined },
  { name: "Kubernetes Administrator (CKA)", href: undefined },
  { name: "Terraform Associate", href: undefined },
];

const volunteering = [
  "Open-source contributor — DevOps tooling",
  "Cloud community mentor & workshop speaker",
];

const CertificationsSection = () => (
  <section className="py-24">
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-12">
        {/* Certifications */}
        <ScrollReveal>
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-2">Credentials</p>
          <h2 className="section-heading text-2xl">Certifications</h2>
          <div className="flex flex-col gap-3 mt-6">
            {certs.map((c) => (
              <motion.div key={c.name} whileHover={{ x: 4 }} className="badge-glow flex items-center gap-3 rounded-lg">
                <Award size={16} className="text-primary shrink-0" />
                {c.href ? (
                  <a href={c.href} target="_blank" rel="noopener noreferrer" className="text-sm text-foreground hover:text-primary transition-colors">
                    {c.name}
                  </a>
                ) : (
                  <span className="text-sm text-foreground">{c.name}</span>
                )}
              </motion.div>
            ))}
          </div>
        </ScrollReveal>

        {/* Volunteering */}
        <ScrollReveal delay={0.15}>
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-2">Community</p>
          <h2 className="section-heading text-2xl">Volunteering</h2>
          <div className="flex flex-col gap-3 mt-6">
            {volunteering.map((v) => (
              <motion.div key={v} whileHover={{ x: 4 }} className="badge-glow flex items-center gap-3 rounded-lg">
                <Heart size={16} className="text-primary shrink-0" />
                <span className="text-sm text-foreground">{v}</span>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </div>
  </section>
);

export default CertificationsSection;
