import React from 'react';
import { GraduationCap } from 'lucide-react';
import type { PortfolioContent } from '../data';
import { Badge } from './ui/badge';
import { Card, CardContent } from './ui/card';

const Education = ({ content }: { content: PortfolioContent }) => {
  const { education, educationSection } = content;

  return (
    <section id="education" className="bg-white px-4 py-16 md:px-5">
      <div className="mx-auto max-w-5xl">
        <div className="mb-9 max-w-3xl">
          <Badge variant="secondary" className="text-sky-700">{educationSection.badge}</Badge>
          <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 md:text-4xl">
            {educationSection.title}
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {education.map((edu) => (
            <Card key={edu.degree} className="rounded-lg bg-slate-50 transition-colors hover:bg-white">
              <CardContent className="p-4 md:p-5">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-md bg-white text-sky-700 shadow-sm">
                  <GraduationCap size={21} />
                </div>
                <Badge variant="outline" className="mb-3 rounded-md bg-white text-[10px] uppercase tracking-widest">
                  {edu.period}
                </Badge>
                <h3 className="text-xl font-black tracking-tight text-slate-950">{edu.degree}</h3>
                <p className="mt-1.5 text-sm font-bold text-sky-700">{edu.school}</p>
                <p className="mt-3 text-xs leading-6 text-slate-600 md:text-sm">{edu.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
