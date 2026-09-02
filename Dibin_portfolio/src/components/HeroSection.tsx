import { motion } from "framer-motion";
import { ArrowDown, Send, Download } from "lucide-react";
import profileImg from "@/assets/profile.png";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center overflow-hidden">
    {/* Background grid */}
    <div className="absolute inset-0 bg-[linear-gradient(hsl(222_30%_18%_/_0.3)_1px,transparent_1px),linear-gradient(90deg,hsl(222_30%_18%_/_0.3)_1px,transparent_1px)] bg-[size:60px_60px]" />
    {/* Radial glow behind photo */}
    <div className="absolute top-1/2 left-[20%] -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/8 blur-[140px]" />

    <div className="relative z-10 container mx-auto px-6">
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        {/* Profile Image — Left */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex-shrink-0"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[380px] lg:h-[380px] rounded-2xl overflow-hidden border border-primary/20 shadow-[0_0_60px_-15px_hsl(199_89%_48%_/_0.25)]">
            <img
              src={profileImg}
              alt="Dibin Sabu"
              className="w-full h-full object-cover object-top"
            />
            {/* Subtle gradient overlay at bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
          </div>
        </motion.div>

        {/* Text Content — Right */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="text-center lg:text-left"
        >
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-4">
            Cloud & DevOps Engineer
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-[1.05] mb-6">
            Dibin <span className="text-gradient">Sabu</span>
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-xl mb-10">
            Building scalable, automated, and resilient cloud systems.
          </p>

          <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4">
            <a
              href="#projects"
              className="glow-button relative z-10 inline-flex items-center gap-2 px-7 py-3 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:brightness-110 transition-all"
            >
              View Projects <ArrowDown size={16} />
            </a>
            <a
              href="#contact"
              className="glow-button relative z-10 inline-flex items-center gap-2 px-7 py-3 rounded-lg border border-border text-foreground font-semibold text-sm hover:border-primary/50 transition-all"
            >
              Contact Me <Send size={16} />
            </a>
            <a
              href="/resume.pdf"
              download
              className="glow-button relative z-10 inline-flex items-center gap-2 px-7 py-3 rounded-lg border border-border text-foreground font-semibold text-sm hover:border-primary/50 transition-all"
            >
              Resume <Download size={16} />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;
