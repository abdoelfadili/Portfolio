import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Code, X } from 'lucide-react';
import { techIcons, type PortfolioContent, type Project } from '../data';
import { Badge } from './ui/badge';

interface ProjectCarouselProps {
  content: PortfolioContent;
  project: Project;
  onClose: () => void;
}

const ProjectCarousel: React.FC<ProjectCarouselProps> = ({ content, project, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { carousel } = content;
  const baseUrl = import.meta.env.BASE_URL;
  const rawImages = project.screenshots && project.screenshots.length > 0 ? project.screenshots : [`/images/${project.imageName}.png`];
  const images = rawImages.map((image) => image.startsWith('/') ? `${baseUrl}${image.slice(1)}` : image);

  const handlePrevious = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      <div className="fixed inset-0 z-[60] bg-slate-950/60 backdrop-blur-sm" onClick={onClose} />

      <div className="fixed inset-0 z-[70] flex items-center justify-center p-3 md:p-6">
        <div
          className="relative flex max-h-[90vh] w-full max-w-5xl flex-col overflow-hidden rounded-lg border border-slate-200 bg-white shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute right-3 top-3 z-10 rounded-md border border-slate-200 bg-white/90 p-2 text-slate-500 shadow-sm backdrop-blur transition-colors hover:bg-slate-950 hover:text-white"
            aria-label={carousel.close}
          >
            <X size={17} />
          </button>

          <div className="grid overflow-auto lg:grid-cols-[1.05fr_0.95fr]">
            <div className="relative min-h-[260px] bg-slate-100">
              <img
                src={images[currentIndex]}
                alt={`${project.title} ${carousel.capture} ${currentIndex + 1}`}
                width="960"
                height="540"
                loading="eager"
                decoding="async"
                className="h-full max-h-[62vh] w-full object-contain p-3"
              />

              {images.length > 1 && (
                <>
                  <button
                    onClick={handlePrevious}
                    className="absolute left-3 top-1/2 -translate-y-1/2 rounded-md bg-white p-2.5 text-slate-600 shadow-lg transition-colors hover:bg-sky-700 hover:text-white"
                    aria-label={carousel.previous}
                  >
                    <ChevronLeft size={19} />
                  </button>
                  <button
                    onClick={handleNext}
                    className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md bg-white p-2.5 text-slate-600 shadow-lg transition-colors hover:bg-sky-700 hover:text-white"
                    aria-label={carousel.next}
                  >
                    <ChevronRight size={19} />
                  </button>
                </>
              )}
            </div>

            <div className="p-4 md:p-5">
              <Badge variant="secondary" className="mb-4 text-sky-700">
                {project.type || carousel.fallbackType}
              </Badge>
              <h2 className="text-2xl font-black tracking-tight text-slate-950">{project.title}</h2>
              <p className="mt-3 text-xs leading-6 text-slate-600 md:text-sm">{project.details}</p>

              <div className="mt-4 grid gap-3">
                {[
                  [carousel.labels.problem, project.problem],
                  [carousel.labels.solution, project.solution],
                  [carousel.labels.impact, project.impact],
                ].map(([label, value]) => (
                  <div key={label} className="rounded-lg border border-slate-200 bg-slate-50 p-3">
                    <h3 className="text-[10px] font-black uppercase tracking-[0.18em] text-slate-500">{label}</h3>
                    <p className="mt-1.5 text-xs font-semibold leading-5 text-slate-700">{value}</p>
                  </div>
                ))}
              </div>

              {project.bullets && (
                <ul className="mt-4 grid gap-1.5">
                  {project.bullets.map((bullet) => (
                    <li key={bullet} className="text-xs font-semibold leading-5 text-slate-600">
                      <span className="mr-2 text-sky-700">•</span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              )}

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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCarousel;
