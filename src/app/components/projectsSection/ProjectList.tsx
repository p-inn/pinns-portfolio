'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import { ProjectData } from '@/app/types/projectTypes';

const containerVariants = {
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

export default function ProjectsList({ projects }: { projects: ProjectData[] }) {
  const [selected, setSelected] = useState<ProjectData | null>(null);

  return (
    <>
      <motion.div
        className="flex flex-wrap justify-center gap-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.1 }} 
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="w-[90%] max-w-[400px] flex-shrink-0"
            variants={cardVariants}
          >
            <ProjectCard project={project} onClick={() => setSelected(project)} />
          </motion.div>
        ))}
      </motion.div>
      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </>
  );
}
