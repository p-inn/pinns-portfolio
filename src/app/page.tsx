import AboutPage from "./\babout/page";
import SkillPage from "./skills/page";
import ProjectsPage from "./projects/page";
import EducationPage from "./education/page";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <AboutPage />
      <SkillPage />
      <ProjectsPage />
      <EducationPage />
      <Footer />
    </div>
  );
}
