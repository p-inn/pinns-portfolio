"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ProjectData } from "@/app/types/projectTypes";
import dynamic from "next/dynamic";
import {
  HeartHandshake,
  WandSparkles,
  Activity,
  Flame,
  Link,
  CircleX,
} from "lucide-react";
import Image from "next/image";

interface ProjectModalProps {
  project: ProjectData | null;
  onClose: () => void;
}

const StackIcons = dynamic(() => import("./StackIcon"));

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  if (!project) return null;

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        key="modal-backdrop"
        className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center"
        onClick={selectedImage ? undefined : handleBackdropClick}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          key="modal-content"
          className="bg-white rounded-2xl w-full max-w-[90%] max-h-[90vh] relative flex flex-col"
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
        >
          <div className="sticky top-0 bg-white z-10 flex justify-end p-4 rounded-2xl">
            <button onClick={onClose}>
              <CircleX className="w-10 h-10 text-gray-700" />
            </button>
          </div>
          <div className="overflow-y-auto px-8 pb-10">
            <div className="flex flex-col justify-center items-center gap-3 w-4/5 mx-auto mt-4">
              <h2 className="text-4xl font-pretendardBold mb-2">
                {project.title}
              </h2>
              <p className="text-gray-700 mb-6 whitespace-pre-wrap leading-relaxed text-lg">
                {project.startDate} ~ {project.endDate}
              </p>
              <div className="flex flex-wrap gap-2 mt-2 justify-center">
                {project.stacks?.map((stack: string) => (
                  <StackIcons key={stack} stack={stack} />
                ))}
              </div>
              <p className="text-gray-700 mb-6 whitespace-pre-wrap leading-relaxed text-center text-lg">
                {project.description}
              </p>
              <div className="flex gap-10">
                <a
                  href={project.githubUrl}
                  className="flex items-center text-xl font-elice"
                >
                  <Link className="inline-block w-6 h-6 mr-2 text-gray-600" />
                  Github.
                </a>
                <a
                  href={project.docsUrl}
                  className="flex items-center text-xl font-elice"
                >
                  <Link className="inline-block w-6 h-6 mr-2 text-gray-600" />
                  Notion.
                </a>
              </div>
            </div>

            <hr className="bg-gray-800 my-4 min-w-full" />

            <div className="w-4/5 mx-auto flex flex-col items-start">
              <h2 className="text-4xl font-pretendardBold mb-10 flex items-center">
                {project.category?.includes("personal") ? (
                  <WandSparkles className="inline-block w-6 h-6 mr-2 text-sky-600" />
                ) : (
                  <HeartHandshake className="inline-block w-6 h-6 mr-2 text-rose-800" />
                )}
                {project.category?.includes("personal")
                  ? "개인 프로젝트"
                  : "팀 프로젝트"}
              </h2>

              <div className="mb-6">
                <p className="text-2xl font-pretendardBold mb-4">
                  <Activity className="inline-block w-6 h-6 mr-2 text-purple-800" />
                  주요 기능 및 특징
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  {project.points?.map((point, idx) => (
                    <li key={idx} className="text-lg leading-loose">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              {project.contribution && project.contribution.length > 0 && (
                <div className="w-full">
                  <p className="text-2xl font-pretendardBold mb-4">
                    <Flame className="inline-block w-6 h-6 mr-2 text-purple-800" />
                    기여 부분
                  </p>
                  <ul className="list-inside space-y-6 text-gray-700">
                    {project.contribution.map((contrib, idx) => (
                      <li key={idx}>
                        <span className="block w-full bg-gray-200 px-4 py-2 font-pretendardBold text-lg text-gray-800">
                          {contrib.title}
                        </span>
                        <ul className="list-disc list-inside ml-5 mt-2 space-y-1">
                          {contrib.detail.map((d, i) => (
                            <li key={i} className="text-base leading-relaxed">
                              {d}
                            </li>
                          ))}
                        </ul>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {project.images && project.images.length > 0 && (
                <div className="mt-10">
                  <h3 className="text-2xl font-bold mb-4">🖥 작업 화면</h3>
                  <p className="text-gray-500 mb-4">
                    이미지를 클릭하면 크게 볼 수 있습니다.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                    {project.images.map((src, idx) => (
                      <div
                        key={idx}
                        className="w-full h-[250px] overflow-hidden border border-gray-300 rounded-md hover:scale-105 transition cursor-pointer"
                        onClick={() => setSelectedImage(src)}
                      >
                        <Image
                          src={src}
                          alt={`screenshot-${idx}`}
                          width={500}
                          height={450}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>

                </div>
              )}

              {selectedImage && (
                <div
                  className="fixed inset-0 bg-black bg-opacity-70 z-50 flex justify-center items-center"
                  onClick={() => setSelectedImage(null)}
                >
                  <Image
                    src={selectedImage}
                    alt={`screenshot-${selectedImage}`}
                    width={800}
                    height={700}
                    className="rounded-lg shadow-lg"
                  />
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
