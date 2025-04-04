import { Hash, Laptop } from "lucide-react";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full backdrop-blur z-50">
      <div className="mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="ml-10 font-hambakk text-7xl text-gray-700">Pinn .</h1>
        <nav className="space-x-6 flex flex-row gap-2">
          <a href="#about" className="text-gray-600 hover:text-black transition text-2xl flex items-center justify-center">
            <Hash className="inline-block w-5 h-5 mr-1"/>
            About
          </a>
          <a href="https://github.com/p-inn" className="text-gray-600 hover:text-black transition text-2xl flex items-center justify-center">
            <Laptop className="inline-block w-5 h-5 mr-1"/>
            Github
          </a>
          {/* <a href="#contact" className="text-gray-600 hover:text-black transition text-2xl">Contact</a> */}
        </nav>
      </div>
    </header>
  );
}