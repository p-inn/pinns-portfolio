import SkillGroup from "../components/skillsSection/SkillGroups";
import {
  Link,
  Code2,
  Paintbrush,
  ServerCog,
  Users,
  Wrench,
} from "lucide-react";

export default function SkillPage() {
  return (
    <>      

      <section className="p-20 bg-purple-50 mx-auto mt-10">
        <h2 className="text-6xl font-hambakk mb-12 text-gray-900 text-center tracking-tight flex items-center justify-center gap-4">
          <Link className="inline-block w-10 h-10 mr-1"/>
          Skills & Tools
        </h2>
        <div className="space-y-8 m-20 p-20 rounded-2xl shadow-md bg-purple-100">
          <SkillGroup
            Icon={Code2}
            title="Language"
            skills={[
              { name: "TypeScript", color: "#2f74c0" },
              { name: "JavaScript", color: "#f7df1e" },
            ]}
          />
          <SkillGroup
            Icon={Paintbrush}
            title="Frontend"
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
            Icon={ServerCog}
            title="Backend"
            skills={[
              { name: "Firebase", color: "#fcca3f" },
            ]}
          />
          <SkillGroup
            Icon={Wrench}
            title="DevOps"
            skills={[
              { name: "Vercel", color: "#000000" },
            ]}
          />
          <SkillGroup
            Icon={Users}
            title="Others"
            skills={[
              { name: "Discord", color: "#5865F2" },
              { name: "Slack", color: "#4A154B" },
              { name: "Figma", color: "#F24E1E" },
            ]}
          />
        </div>
      </section>
    </>
  );
}
