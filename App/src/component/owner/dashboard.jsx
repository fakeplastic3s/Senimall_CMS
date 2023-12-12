import axios from "axios";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [users, setUsers] = useState([]);

  async function getUsers() {
    try {
      const data = await axios.get("http://localhost:3000/admin");
      setUsers(data.data);
      // console.log(data.data);
    } catch (error) {
      console.log(error);
    }
  }

  const usersCount = users.map((users) => {
    return users;
  });

  useEffect(() => {
    getUsers();
  }, []);
  return (
    <>
      <h1 className="font-franklin text-4xl  text-[#232931] mb-9">Dashboard</h1>

      <div className="flex flex-wrap  justify-between items-center gap-5">
        <div className="card  scale-75 md:scale-90 lg:scale-100 transition-all transition-300">
          <div className="flex justify-between items-center bg-[#EEEEEE] w-[300px] h-[150px]  rounded-[30px] ">
            <div className="flex flex-col justify-center mx-auto items-center">
              <span className="text-[#232931] text-4xl font-extrabold">{usersCount.length}</span>
              <span className="text-[#232931] text-[18px] font-base">Users</span>
            </div>
            <div className=" flex items-center justify-center bg-[#183D3D] h-[150px] w-[150px] rounded-[30px] ">
              <img src="../public/owner_component/Users.svg" alt="icon artis" className="h-[50px] ml-2" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
