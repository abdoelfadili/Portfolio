import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { Badge } from './ui/badge';
import { Card, CardContent } from './ui/card';
import type { PortfolioContent } from '../data';

const About = ({ content }: { content: PortfolioContent }) => {
  const { about } = content;

  return (
    <section id="propos" className="border-b border-slate-200 bg-white px-4 py-16 md:px-5">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.72fr_1.28fr]">
        <div>
          <Badge variant="secondary" className="text-sky-700">{about.badge}</Badge>
          <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 md:text-4xl">
            {about.title}
          </h2>
        </div>

        <div>
          <p className="text-base font-semibold leading-8 text-slate-700 md:text-lg">
            {about.description}
          </p>

          <div className="mt-5 grid gap-3">
            {about.points.map((point) => (
              <Card key={point} className="rounded-lg bg-slate-50 shadow-none">
                <CardContent className="flex gap-3 p-4">
                  <CheckCircle2 className="mt-1 shrink-0 text-emerald-600" size={18} />
                  <p className="text-xs font-semibold leading-6 text-slate-700 md:text-sm">{point}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
