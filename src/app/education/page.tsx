import { Link } from "lucide-react";
import EducationExperienceList from "../components/educationSection/EducationExperienceList";


export default function EducationPage() {
  return (
    <div className="w-full p-20 mx-auto">
      <h2 className="text-4xl font-hambakk mb-12 text-gray-700 text-center tracking-tight flex items-center justify-center gap-4">
        <Link className="inline-block w-10 h-10 mr-1" />
        Education
      </h2>
      <EducationExperienceList />
    </div>
  );
}
