import { GoArrowUpRight } from "react-icons/go";
import { IoLocation } from "react-icons/io5";
import { FaRoad } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { ImLinkedin } from "react-icons/im";
import { FaXTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";





const Footer = () => {
  const quickLinks = [
    { name: "HOME", href: "/" },
    { name: "ABOUT US", href: "/about" },
    { name: "OUR SERVICES", href: "/services" },
    { name: "OUR TEAM", href: "/team" },
  ];

  const locationLinks = [
    {
      icon: <IoLocation size={24} color="#78EB54" />,
      location: "Kigali, Rwanda",
      href: "https://goo.gl/maps/4v1x5Z2g7Qk",
    },
    {
      icon: <FaRoad size={24} color="#78EB54" />,
      name: "Kicukiro, KK 3rd 92",
      href: "https://goo.gl/maps/4v1x5Z2g7Qk",
    },
    {
      icon: <IoMdCall size={24} color="#78EB54" />,
      name: "+250788307162 / +250788548100",
      href: "tel:+250788307162",
    },
    {
      icon: <MdEmail size={24} color="#78EB54" />,
      name: "info@gilgallaw.com",
      href: "",
    },
  ];

  const socialMediaLinks = [
    { icon: <ImLinkedin size={20}/>, href: "https://www.linkedin.com/" },
    { icon: <FaXTwitter size={20}/>, href: "https://x.com/" },
    { icon: <RiInstagramFill size={20}/>, href: "https://www.instagram.com/" },]

  return (
    <footer
    id="contact"
      style={{ backgroundImage: "url('/bg.svg')" }}
      className="font-outfit px-[5%] mx-auto bg-cover bg-center w-full h-full font-light text-[18px] bg-no-repeat bg-fixed"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[5rem] text-white  pt-20">
        <div className="flex flex-col">
          <h1>LOGO</h1>
          <h2>Gilgal Law firm (GLF)</h2>
          <p>
            Professional and dynamic business law firm based in Rwanda with the
            Head office in Kigali. The major areas of practice of our lawyers
            include Intellectual Property law (Trade Mark and patent
            Registration), corporate affairs (Business Incorporation), legal
            drafting, contracts, Land Matters and Arbitration.
          </p>
        </div>

        <div>
          <ul>
            <h1 className="text-[20px] font-semibold mb-5">Quick Links</h1>
            {quickLinks.map((link, index) => (
              <li key={index} className="mb-6">
                <a
                  href={link.href}
                  className="text-gray-200 hover:text-[#78EB54] transition duration-300 ease-in-out flex justify-start items-start text-start gap-2"
                >
                  <GoArrowUpRight size={24} color="#78EB54" />
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <ul>
            <h1 className="text-[20px] font-semibold mb-5">We Are Located</h1>
            {locationLinks.map((link, index) => (
              <li key={index} className="mb-6">
                <a
                  href={link.href}
                  className="text-gray-200 hover:text-[#78EB54] transition duration-300 ease-in-out flex flex-row items-center text-start gap-2"
                >
                  {link.icon}
                  {link.name || link.location}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="my-16 h-1 w-full bg-gradient-to-r from-[#ffffff00] via-[#ffffff] to-[#ffffff00] rounded-full"></div>

      <div className="flex flex-wrap-reverse gap-y-10 justify-between w-full pb-10 text-white">
        <h1>Copyright © 2025 <span className="text-[#78EB54]">GLF</span>.  All rights reserved.</h1>
        <span className="flex flex-row items-center gap-5">
            <h2>Follow us on:</h2>
            <span className="flex flex-row items-center gap-5">
            {socialMediaLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-[#45A735] bg-white p-5 rounded-full hover:text-[#78EB54] transition duration-300 ease-in-out flex justify-start items-start text-start gap-2"
              >
                {link.icon}
              </a>
            ))}
            </span>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
