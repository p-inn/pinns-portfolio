import { Hash, Laptop } from "lucide-react";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full backdrop-blur z-50">
      <div className="mx-auto px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center">
        <h1 className="ml-2 sm:ml-4 md:ml-10 font-hambakk text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-gray-700">
          Pinn<span className="hidden sm:inline"> .</span>
        </h1>
        <nav className="flex gap-2 sm:gap-4 md:gap-6">
          <a
            href="#about"
            className="text-gray-600 hover:text-black transition text-base sm:text-lg md:text-xl flex items-center"
          >
            <Hash className="inline-block w-4 h-4 sm:w-5 sm:h-5 mr-1" />
            About
          </a>
          <a
            href="https://github.com/p-inn"
            className="text-gray-600 hover:text-black transition text-base sm:text-lg md:text-xl flex items-center"
          >
            <Laptop className="inline-block w-4 h-4 sm:w-5 sm:h-5 mr-1" />
            Github
          </a>
        </nav>
      </div>
    </header>
  );
}
