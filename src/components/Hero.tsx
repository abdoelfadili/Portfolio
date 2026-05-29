import React from 'react';
import { ArrowRight, BrainCircuit, Github, Linkedin, Mail, MapPin, Sparkles, Workflow } from 'lucide-react';
import { Badge } from './ui/badge';
import { buttonVariants } from './ui/button-variants';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import AnimatedBackdrop from './AnimatedBackdrop';
import type { PortfolioContent } from '../data';

interface HeroProps {
  content: PortfolioContent;
  scrollToSection: (id: string) => void;
}

const Hero: React.FC<HeroProps> = ({ content, scrollToSection }) => {
  const { hero, highlights, profile } = content;
  const signals = [
    { label: 'ML/DL', value: 'Models', icon: BrainCircuit },
    { label: 'Agents', value: 'Tools', icon: Workflow },
    { label: 'Product', value: 'Ship', icon: Sparkles },
  ].map((signal, index) => ({ ...signal, ...hero.signals[index] }));

  return (
    <section id="accueil" className="relative overflow-hidden border-b border-slate-200 bg-[linear-gradient(180deg,#f8fafc_0%,#ffffff_52%,#f1f5f9_100%)] px-4 pt-20 md:px-5">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.06)_1px,transparent_1px)] bg-[size:44px_44px] opacity-50" />
      <AnimatedBackdrop />

      <div className="relative mx-auto grid min-h-[calc(100vh-5rem)] max-w-6xl items-center gap-8 py-10 lg:grid-cols-[1.08fr_0.92fr]">
        <div className="max-w-4xl">
          <Badge variant="outline" className="mb-5 border-sky-200 bg-white/80 text-sky-700 shadow-sm">
            {hero.badge}
          </Badge>

          <h1 className="text-4xl font-black leading-[0.96] tracking-tight text-slate-950 md:text-6xl">
            {profile.name}
          </h1>

          <p className="mt-5 max-w-3xl text-lg font-semibold leading-relaxed text-slate-700 md:text-2xl">
            {profile.role} · <span className="text-sky-700">{profile.focus}</span>.
          </p>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-600 md:text-base">
            {hero.intro}
          </p>

          <div className="mt-7 flex flex-wrap gap-2.5">
            <a
              href={`mailto:${profile.email}`}
              className={buttonVariants({ size: 'lg', className: 'rounded-full shadow-xl shadow-slate-200' })}
            >
              <Mail size={16} />
              {hero.contact}
            </a>
            <button
              onClick={() => scrollToSection('projets')}
              className={buttonVariants({ variant: 'outline', size: 'lg', className: 'rounded-full' })}
            >
              {hero.projects}
              <ArrowRight size={16} />
            </button>
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-500">
            <span className="inline-flex items-center gap-2">
              <MapPin size={15} className="text-sky-700" />
              {profile.location}
            </span>
            <a className="inline-flex items-center gap-2 hover:text-slate-950" href={profile.github} target="_blank" rel="noopener noreferrer">
              <Github size={15} />
              GitHub
            </a>
            <a className="inline-flex items-center gap-2 hover:text-slate-950" href={profile.linkedin} target="_blank" rel="noopener noreferrer">
              <Linkedin size={15} />
              LinkedIn
            </a>
          </div>
        </div>

        <Card className="overflow-hidden rounded-lg bg-white/90 shadow-2xl shadow-slate-200/80 backdrop-blur">
          <CardHeader className="border-b border-slate-100">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.22em] text-slate-400">{hero.systemLabel}</p>
                <CardTitle className="mt-2 text-2xl font-black">{hero.systemTitle}</CardTitle>
              </div>
              <Badge variant="success">{hero.ready}</Badge>
            </div>
          </CardHeader>
          <CardContent className="grid gap-4 p-4">
            <div className="grid grid-cols-3 gap-2.5">
              {signals.map((signal) => (
                <div key={signal.label} className="rounded-lg border border-slate-200 bg-slate-50 p-3">
                  <signal.icon size={17} className="text-sky-700" />
                  <div className="mt-3 text-sm font-black text-slate-950">{signal.value}</div>
                  <div className="mt-1 text-[10px] font-bold uppercase tracking-widest text-slate-500">{signal.label}</div>
                </div>
              ))}
            </div>

            <div className="grid gap-2.5">
              {highlights.map((highlight, index) => (
                <div key={highlight} className="flex gap-3 rounded-lg border border-slate-200 bg-white p-3">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-slate-950 text-[10px] font-black text-white">
                    0{index + 1}
                  </div>
                  <p className="text-xs font-semibold leading-5 text-slate-700">{highlight}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Hero;
