import { PenTool } from "lucide-react";

export default function ExperienceSection() {
  return (
    <div className="w-full rounded-md shadow-md p-4 sm:p-6 md:p-10 bg-gray-50 text-gray-700">
      <p className="text-sm sm:text-base text-gray-500 mb-3 sm:mb-4">
        2014.03.01 ~ 2014.04.30
      </p>
      <p className="text-base sm:text-lg font-pretendardBold mb-3 sm:mb-4 flex items-center">
        <PenTool className="inline-block w-4 h-4 sm:w-5 sm:h-5 mr-2" />
        백제예술대학교 실용음악학과
      </p>
      <ul className="list-disc list-inside text-sm sm:text-base text-gray-500 leading-relaxed sm:leading-loose">
        <li>실용음악학과 보컬 전공</li>
      </ul>
    </div>
  );
}
