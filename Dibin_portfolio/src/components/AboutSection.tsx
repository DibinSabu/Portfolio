import ScrollReveal from "./ScrollReveal";
import { Cloud, Cog, ShieldCheck } from "lucide-react";

const highlights = [
  { icon: Cloud, label: "Cloud Architecture", desc: "Designing and deploying multi-cloud solutions on AWS & GCP." },
  { icon: Cog, label: "Automation First", desc: "IaC with Terraform, CI/CD pipelines, and scripting with Bash & Python." },
  { icon: ShieldCheck, label: "Reliability", desc: "Monitoring, alerting, and building fault-tolerant distributed systems." },
];

const AboutSection = () => (
  <section id="about" className="py-24">
    <div className="container mx-auto px-6">
      <ScrollReveal>
        <p className="text-primary font-mono text-sm tracking-widest uppercase mb-2">About Me</p>
        <h2 className="section-heading">Engineer by craft,<br /><span className="text-gradient">problem solver</span> by nature.</h2>
        <p className="section-subheading mb-12">
          I'm a Cloud & DevOps Engineer passionate about building robust infrastructure, automating workflows, and enabling teams to ship faster with confidence.
        </p>
      </ScrollReveal>

      <div className="grid md:grid-cols-3 gap-6">
        {highlights.map((h, i) => (
          <ScrollReveal key={h.label} delay={i * 0.1}>
            <div className="glass-card-hover p-6 h-full">
              <h.icon className="text-primary mb-4 icon-hover" size={28} />
              <h3 className="text-foreground font-semibold text-lg mb-2">{h.label}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{h.desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
