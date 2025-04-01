import { ProjectData } from "@/app/types/projectTypes";
import dynamic from "next/dynamic";
import Image from "next/image";

interface ProjectCardProps {
  project: ProjectData;
  onClick: (project: ProjectData) => void;
}

const StackIcons = dynamic(() => import("./StackIcon"));

export default function ProjectCard({
  project, onClick,
}: ProjectCardProps) {
  return (
    <article
      onClick={() => onClick(project)}
      className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer bg-white flex flex-col w-full max-w-[400px] h-[600px]"
    >
      {/* 이미지 영역 */}
      <div className="relative w-full h-[60%]">
        <Image
          src={project.path ??''}
          alt={project.title ?? "프로젝트 썸네일"}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
        />
      </div>

      {/* 텍스트 영역 */}
      <div className="flex flex-col justify-between p-5 h-[40%]">
        <div className="mb-2">
          <div className="flex justify-between items-center mb-1">
            <h3 className="text-lg font-bold truncate">{project.title}</h3>
            <div className="flex flex-wrap gap-1">
              {project.category?.map((tag:string) => (
                <span
                  key={tag}
                  className={`text-xs text-white px-2 py-0.5 rounded-md ${
                    tag === "Team"
                      ? "bg-red-500"
                      : tag === "Personal"
                      ? "bg-yellow-600"
                      : "bg-green-500"
                  }`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <p className="text-gray-500 text-sm mb-1">
            {project.startDate} ~ {project.endDate}
          </p>
          <p className="text-sm text-gray-700 line-clamp-2">{project.intro}</p>
        </div>

      </div>
    </article>
  );
}


