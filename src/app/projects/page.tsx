'use client';

import { useState } from 'react';
import ProjectCard from '../components/projectsSection/ProjectCard';
import ProjectModal from '../components/projectsSection/ProjectModal';
import { ProjectData } from '../types/projectTypes';
import { projects } from '../data/projectsData/ProjectsData';
import { Link } from 'lucide-react';

export default function ProjectsPage() {
  const [selected, setSelected] = useState<ProjectData | null>(null);

  return (
    <section className="px-5 py-20 mx-auto">
      <h2 className="text-4xl font-hambakk mb-12 text-gray-900 text-center tracking-tight flex items-center justify-center gap-4">
          <Link className="inline-block w-10 h-10 mr-1"/>
          Projects 
        </h2>
      <div className="flex flex-wrap justify-center gap-10">
        {projects.map((project) => (
          <div
            key={project.id}
            className="w-[360px] sm:w-[360px] md:w-[400px] flex-shrink-0"
          >
            <ProjectCard project={project} onClick={() => setSelected(project)} />
          </div>
        ))}
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
