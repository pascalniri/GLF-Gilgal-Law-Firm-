import Carousel from "./Carousel";

const WhyUs = () => {
  return (
    <div
      id="services"
      className="font-outfit flex flex-col items-center justify-center w-full h-full px-[5%] mx-auto my-[100px]"
    >
      <div className="bg-[#45A735] bg-opacity-10 text-[#147323] border border-[#147323] rounded-full px-6 py-2 mb-5">
        <p className="font-semibold">WHY US</p>
      </div>
      <h2 className="font-semibold text-[35px]">
        Why <span className="text-[#147323]">Choose</span> Us?
      </h2>
      <p className="text-[#666666] font-light text-[18px] mt-2 text-center">
        Services we provide in Intellectual Property Registration
      </p>
      <div className="w-full h-full flex items-center justify-center mt-10">
        <Carousel />
      </div>
    </div>
  );
};

export default WhyUs;
