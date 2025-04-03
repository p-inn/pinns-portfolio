'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

interface HeroProps {
  onFinish?: () => void;
}

export default function FirstLayout({ onFinish }: HeroProps) {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsExiting(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence onExitComplete={onFinish}>
      {!isExiting && (
        <motion.section
          className="fixed inset-0 bg-gradient-to-b from-purple-50 to-white z-[9999] flex items-center justify-center"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-5xl md:text-6xl font-hambakk text-purple-800 mb-10">
              Empathy in mind _ 
            </h1>
            <p className="text-4xl mt-4 text-gray-500">프론트엔드 개발자 <span className='font-pretendardBold'>이솔</span>입니다.</p>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  );
}

