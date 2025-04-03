import ProjectsList from "../components/projectsSection/ProjectList";
import { projects } from "../data/projectsData/ProjectsData";
import { Link } from "lucide-react";

export default function ProjectsPage() {
  return (
    <section className="px-5 py-20 mx-auto">
      <h2 className="text-4xl font-hambakk mb-12 text-gray-900 text-center tracking-tight flex items-center justify-center gap-4">
        <Link className="inline-block w-10 h-10 mr-1" />
        Projects
      </h2>
      <ProjectsList projects={projects} />
    </section>
  );
}
