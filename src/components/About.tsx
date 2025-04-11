import { GoArrowUpRight } from "react-icons/go";

const About = () => {
  return (
    <section id="about" className="scroll-mt-20 font-outfit grid grid-cols-1 lg:grid-cols-2 gap-10 px-[5%] py-[100px] bg-cover bg-center bg-no-repeat bg-[url('/aboutBg.svg')]">
      <div>
        <img src="/aboutImg.svg" alt="" />
      </div>
      <div className="flex flex-col justify-start items-start">
        <div className="bg-[#45A735] bg-opacity-10 text-[#147323] border border-[#147323] rounded-full px-6 py-2 mb-5">
            <p className="font-semibold">ABOUT US</p>
        </div>
        <h2 className="font-semibold text-[35px]">
          Championing Intellectual Property Law in{" "}
          <span className="text-[#147323]">East Africa</span>.
        </h2>
        <p className="text-[#666666] font-light text-[18px] mt-5">
          Particularly, Gilgal Law Firm has a vision to be a leading law firm
          specializing in Intellectual property registration, in the formalities
          required for registering and renewing Trade Marks, Patents and Designs
          in the region of East Africa (Rwanda, Uganda, Burundi and Kenya).{" "}
        </p>
        <p className="text-[#666666] font-light text-[18px] mt-5">
        In addition, the law firm provides general commercial legal services in corporate affairs (Business Incorporation), legal drafting, contracts, Land Matters, and Arbitration.
        </p>

        <button className="flex items-center justify-center mt-10 gap-2 bg-[#78EB54] text-black px-[40px] py-[15px] rounded-full hover:bg-[#147323] hover:text-white transition duration-300 ease-in-out">
          <p>Get Assistance</p>
          <GoArrowUpRight size={24} />
        </button>
      </div>
    </section>
  );
};

export default About;
