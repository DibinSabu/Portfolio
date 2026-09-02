import ScrollReveal from "./ScrollReveal";

const timeline = [
  {
    type: "work" as const,
    title: "Cloud & DevOps Engineer",
    org: "Tech Company",
    period: "2022 – Present",
    desc: "Designed multi-cloud architecture, automated CI/CD pipelines, and managed Kubernetes clusters serving production workloads.",
  },
  {
    type: "edu" as const,
    title: "Bachelor's in Computer Science",
    org: "University",
    period: "2018 – 2022",
    desc: "Graduated with focus on distributed systems, networking, and cloud computing.",
  },
];

const ExperienceSection = () => (
  <section id="experience" className="py-24">
    <div className="container mx-auto px-6">
      <ScrollReveal>
        <p className="text-primary font-mono text-sm tracking-widest uppercase mb-2">Journey</p>
        <h2 className="section-heading">Experience & <span className="text-gradient">Education</span></h2>
      </ScrollReveal>

      <div className="relative mt-12 max-w-2xl mx-auto">
        {/* Vertical line */}
        <div className="absolute left-[5px] top-2 bottom-2 w-px bg-border" />

        <div className="flex flex-col gap-10">
          {timeline.map((item, i) => (
            <ScrollReveal key={i} delay={i * 0.15}>
              <div className="relative pl-10">
                <div className="absolute left-0 top-1.5 timeline-dot" />
                <span className="text-xs font-mono text-primary">{item.period}</span>
                <h3 className="text-foreground font-semibold text-lg mt-1">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.org}</p>
                <p className="text-muted-foreground text-sm mt-2 leading-relaxed">{item.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ExperienceSection;
