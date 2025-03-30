interface SkillGroupProps {
  title: string;
  skills: { name: string; color: string }[];
}

export default function SkillGroup({ title, skills }: SkillGroupProps) {
  return (
    <div className="flex items-start gap-16 w-full flex-col md:flex-row">
      <div className="w-32 shrink-0">
        <h3 className="font-bold text-2xl text-gray-800 font-hambakk whitespace-nowrap">
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
