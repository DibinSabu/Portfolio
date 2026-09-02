import ScrollReveal from "./ScrollReveal";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Multi-Service Microservices Deployment",
    desc: "Architected and deployed a containerized microservices application across AWS and GCP with automated scaling and service mesh.",
    stack: ["Docker", "Kubernetes", "AWS ECS", "GCP GKE", "Terraform"],
    color: "from-primary/20 to-primary/5",
  },
  {
    title: "CI/CD Pipeline for Full-Stack App",
    desc: "Built an end-to-end CI/CD pipeline with automated testing, staging environments, and zero-downtime deployments.",
    stack: ["Jenkins", "GitHub Actions", "Docker", "ArgoCD", "SonarQube"],
    color: "from-blue-500/20 to-blue-500/5",
  },
  {
    title: "Cloud Infrastructure Automation & Monitoring",
    desc: "Provisioned entire cloud infrastructure with IaC and implemented comprehensive monitoring with alerting dashboards.",
    stack: ["Terraform", "Ansible", "Prometheus", "Grafana", "CloudWatch"],
    color: "from-emerald-500/20 to-emerald-500/5",
  },
];

const ProjectsSection = () => (
  <section id="projects" className="py-24">
    <div className="container mx-auto px-6">
      <ScrollReveal>
        <p className="text-primary font-mono text-sm tracking-widest uppercase mb-2">Projects</p>
        <h2 className="section-heading">Featured <span className="text-gradient">Work</span></h2>
        <p className="section-subheading mb-12">Selected projects showcasing cloud architecture, automation, and DevOps practices.</p>
      </ScrollReveal>

      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <ScrollReveal key={p.title} delay={i * 0.12}>
            <motion.div
              whileHover={{ y: -6 }}
              className="glass-card-hover group relative overflow-hidden h-full flex flex-col"
            >
              {/* Gradient top bar */}
              <div className={`h-1.5 w-full bg-gradient-to-r ${p.color}`} />

              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-foreground font-semibold text-lg mb-3">{p.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5 flex-1">{p.desc}</p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {p.stack.map((t) => (
                    <span key={t} className="text-xs font-mono px-2 py-1 rounded-md bg-secondary text-secondary-foreground">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3 pt-2 border-t border-border/40">
                  <button className="icon-hover text-muted-foreground"><Github size={18} /></button>
                  <button className="icon-hover text-muted-foreground"><ExternalLink size={18} /></button>
                </div>
              </div>
            </motion.div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
