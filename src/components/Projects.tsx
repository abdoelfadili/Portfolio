import React from 'react';
import { ArrowUpRight, Code, Target } from 'lucide-react';
import { techIcons, type PortfolioContent, type Project } from '../data';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';

interface ProjectsProps {
  content: PortfolioContent;
  openProjectCarousel: (project: Project) => void;
}

const Projects: React.FC<ProjectsProps> = ({ content, openProjectCarousel }) => {
  const { projects, projectsSection } = content;
  const baseUrl = import.meta.env.BASE_URL;

  return (
    <section id="projets" className="bg-white px-4 py-16 md:px-5">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 grid gap-5 md:grid-cols-[1fr_0.55fr] md:items-end">
          <div className="max-w-3xl">
            <Badge variant="secondary" className="text-sky-700">{projectsSection.badge}</Badge>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 md:text-5xl">
              {projectsSection.title}
            </h2>
          </div>
          <p className="text-xs font-semibold leading-6 text-slate-600 md:text-sm">
            {projectsSection.description}
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          {projects.map((project, index) => (
            <Card key={project.title} className="group overflow-hidden rounded-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/80">
              <div className="relative aspect-[16/8.5] overflow-hidden border-b border-slate-200 bg-slate-100">
                <img
                  src={`${baseUrl}images/${project.imageName}.png`}
                  alt={project.title}
                  width="960"
                  height="510"
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 bg-gradient-to-t from-slate-950/75 to-transparent p-3">
                  <Badge className="bg-white text-slate-950">{project.type}</Badge>
                  <span className="rounded-md bg-slate-950/70 px-2 py-1 text-[10px] font-black text-white backdrop-blur">
                    0{index + 1}
                  </span>
                </div>
              </div>

              <CardContent className="p-4 md:p-5">
                <div className="mb-3 flex items-center justify-between gap-4">
                  <span className="text-[10px] font-black uppercase tracking-[0.18em] text-sky-700">{project.period}</span>
                </div>

                <h3 className="text-xl font-black tracking-tight text-slate-950">{project.title}</h3>
                <p className="mt-2 text-xs leading-6 text-slate-600">{project.description}</p>

                <div className="mt-4 rounded-lg border border-slate-200 bg-slate-50 p-3">
                  <div className="mb-1.5 flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.18em] text-slate-500">
                    <Target size={13} className="text-sky-700" />
                    {projectsSection.impact}
                  </div>
                  <p className="text-xs font-semibold leading-5 text-slate-700">{project.impact}</p>
                </div>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.tech.map((tech) => {
                    const Icon = techIcons[tech] || Code;
                    return (
                      <Badge key={tech} variant="outline" className="gap-1.5 rounded-md px-2.5 py-1.5 text-[11px]">
                        <Icon className="text-sky-700" size={12} />
                        {tech}
                      </Badge>
                    );
                  })}
                </div>

                <Button
                  onClick={() => openProjectCarousel(project)}
                  className="mt-5 w-full rounded-md"
                >
                  {projectsSection.detailsButton}
                  <ArrowUpRight size={15} />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
