import Link from "next/link";
import Header from "../components/Header";

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="mt-20 p-10 w-full">
      <section className="flex flex-col md:flex-row items-center justify-between gap-10" id="about">
        <div className="w-full space-y-4 flex flex-col gap-4 p-10 font-elice">
          <p className="justify-center text-4xl text-center">안녕하세요.</p>
          <p className="justify-center text-4xl text-center">사용자의 시선에서 출발해, 기술로 완성하는 개발자</p>
          <p className="justify-center text-4xl text-center">이 솔 입니다. </p>
          <div className="pt-4 space-x-6 flex justify-center flex-row">
            <a href="https://github.com/p-inn" target="_blank" className="hover:underline">GitHub</a>
            <a href="mailto:lsol1130@naver.com " className="hover:underline">Email</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </div>
        </div>
      </section>
    </main>
    </>
  );
}