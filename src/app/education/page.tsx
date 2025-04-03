import { Link } from "lucide-react";
import EducationSection from "../components/educationSection/Education";
import ExperienceSection from "../components/experienceSection/Experience";

export default function EducationPage() {
  return (
    <div className="w-full p-20 mx-auto">
      <h2 className="text-4xl font-hambakk mb-12 text-gray-700 text-center tracking-tight flex items-center justify-center gap-4">
        <Link className="inline-block w-10 h-10 mr-1"/>
        Education
      </h2>
      <div className="flex flex-1 gap-x-10">
        <EducationSection />
        <ExperienceSection />
      </div>

    </div>
  );
}