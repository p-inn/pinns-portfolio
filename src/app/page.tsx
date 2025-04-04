"use client";

import AboutPage from "./\babout/page";
import SkillPage from "./skills/page";
import ProjectsPage from "./projects/page";
import EducationPage from "./education/page";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import MotionWrapper from "./components/heroSection/MotionWrapper";

export default function Home() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <MotionWrapper />
      {showContent && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <AboutPage />
          <SkillPage />
          <ProjectsPage />
          <EducationPage />
          <Footer />
        </motion.div>
      )}
    </div>
  );
}
