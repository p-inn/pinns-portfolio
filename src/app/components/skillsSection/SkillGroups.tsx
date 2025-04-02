import { LucideIcon } from "lucide-react";

interface SkillGroupProps {
  title: string;
  Icon: LucideIcon;
  skills: { name: string; color: string }[];
}

export default function SkillGroup({ title, Icon, skills }: SkillGroupProps) {
  return (
    <div className="flex items-start gap-10 w-full flex-col md:flex-row">
      <div className="w-40 shrink-0">
        <h3 className="font-bold text-2xl text-gray-800 font-hambakk whitespace-nowrap flex items-center">
        <Icon className="inline-block align-middle w-6 h-6 mr-2" />
          {title}
        </h3>
      </div>
      <div className="flex flex-wrap gap-4">
        {skills.map((skill) => (
          <span
            key={skill.name}
            className="px-4 py-1.5 rounded-xl text-lg font-semibold text-white"
            style={{ backgroundColor: skill.color }}
          >
            {skill.name}
          </span>
        ))}
      </div>
    </div>
  );
}
