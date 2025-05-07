import { GoArrowUpRight } from "react-icons/go";
import { useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
// import { FaXTwitter } from "react-icons/fa6";
// import { FaLinkedinIn } from "react-icons/fa6";
const Team = () => {
  const teamMembers = [
    {
      name: "RUZINDANA Robert Clement",
      role: "The Managing Partner of GLF",
      image: "/RUZINDANA Robert Clement.jpg",
      description1:
        "Mr. RUZINDANA Robert Clément is currently the Managing Partner of Gilgal Law Firm. Before establishing GLF, Mr. RUZINDANA Robert Clement has been working with the Rwanda Private Sector Federation for over nine years as the Head of Legal Affairs Department as well as the Director of Liberal Professions Chamber. Mr. RUZINDANA Robert Clément holds a degree in law (LL.B) and Masters in Business Law (Msc). ",
      description2:
        "He is a Member of the Rwanda Bar Association (RBA) and East African Law society. He is a native speaker of Kinyarwanda, has excellent command of French and a working knowledge of English.",
      socialMedia: {
        email: "https://mail.google.com/mail/?view=cm&fs=1&to=crruzindana@yahoo.fr",
        twitter: "https://twitter.com/ruzindana_robert",
        linkedin: "https://www.linkedin.com/in/ruzindana-robert-clement-3b0a4a1b2/",
      },
    },
    {
      name: "Mrs. MUKESHIMANA Rose",
      role: "Associate",
      image: "/Mrs. MUKESHIMANA Rose.jpg",
      description1:
        "Mrs. MUKESHIMANA Rose joined GLF in 2014 with six years’ experience in Intellectual Property Registration. She is responsible for the IP Department. She has been involved in legal activities for various legal commissions and has participated in many IP Trainings such as Making Better Use of IP for Business Competitiveness and Development in Africa: Protection and Promotion of Patents, Utility Models, Industrial Designs and Trademarks in Africa and Plant Variety Protection and Implementation of the Nagoya Protocol.",
      description2:
        "Mrs. MUKESHIMANA Rose holds a degree in law (LL.B), and she is a native speaker of Kinyarwanda, has excellent command of French, and a working knowledge of English.",
      socialMedia: {
        email: "https://mail.google.com/mail/?view=cm&fs=1&to=rororw@yahoo.fr",
        twitter: "https://twitter.com/mukeshimana_rose",
        linkedin: "https://www.linkedin.com/in/mukeshimana-rose-3a4a1b2b/",
      },
    },
  ];

  const [selectedMember, setSelectedMember] = useState<{
    name: string;
    role: string;
    image: string;
    description1: string;
    description2: string;
    socialMedia: {
      email: string;
      twitter: string;
      linkedin: string;
    };
  } | null>(null);

  const handleModalClose = () => setSelectedMember(null);

  return (
    <div
    id="team"
      className="scroll-mt-20 font-outfit flex flex-col justify-center items-center lg:min-h-screen bg-cover bg-center bg-no-repeat bg-fixed px-[5%] lg:py-0 py-[15%] mx-auto"
      style={{ backgroundImage: "url('/bg.svg')" }}
    >
      <div className="bg-[#78EB54] bg-opacity-10 text-[#78EB54] border border-[#78EB54] rounded-full px-6 py-2 mb-5">
        <p className="font-semibold">WHY US</p>
      </div>
      <h2 className="font-semibold text-[35px] text-white">
        Meet Our <span className="text-[#78EB54]">Team</span> !
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-[#147323] w-full md:w-[350px] h-full bg-opacity-80 p-[20px] rounded-xl"
          >
            <div className="group relative flex flex-col items-start justify-center h-full text-white overflow-hidden rounded-xl">
              <div className="bg-gradient-to-t from-black via-black/50 to-transparent absolute inset-0 rounded-xl z-20"></div>
              <img
                src={member.image}
                alt={member.name}
                className="group-hover:scale-105 transition duration-300 ease-in-out rounded-xl object-cover w-full h-[350px]"
              />
              <div className="absolute text-white z-20 bottom-10 left-10">
                <h1 className="text-[18px]">{member.name}</h1>
                <p className="text-[#45A735] font-light">{member.role}</p>

                <button
                  onClick={() => setSelectedMember(member)}
                  className="flex items-center justify-center mt-5 gap-2 bg-[#78EB54] text-black px-[40px] py-[10px] rounded-full hover:bg-[#147323] hover:text-white transition duration-300 ease-in-out"
                >
                  <p>Read More</p>
                  <GoArrowUpRight size={24} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedMember && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
          <div
            style={{ backgroundImage: "url('/bg.svg')" }}
            className="bg-cover bg-center lg:max-w-[60%] max-h-full overflow-auto w-full rounded-xl p-12 relative"
          >
            <div className="w-full text-white">
              <h2 className="text-[25px] font-medium mb-2">
                {selectedMember.name}
              </h2>
              <p className="text-[#78EB54] font-light mb-4 text-[18px]">
                {selectedMember.role}
              </p>
              <p className="text-gray-200 font-light text-[18px]">
                {selectedMember.description1}
              </p>
              <p className="text-gray-200 font-light text-[18px] mt-3">
                {selectedMember.description2}
              </p>
            </div>

            <div className="flex justify-start items-center mt-5 gap-10s">
              <div className="flex gap-10 my-10">
                <a
                  href={selectedMember.socialMedia.email}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white border border-white rounded-full p-5 hover:bg-[#78EB54] hover:bg-opacity-20 transition duration-300"
                >
                  <AiOutlineMail size={25} />
                </a>
                {/* <a
                  href={selectedMember.socialMedia.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white border border-white rounded-full p-5 hover:bg-[#78EB54] hover:bg-opacity-20 transition duration-300"
                >
                  <FaXTwitter size={25} />
                </a>
                <a
                  href={selectedMember.socialMedia.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white border border-white rounded-full p-5 hover:bg-[#78EB54] hover:bg-opacity-20 transition duration-300"
                >
                  <FaLinkedinIn size={25} />
                </a> */}
              </div>
            </div>

            <button
              onClick={handleModalClose}
              className="flex items-center justify-center mt-5 gap-2 bg-[#78EB54] text-black px-[40px] py-[10px] rounded-full hover:bg-[#147323] hover:text-white transition duration-300 ease-in-out"
            >
              <p>Go Back</p>
              <GoArrowUpRight size={24} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Team;
