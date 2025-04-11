const Areas = () => {
  const areas = [
    { title: "Intellectual Property Rights" },
    { title: "Contract Law" },
    { title: "Arbitration" },
    { title: "Company law" },
    { title: "Land Law" },
  ];
  return (
    <div className="font-outfit flex flex-col justify-center items-center w-full h-full py-[20rem] px-5">
      <div
        style={{ backgroundImage: "url('/pattern.svg')" }}
        className="bg-cover bg-center shadow-lg p-20 rounded-xl flex flex-col justify-center items-center"
      >
        <h1 className="text-[30px] font-semibold mb-10">
          Areas of <span className="text-[#45A735]">Practice</span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
          {areas.map((area, index) => (
            <div key={index} className="">
              <h1 className="text-[18px] text-black flex items-center gap-4 font-light">
                <img src="tick.svg" alt="" />
                {area.title}
              </h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Areas;
