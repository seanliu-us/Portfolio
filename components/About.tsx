import React from "react";
import { ABOUT, PERSONAL_INFO } from "../lib/constants";
import { Cpu, Briefcase, Award } from "lucide-react";
import { TextAnimate } from "./TextAnimate";

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="py-16 md:py-20 relative z-10 border-b border-zinc-900"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-16">
          <div className="h-px w-8 bg-emerald-500"></div>
          <span className="text-emerald-500 font-mono text-sm uppercase tracking-wider">
            Engineering Profile
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          {/* Left: Professional Stats Card */}
          <div className="md:col-span-5 space-y-4">
            {/* Main Info Card */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-b from-zinc-800 to-zinc-950 rounded-2xl opacity-50 group-hover:opacity-70 transition duration-500"></div>
              <div className="absolute -inset-[1px] bg-gradient-to-b from-emerald-500/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 blur-sm"></div>

              <div className="relative bg-zinc-950 rounded-xl border border-zinc-800 p-6">
                <div className="space-y-6">
                  {/* Name & Title */}
                  <div className="border-b border-zinc-800 pb-4">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {PERSONAL_INFO.name}
                    </h3>
                    <p className="text-emerald-500 font-mono text-sm">
                      {PERSONAL_INFO.mainRole}
                    </p>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-zinc-900/50 border border-zinc-800 rounded-lg hover:border-zinc-700 transition-colors">
                      <Briefcase className="h-5 w-5 text-emerald-500 mb-2" />
                      <div className="text-2xl font-bold text-white">8+</div>
                      <div className="text-xs text-zinc-400 font-mono">
                        Years Experience
                      </div>
                    </div>
                    <div className="p-4 bg-zinc-900/50 border border-zinc-800 rounded-lg hover:border-zinc-700 transition-colors">
                      <Award className="h-5 w-5 text-emerald-500 mb-2" />
                      <div className="text-2xl font-bold text-white">4</div>
                      <div className="text-xs text-zinc-400 font-mono">
                        Companies
                      </div>
                    </div>
                  </div>

                  {/* Contact Info */}
                  <div className="space-y-3 pt-4 border-t border-zinc-800">
                    <div>
                      <div className="text-xs font-mono text-zinc-500 uppercase mb-1">
                        Email
                      </div>
                      <a
                        href={`mailto:${PERSONAL_INFO.email}`}
                        className="text-sm text-zinc-300 hover:text-emerald-500 transition-colors"
                      >
                        {PERSONAL_INFO.email}
                      </a>
                    </div>
                    <div>
                      <div className="text-xs font-mono text-zinc-500 uppercase mb-1">
                        Location
                      </div>
                      <div className="text-sm text-zinc-300">
                        {PERSONAL_INFO.location}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Bio Content */}
          <div className="md:col-span-7 space-y-8">
            {/* Animated Heading */}
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              <TextAnimate text="Crafting Intelligent Solutions" />
            </h2>

            {/* Animated Bio Paragraphs */}
            <div className="space-y-6 leading-relaxed">
              {ABOUT.bioParagraphs.map((paragraph, idx) => (
                <TextAnimate
                  key={idx}
                  text={paragraph}
                  className="block border-l-2 border-zinc-900 pl-4 text-zinc-400"
                  delay={0.2 + idx * 0.1}
                />
              ))}
            </div>

            {/* Current Focus */}
            <div className="pt-6 mt-6 border-t border-zinc-900">
              <div className="flex items-center gap-2 mb-3 text-emerald-500">
                <Cpu className="h-4 w-4" />
                <span className="text-xs font-mono font-bold uppercase">
                  Current Focus
                </span>
              </div>
              <ul className="space-y-1.5">
                {PERSONAL_INFO.aboutJson.current_focus
                  .split(",")
                  .map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-zinc-300"
                    >
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-emerald-500/50 shrink-0" />
                      <span className="leading-tight">{item.trim()}</span>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
