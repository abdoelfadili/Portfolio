import React from 'react';
import { Bot, BrainCircuit, Code2, Database, Network, Server, ShieldCheck, Smartphone } from 'lucide-react';
import { Badge } from './ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import type { PortfolioContent } from '../data';

const icons = [Code2, BrainCircuit, Network, Bot, Server, Smartphone];

const Expertise = ({ content }: { content: PortfolioContent }) => {
  const { expertise } = content;

  return (
    <section id="expertise" className="relative overflow-hidden bg-slate-950 px-4 py-16 text-white md:px-5">
      <div className="gif-mesh absolute inset-0 opacity-40" aria-hidden="true" />
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 grid gap-6 md:grid-cols-[0.9fr_1.1fr] md:items-end">
          <div>
            <Badge className="bg-white/10 text-sky-200">{expertise.badge}</Badge>
            <h2 className="mt-4 text-3xl font-black tracking-tight md:text-5xl">
              {expertise.title}
            </h2>
          </div>
          <p className="text-sm font-medium leading-7 text-slate-300 md:text-base">
            {expertise.description}
          </p>
        </div>

        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {expertise.domains.map((domain, index) => {
            const Icon = icons[index] || Code2;
            return (
              <Card key={domain.title} className="group border-white/10 bg-white/[0.04] text-white shadow-none transition-colors hover:border-white/25 hover:bg-white/[0.07]">
                <CardHeader className="p-4">
                  <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-md bg-white/10">
                    <Icon size={19} className={domain.accent} />
                  </div>
                  <CardTitle className="text-lg font-black">{domain.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <p className="text-xs font-medium leading-6 text-slate-300">{domain.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-4 grid gap-3 md:grid-cols-2">
          <div className="rounded-lg border border-white/10 bg-white/[0.04] p-4">
            <Database size={18} className="text-sky-300" />
            <p className="mt-3 text-xs font-semibold leading-6 text-slate-300">
              {expertise.dataNote}
            </p>
          </div>
          <div className="rounded-lg border border-white/10 bg-white/[0.04] p-4">
            <ShieldCheck size={18} className="text-emerald-300" />
            <p className="mt-3 text-xs font-semibold leading-6 text-slate-300">
              {expertise.engineeringNote}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
