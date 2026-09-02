import ScrollReveal from "./ScrollReveal";
import { motion } from "framer-motion";

const categories = [
  {
    title: "Cloud Platforms",
    skills: ["AWS", "GCP"],
  },
  {
    title: "DevOps & CI/CD",
    skills: ["Docker", "Kubernetes", "Jenkins", "GitHub Actions"],
  },
  {
    title: "IaC & Automation",
    skills: ["Terraform", "Ansible", "Bash", "Python"],
  },
  {
    title: "Monitoring",
    skills: ["CloudWatch", "Prometheus", "Grafana"],
  },
];

const SkillsSection = () => (
  <section id="skills" className="py-24">
    <div className="container mx-auto px-6">
      <ScrollReveal>
        <p className="text-primary font-mono text-sm tracking-widest uppercase mb-2">Skills</p>
        <h2 className="section-heading">Tools & <span className="text-gradient">Technologies</span></h2>
        <p className="section-subheading mb-12">The technologies I work with daily to build and maintain cloud infrastructure.</p>
      </ScrollReveal>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((cat, ci) => (
          <ScrollReveal key={cat.title} delay={ci * 0.1}>
            <div className="glass-card-hover p-6 h-full">
              <h3 className="text-foreground font-semibold mb-4">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.08, y: -2 }}
                    className="badge-glow cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
