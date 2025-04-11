import EmblaCarousel from "../emblaJs/EmblaCarousel";
import "../emblaCss/embla.css";
import "../emblaCss/embla.css";
import { EmblaOptionsType } from "embla-carousel";
import { FaTrademark } from "react-icons/fa6";
import { LiaIndustrySolid } from "react-icons/lia";
import { FaRegCopyright } from "react-icons/fa6";

const OPTIONS: EmblaOptionsType = { slidesToScroll: "auto" };
const SERVICES = [
  {
    id: 1,
    icon: <FaTrademark size={24} />,
    title: "Trademark application in Rwanda",
    services: [
      "Application for registration of trademarks and obtaining certificate",
      "Addition classes",
      "Searches for Trademark in Rwanda",
    ],
  },
  {
    id: 1,
    icon: <LiaIndustrySolid size={24} />,
    title: "Industry Design",
    services: [
      "Filing of industrial design",
      "Payment of Renewal fees ",
      "Late payment fees",
    ],
  },
  {
    id: 1,
    icon: <FaTrademark size={24} />,
    title: "Patents",
    services: [
      "Filing patent application",
      "Payment of Renewal fees",
      "Priority claim",
    ],
  },
  {
    id: 1,
    icon: <FaRegCopyright size={24} />,
    title: "Copyrights",
    services: ["Protection of copyrights"],
  },
];

const Carousel = () => {
  return (
    <div className="w-full">
      <EmblaCarousel
        slides={SERVICES.map((service) => (
          <div
            key={service.id}
            className="hidden lg:flex flex-col items-start justify-start px-5 py-10 bg-white rounded-lg shadow-lg m-2 my-10 mx-5 w-full h-[300px] md:w-[300px] lg:w-[400px]"
          >
            <div className="flex items-center justify-center mb-2 bg-[#78EB54] rounded-full p-4">
              {service.icon}
            </div>
            <h3 className="text-[20px] font-medium mt-5">{service.title}</h3>
            <ul className="flex flex-col text-left">
              {service.services.map((s, index) => (
                <li
                  key={index}
                  className="flex items-center gap-2 my-3 text-[#666666] font-light"
                >
                  <img src="/tick.svg" alt="" className="w-[30px]" />
                  {s}
                </li>
              ))}
            </ul>
          </div>
        ))}
        options={OPTIONS}
      />

      <div className="lg:hidden grid grid-cols-1 md:grid-cols-2 justify-items-start gap-10">
        {SERVICES.map((service) => (
          <div
            key={service.id}
            className="border flex flex-col justify-start items-start px-5 py-10 bg-white rounded-lg shadow-lg w-full hover:scale-105 transition-transform duration-300 ease-in-out"
          >
            <div className="flex items-center justify-center mb-2 bg-[#78EB54] rounded-full p-4">
              {service.icon}
            </div>
            <h3 className="text-[20px] font-medium mt-5">{service.title}</h3>
            <ul className="flex flex-col text-left">
              {service.services.map((s, index) => (
                <li
                  key={index}
                  className="flex items-center gap-2 my-3 text-[#666666] font-light"
                >
                  <img src="/tick.svg" alt="" className="w-[30px]" />
                  {s}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
