import { BookOpenText } from "lucide-react"

export default function EducationSection() {
  return (
    <div className="w-full rounded-md shadow-md p-4 sm:p-6 md:p-10 bg-gray-50 text-gray-700">
      <p className="text-sm sm:text-base text-gray-500 mb-3 sm:mb-4">2023.07.01 ~ 2024.01.25</p>
      <p className="text-base sm:text-lg font-pretendardBold mb-3 sm:mb-4 flex items-center">
        <BookOpenText className="inline-block w-4 h-4 sm:w-5 sm:h-5 mr-2" />
        제로베이스 프론트엔드 스쿨 17기
      </p>
      <ul className="list-disc list-inside space-y-1 text-sm sm:text-base text-gray-500 leading-relaxed sm:leading-loose">
        <li>자바스크립트 코어와 타입스크립트 원리 및 문법 학습</li>
        <li>React 학습 후, 5개의 협업 프로젝트 진행</li>
        <li>5개의 협업 프로젝트 중 4개가 우수 협업 프로젝트로 선정</li>
        <li>상위 5% 성적으로 우수 수강생 선정</li>
      </ul>
    </div>
  );
}
