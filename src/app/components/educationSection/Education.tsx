import { BookOpenText } from "lucide-react"

export default function EducationSection() {
  return (
    <div className="w-full h-[400px] rounded-md shadow-md p-10 bg-gray-50">
      <p className="text-base text-gray-500 mb-4">2023.07.01 ~ 2024.01.25</p>
      <p className="text-lg font-pretendardBold mb-4">
        <BookOpenText className="inline-block w-5 h-5 mr-2"/>
        제로베이스 프론트엔드 스쿨 17기
        </p>
      <ul className="list-disc list-inside space-y-1 text-base text-gray-500 leading-loose">
        <li>자바스크립트 코어와 타입스크립트 원리 및 문법 학습</li>
        <li>React 학습 후, 5개의 협업 프로젝트 진행</li>
        <li>5개의 협업 프로젝트 중 4개가 우수 협업 프로젝트로 선정</li>
        <li>상위 5% 성적으로 우수 수강생 선정</li>
      </ul>
    </div>
  );
}
