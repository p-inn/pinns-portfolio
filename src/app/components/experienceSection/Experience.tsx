import { PenTool } from "lucide-react";

export default function ExperienceSection() {
  return (
    <div className="w-full h-[400px] rounded-md shadow-md p-10 bg-gray-50">
      <p className="text-base text-gray-500 mb-4">2014.03.01 ~ 2014.04.30</p>
      <p className="text-lg font-pretendardBold mb-4">
      <PenTool className="inline-block w-5 h-5 mr-2"/>
        백제예술대학교 실용음악학과
      </p>
      <li className="list-disc text-gray-500 text-base">실용음악학과 보컬 전공</li>
    </div>
  );
}
