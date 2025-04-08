import { IoMdChatbubbles } from "react-icons/io";

const Navbar = () => {
  return (
    <nav className="font-outfit fixed top-5 px-[40px] py-[15px] rounded-full w-full  bg-white text-black shadow-md flex items-center justify-between">
      <h1>LOGO</h1>
      <ul className="flex items-center gap-12 text-[18px]">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Our Services</a></li>
        <li><a href="#">Team</a></li>
        <li><a href="#">Contact Us</a></li>
      </ul>
      <button className="flex items-center justify-center gap-2 bg-[#78EB54] text-black px-[40px] py-[15px] rounded-full hover:bg-[#147323] hover:text-white transition duration-300 ease-in-out">
        <p>Get Intouch</p>
        <IoMdChatbubbles size={24} />
      </button>
    </nav>
  )
}

export default Navbar
