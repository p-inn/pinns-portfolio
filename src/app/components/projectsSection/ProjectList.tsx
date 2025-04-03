'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import { ProjectData } from '@/app/types/projectTypes';

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

export default function ProjectsList({ projects }: { projects: ProjectData[] }) {
  const [selected, setSelected] = useState<ProjectData | null>(null);

  return (
    <>
      <div className="flex flex-wrap justify-center gap-10">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="w-[360px] sm:w-[360px] md:w-[400px] flex-shrink-0"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
            <ProjectCard project={project} onClick={() => setSelected(project)} />
          </motion.div>
        ))}
      </div>
      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </>
  );
}
