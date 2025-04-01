import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full backdrop-blur z-50">
      <div className="mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="ml-10 font-hambakk text-7xl text-gray-700">Pinn .</h1>
        <nav className="space-x-6">
          <a href="#about" className="text-gray-600 hover:text-black transition text-2xl">About</a>
          <a href="#skills" className="text-gray-600 hover:text-black transition text-2xl">Skills</a>
          <a href="#projects" className="text-gray-600 hover:text-black transition text-2xl">Projects</a>
          <a href="#contact" className="text-gray-600 hover:text-black transition text-2xl">Contact</a>
        </nav>
      </div>
    </header>
  );
}