import React from 'react';
import { BriefcaseBusiness, Check } from 'lucide-react';
import type { PortfolioContent } from '../data';
import { Badge } from './ui/badge';
import { Card, CardContent } from './ui/card';

const Experience = ({ content }: { content: PortfolioContent }) => {
  const { experiences, experienceSection } = content;

  return (
    <section id="experiences" className="border-y border-slate-200 bg-slate-50 px-4 py-16 md:px-5">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 max-w-3xl">
          <Badge variant="outline" className="bg-white text-sky-700">{experienceSection.badge}</Badge>
          <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 md:text-4xl">
            {experienceSection.title}
          </h2>
        </div>

        <div className="grid gap-4">
          {experiences.map((exp) => (
            <Card key={`${exp.company}-${exp.period}`} className="rounded-lg">
              <CardContent className="p-4 md:p-5">
                <div className="flex flex-col justify-between gap-4 md:flex-row md:items-start">
                  <div className="flex gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-sky-50 text-sky-700">
                      <BriefcaseBusiness size={19} />
                    </div>
                    <div>
                      <h3 className="text-xl font-black tracking-tight text-slate-950">{exp.title}</h3>
                      <p className="mt-1 text-sm font-bold text-sky-700">{exp.company}</p>
                    </div>
                  </div>
                  <Badge variant="outline" className="rounded-md bg-slate-50 text-[10px] uppercase tracking-widest">
                    {exp.period}
                  </Badge>
                </div>

                <p className="mt-4 max-w-3xl text-xs leading-6 text-slate-600 md:text-sm">{exp.description}</p>

                <div className="mt-4 grid gap-2.5 md:grid-cols-3">
                  {exp.tasks.map((task) => (
                    <div key={task} className="flex gap-2.5 rounded-lg bg-slate-50 p-3">
                      <Check className="mt-0.5 shrink-0 text-emerald-600" size={14} />
                      <p className="text-xs font-semibold leading-5 text-slate-700">{task}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
