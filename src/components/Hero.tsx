import { GoArrowUpRight } from "react-icons/go";

const Hero = () => {
  return (
    <div
      className="font-outfit flex flex-col lg:min-h-screen pb-[100px] lg:pb-0 bg-cover bg-center px-[5%] mx-auto"
      style={{ backgroundImage: "url('/heroBg.svg')" }}
    >
      <div className="flex flex-col items-center justify-center text-center h-full py-[200px]">
        <h1 className="lg:w-[70%] lg:text-[80px] md:text-[40px] text-[40px] text-white font-semibold">
          Trusted Legal Services Across EAC
        </h1>
        <p className="text-white font-light text-[20px] md:w-[65%]">
          A Kigali-based law firm specializing in Intellectual Property,
          Business Law, and Arbitration across East Africa and beyond.
        </p>

        <div className="flex flex-wrap items-center justify-center mt-[50px] gap-5">
          <button className="flex items-center justify-center gap-2 bg-[#78EB54] text-black px-[40px] py-[15px] rounded-full hover:bg-[#147323] hover:text-white transition duration-300 ease-in-out">
            <p>Get Legal Assistance</p>
            <GoArrowUpRight size={24} />
          </button>
          <button className="bg-white text-black px-[40px] py-[15px] rounded-full hover:bg-[#147323] hover:text-white  transition duration-300 ease-in-out">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
