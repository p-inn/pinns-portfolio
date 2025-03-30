import SkillGroup from "../components/skillsSection/skillGroup";

export default function SkillPage() {
  return (
    <section className="p-10 bg-purple-50 rounded-3xl shadow-md w-full max-w-7xl mx-auto mt-10">
      <h2 className="text-5xl font-hambakk mb-12 text-gray-900 text-center tracking-tight">
        Skills & Tools
      </h2>
      <div className="space-y-8">
        <SkillGroup
          title="💭 Language"
          skills={[
            { name: "TypeScript", color: "#2f74c0" },
            { name: "JavaScript", color: "#f7df1e" },
          ]}
        />
        <SkillGroup
          title="⛓️‍💥 Frontend"
          skills={[
            { name: "HTML", color: "#f16529" },
            { name: "CSS", color: "#2965f1" },
            { name: "React", color: "#61dafb" },
            { name: "Next.js", color: "#000000" },
            { name: "Zustand", color: "#8e44ad" },
            { name: "Redux", color: "#764abc" },
            { name: "Recoil", color: "#4c6ef5" },
            { name: "React Query", color: "#ff4154" },
            { name: "React-Hook-Form", color: "#EC5990" },
            { name: "Tailwind CSS", color: "#38bdf8" },
            { name: "Styled Components", color: "#db7093" },
            { name: "Storybook", color: "#ff4785" },
          ]}
        />
        <SkillGroup
          title="🛠️ Backend"
          skills={[
            { name: "Firebase", color: "#fcca3f" },
          ]}
        />
        <SkillGroup
          title="⚙️ DevOps"
          skills={[
            { name: "Vercel", color: "#000000" },
          ]}
        />
        <SkillGroup
          title="🗣️ Others"
          skills={[
            { name: "Discord", color: "#5865F2" },
            { name: "Slack", color: "#4A154B" },
            { name: "Figma", color: "#F24E1E" },
          ]}
        />
      </div>
    </section>
  );
}
