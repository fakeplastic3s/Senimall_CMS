import { Card } from "flowbite-react";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function add_user() {
  const navigate = useNavigate();
  const handleBackButtonClick = () => {
    navigate("/owner/Users");
  };
  return (
    <>
      <button onClick={handleBackButtonClick} className="bg-[#EEEEEE] flex items-center justify-center gap-3 py-[2px] px-4 mb-5 w-[100px] rounded-lg">
        <img src="/artwork_component/Vector (3).svg" alt="" className="h-[15px]" />
        <span className="font-unica mt-1">Back</span>
      </button>
      <Card className="max-w ">
        <div className="flex justify-between items-center ">
          <h1 className="font-semibold font-unica">Form add user</h1>
        </div>
        <form action="">
          <label htmlFor="title" className="mb-7 block">
            <p className="font-unica text-lg">Full Name</p>
            <input type="text" name="name" id="name" className={`w-full outline-none border-2 rounded-lg bg-transparent px-2 py-1 border-[#393E46] `} />
          </label>
          <label htmlFor="title" className="mb-7 block">
            <p className="font-unica text-lg">Username</p>
            <input type="text" name="username" id="username" className={`w-full outline-none border-2 rounded-lg bg-transparent px-2 py-1 border-[#393E46] `} />
          </label>
          <label htmlFor="title" className="mb-7 block">
            <p className="font-unica text-lg">Password</p>
            <input type="text" name="username" id="username" className={`w-full outline-none border-2 rounded-lg bg-transparent px-2 py-1 border-[#393E46] `} />
          </label>
          <label htmlFor="title" className="mb-7 block">
            <p className="font-unica text-lg">Role</p>
            <input type="text" name="role" id="role" value="admin" className={`w-full outline-none border-2 rounded-lg bg-transparent px-2 py-1 border-[#393E46] `} />
          </label>
          <button type="submit" className="bg-[#183D3D] flex justify-center items-stretch gap-3 w-full py-1 rounded-lg">
            <img src="/artwork_component/Vector (4).svg" alt="" className="w-4" />
            <span className="font-unica text-white pt-1 ">Submit</span>
          </button>
        </form>
      </Card>
    </>
  );
}
