import { Gabarito } from "next/font/google";

const gabarito = Gabarito({
  variable: "--font-gabarito",
  subsets: ["latin"],
});

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-[#313131] text-black z-50">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
      <div className={`text-[40px] text-white`}>sn.</div>
      <div className="space-x-4 text-white">
          <a href="#home" className={`hover:text-gray-400 ${gabarito.className}`}>Home</a>
          <a href="#about" className={`hover:text-gray-400 ${gabarito.className}`}>About</a>
          <a href="#work" className={`hover:text-gray-400 ${gabarito.className}`}>Work</a>
          <a href="#contact" className={`hover:text-gray-400 ${gabarito.className}`}>Contact</a>
        </div>
      </div>
    </nav>
  );
}
