import React from "react";
import { WORK_EXPERIENCE } from "../lib/constants";
import { Briefcase, MapPin, Calendar } from "lucide-react";
import { RevealOnScroll } from "./RevealOnScroll";
import { CardSpotlight } from "./CardSpotlight";

const WorkExperience: React.FC = () => {
  return (
    <section id="experience" className="py-16 md:py-24 relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-emerald-500"></div>
            <span className="text-emerald-500 font-mono text-sm uppercase tracking-wider">
              Career Journey
            </span>
          </div>
          <h2 className="text-4xl font-bold text-white mb-2 tracking-tight">
            Work Experience
          </h2>
          <p className="text-zinc-400 max-w-xl mt-4 leading-relaxed">
            8+ years of delivering impactful digital solutions across AI,
            healthcare, and retail industries.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="flex flex-col gap-8">
          {WORK_EXPERIENCE.map((experience, index) => (
            <RevealOnScroll key={index} delay={index * 50} variant="fade-up">
              <ExperienceCard experience={experience} />
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

interface ExperienceCardProps {
  experience: (typeof WORK_EXPERIENCE)[0];
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
  return (
    <CardSpotlight
      className="rounded-2xl border border-zinc-800 bg-zinc-950/40 p-0"
      color="rgba(16, 185, 129, 0.15)"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 md:p-8">
        {/* LEFT SIDE: Company Info (4 cols) */}
        <div className="lg:col-span-4 flex flex-col h-full">
          <div>
            {/* Company & Title */}
            <div className="mb-4">
              <h3 className="text-2xl font-bold text-white mb-2 leading-tight">
                {experience.title}
              </h3>
              <div className="flex items-center gap-2 text-emerald-500 mb-2">
                <Briefcase className="h-4 w-4" />
                <span className="font-semibold">{experience.company}</span>
              </div>
            </div>

            {/* Location & Period */}
            <div className="space-y-2 mb-6">
              <div className="flex items-center gap-2 text-zinc-400 text-sm">
                <MapPin className="h-3.5 w-3.5" />
                <span>{experience.location}</span>
              </div>
              <div className="flex items-center gap-2 text-zinc-400 text-sm">
                <Calendar className="h-3.5 w-3.5" />
                <span className="font-mono">{experience.period}</span>
              </div>
            </div>
          </div>

          {/* Tech Stack (if available) */}
          {experience.tech && experience.tech.length > 0 && (
            <div className="mt-auto pt-6 border-t border-zinc-800/50">
              <p className="font-mono text-[10px] text-zinc-500 uppercase tracking-wider mb-3">
                Technologies Used
              </p>
              <div className="flex flex-wrap gap-1.5">
                {experience.tech.map((t) => (
                  <span
                    key={t}
                    className="
                      cursor-default
                      px-2.5 py-1 
                      text-[11px] font-mono 
                      rounded-md
                      bg-zinc-900
                      border border-zinc-800
                      text-zinc-400
                      transition-all duration-200
                      hover:bg-zinc-800
                      hover:text-white
                      hover:border-zinc-600
                    "
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* RIGHT SIDE: Responsibilities (8 cols) */}
        <div className="lg:col-span-8">
          <div className="h-full bg-zinc-900/30 rounded-xl border border-zinc-800/50 p-6 relative overflow-hidden hover:border-zinc-700/50 transition-colors">
            {/* Decorative Corner Element */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 blur-3xl pointer-events-none"></div>

            <div className="relative z-10">
              <p className="font-mono text-[10px] text-zinc-500 uppercase tracking-wider mb-4">
                Key Contributions
              </p>
              <ul className="space-y-3">
                {experience.responsibilities.map((responsibility, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-zinc-300 leading-relaxed"
                  >
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-emerald-500/70 shrink-0" />
                    <span className="text-sm">{responsibility}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </CardSpotlight>
  );
};

export default WorkExperience;
