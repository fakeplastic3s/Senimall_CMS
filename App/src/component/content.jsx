export default function Content() {
  return (
    <div className="min-h-screen w-[82%] px-5 md:px-10 py-16">
      <h1 className="text-2xl font-extrabold text-[#232931] mb-9">Dashboard</h1>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-rows-3 gap-5 justify-items-center">
        <div className="card  scale-75 md:scale-90 lg:scale-100 transition-all transition-300">
          <div className="flex justify-between items-center bg-[#EEEEEE] w-[300px] h-[150px]  rounded-[30px] ">
            <div className="flex flex-col justify-center mx-auto items-center">
              <span className="text-[#232931] text-4xl font-extrabold">100</span>
              <span className="text-[#232931] text-[18px] font-base">Artis</span>
            </div>
            <div className=" flex items-center justify-center bg-[#183D3D] h-[150px] w-[150px] rounded-[30px] ">
              <img src="../public/content_component/Artis.svg" alt="icon artis" className="h-[50px] ml-2" />
            </div>
          </div>
        </div>
        <div className="card scale-75 md:scale-90 lg:scale-100 transition-all transition-300">
          <div className="flex justify-between items-center bg-[#EEEEEE] w-[300px] h-[150px] rounded-[30px]">
            <div className="flex flex-col justify-center mx-auto items-center">
              <span className="text-[#232931] text-4xl font-extrabold">100</span>
              <span className="text-[#232931] text-[18px] font-base">Artworks</span>
            </div>
            <div className=" flex items-center justify-center bg-[#5C8374] h-[150px] w-[150px] rounded-[30px] ">
              <img src="../public/content_component/Artworks.svg" alt="icon artis" className="h-[50px] ml-2" />
            </div>
          </div>
        </div>
        <div className="card scale-75 md:scale-90 lg:scale-100 transition-all transition-300">
          <div className="flex justify-between items-center bg-[#EEEEEE] w-[300px] h-[150px] rounded-[30px]">
            <div className="flex flex-col justify-center mx-auto items-center">
              <span className="text-[#232931] text-4xl font-extrabold">100</span>
              <span className="text-[#232931] text-[18px] font-base">Submissions</span>
            </div>
            <div className=" flex items-center justify-center bg-[#93B1A6] h-[150px] w-[150px] rounded-[30px] ">
              <img src="../public/content_component/Submissions.svg" alt="icon artis" className="h-[50px] ml-2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
