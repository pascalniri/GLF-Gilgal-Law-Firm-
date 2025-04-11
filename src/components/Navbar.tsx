import { IoMdChatbubbles } from "react-icons/io";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`font-outfit fixed top-10 left-1/2 transform -translate-x-1/2 px-20 py-8 w-[90%] max-w-full z-50 rounded-[10px] shadow-md transition-all duration-300 ease-in-out ${
        isScrolled ? "bg-white border" : "bg-transparent backdrop-blur-md border text-white"
      }`}
    >
      <div className="flex items-center justify-between">
        <img src="/logo.svg" alt="logo" className="w-[120px]" />

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-10 text-[16px]">
          <li><a href="#hero" className="hover:text-[#45A735]">Home</a></li>
          <li><a href="#about" className="hover:text-[#45A735]">About</a></li>
          <li><a href="#services" className="hover:text-[#45A735]">Our Services</a></li>
          <li><a href="#team" className="hover:text-[#45A735]">Team</a></li>
          <li><a href="#contact" className="hover:text-[#45A735]">Contact Us</a></li>
        </ul>

        {/* CTA Button - Hidden on small screens */}
        <button className="hidden md:flex items-center gap-2 bg-[#78EB54] text-black px-[40px] py-[15px] rounded-full hover:bg-[#147323] hover:text-white transition">
          <p>Get Intouch</p>
          <IoMdChatbubbles size={22} />
        </button>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <HiX size={28} /> : <HiMenuAlt3 size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden border border-[] mt-4 text-black bg-white shadow-lg rounded-xl p-10 space-y-10 text-center flex flex-col">
          <a href="#hero" className="hover:text-[#45A735]" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#about" className="hover:text-[#45A735]" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#services" className="hover:text-[#45A735]" onClick={() => setMenuOpen(false)}>Our Services</a>
          <a href="#team" className="hover:text-[#45A735]" onClick={() => setMenuOpen(false)}>Team</a>
          <a href="#contact" className="hover:text-[#45A735]" onClick={() => setMenuOpen(false)}>Contact Us</a>
          <button className="w-full mt-2 px-[40px] py-[15px] flex items-center justify-center gap-2 bg-[#78EB54] text-black rounded-full hover:bg-[#147323] hover:text-white transition">
            <p>Get Intouch</p>
            <IoMdChatbubbles size={22} />
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
