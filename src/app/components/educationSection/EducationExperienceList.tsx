'use client';

import { motion } from 'framer-motion';
import EducationSection from "../educationSection/Education";
import ExperienceSection from "../experienceSection/Experience";

const fadeInVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

export default function EducationExperienceList() {
  return (
    <motion.div
      className="flex flex-col lg:flex-row gap-y-6 lg:gap-x-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={fadeInVariants}
    >
      <EducationSection />
      <ExperienceSection />
    </motion.div>
  );
}
