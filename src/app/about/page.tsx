import Header from "../components/Header";
import { Laptop, AtSign } from "lucide-react";
export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="mt-20 p-10 w-full">
      <section className="flex flex-col md:flex-row items-center justify-between gap-10" id="about">
        <div className="w-full space-y-4 flex flex-col gap-4 p-10 font-elice text-black">
          <p className="justify-center text-4xl text-center">안녕하세요.</p>
          <p className="justify-center text-4xl text-center">사용자의 시선에서 출발해, 기술로 완성하는 개발자</p>
          <p className="justify-center text-4xl text-center">이 솔 입니다. </p>
          <div className="pt-4 space-x-6 flex text-center justify-center flex-row">
            <a href="https://github.com/p-inn" target="_blank" className="hover:underline flex items-center justify-center">
            <Laptop className="inline-block w-4 h-4 mr-1"/>
              GitHub
            </a>
            <a href="mailto:lsol1130@naver.com " className="hover:underline flex items-center justify-center">
              <AtSign className="inline-block w-4 h-4 mr-1"/>
                Email
              </a>
            {/* <a href="#contact" className="hover:underline flex items-center justify-center">
            <Send className="inline-block w-4 h-4 mr-1"/>
              Contact
            </a> */}
          </div>
        </div>
      </section>
    </main>
    </>
  );
}