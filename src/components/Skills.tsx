import React from 'react';
import { Code } from 'lucide-react';
import { techIcons, type PortfolioContent } from '../data';
import { Badge } from './ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const Skills = ({ content }: { content: PortfolioContent }) => {
  const { skills, skillsSection } = content;

  return (
    <section id="competences" className="border-y border-slate-200 bg-slate-50 px-4 py-16 md:px-5">
      <div className="mx-auto max-w-6xl">
        <div className="mb-9 grid gap-4 md:grid-cols-[1fr_0.55fr] md:items-end">
          <div>
            <Badge variant="outline" className="bg-white text-sky-700">{skillsSection.badge}</Badge>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 md:text-4xl">
              {skillsSection.title}
            </h2>
          </div>
          <p className="text-xs font-semibold leading-6 text-slate-600 md:text-sm">
            {skillsSection.description}
          </p>
        </div>

        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {Object.entries(skills).map(([category, skillList]) => (
            <Card key={category} className="rounded-lg">
              <CardHeader className="p-4 pb-3">
                <CardTitle className="text-xs font-black uppercase tracking-[0.2em] text-slate-500">
                  {skillsSection.labels[category] || category}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-1.5 p-4 pt-0">
                {skillList.map((skill) => {
                  const Icon = techIcons[skill] || Code;
                  return (
                    <Badge key={skill} variant="outline" className="gap-1.5 rounded-md bg-slate-50 px-2.5 py-1.5 text-[11px]">
                      <Icon size={12} className="text-sky-700" />
                      {skill}
                    </Badge>
                  );
                })}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
