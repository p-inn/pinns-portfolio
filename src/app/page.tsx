import Image from "next/image";
import AboutPage from "./\babout/page";
import SkillPage from "./skills/page";

export default function Home() {
  return (
    <div>
      <AboutPage />
      <SkillPage />
    </div>
  );
}
