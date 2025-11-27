import React from "react";
import { ACHIEVEMENTS, EDUCATION } from "../lib/constants";
import {
  Lightbulb,
  Target,
  Zap,
  Users,
  GraduationCap,
  MapPin,
  Calendar,
} from "lucide-react";
import { RevealOnScroll } from "./RevealOnScroll";

const Achievements: React.FC = () => {
  return (
    <section
      id="achievements"
      className="py-16 md:py-20 relative z-10 border-t border-zinc-900"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-12">
          <div className="h-px w-8 bg-emerald-500"></div>
          <span className="text-emerald-500 font-mono text-sm uppercase tracking-wider">
            Professional Profile
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Left Column: Education (Takes 3/5 width on large screens) */}
          <div className="lg:col-span-3 flex flex-col">
            <RevealOnScroll className="h-full" variant="blur-in">
              <div className="relative h-full bg-zinc-900/20 border border-zinc-800 rounded-2xl p-8 overflow-hidden group hover:border-zinc-700 transition-all duration-500">
                {/* Background Gradient Mesh */}
                <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-emerald-500/5 blur-[100px] rounded-full pointer-events-none"></div>

                <div className="relative z-10 flex flex-col h-full">
                  <div className="mb-6">
                    <GraduationCap className="h-12 w-12 text-emerald-500/70" />
                  </div>

                  <h3 className="text-3xl font-bold text-white mb-2">
                    {EDUCATION.degree}
                  </h3>

                  <p className="text-xl text-emerald-500 font-semibold mb-6">
                    {EDUCATION.school}
                  </p>

                  <div className="space-y-3 mt-auto">
                    <div className="flex items-center gap-3 text-zinc-400">
                      <MapPin className="h-4 w-4 text-zinc-500" />
                      <span className="text-sm">{EDUCATION.location}</span>
                    </div>
                    <div className="flex items-center gap-3 text-zinc-400">
                      <Calendar className="h-4 w-4 text-zinc-500" />
                      <span className="text-sm font-mono">
                        {EDUCATION.period}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>

          {/* Right Column: Soft Skills Grid (Takes 2/5 width on large screens) */}
          <div className="lg:col-span-2 grid grid-cols-1 gap-4">
            <h3 className="text-sm font-mono text-zinc-500 mb-2 uppercase tracking-wider">
              Soft Skills
            </h3>
            {ACHIEVEMENTS.map((achievement, index) => (
              <RevealOnScroll
                key={index}
                delay={index * 100}
                variant="slide-right"
              >
                <div className="group bg-zinc-950 border border-zinc-800 p-5 rounded-xl hover:bg-zinc-900/50 transition-colors flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 group-hover:text-emerald-400 group-hover:border-emerald-500/30 transition-all shrink-0">
                    {index === 0 ? (
                      <Lightbulb className="h-5 w-5" />
                    ) : index === 1 ? (
                      <Target className="h-5 w-5" />
                    ) : index === 2 ? (
                      <Zap className="h-5 w-5" />
                    ) : (
                      <Users className="h-5 w-5" />
                    )}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-zinc-200 group-hover:text-white">
                      {achievement.title}
                    </div>
                    <div className="text-xs text-zinc-500 mt-1 leading-snug">
                      {achievement.description}
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
