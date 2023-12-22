import React from 'react';
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useNavigate } from "react-router-dom";

const SidebarArtist = ({name}) => {

    const MySwal = withReactContent(Swal);
    const navigate = useNavigate();

    const handleLogout = () => {
        MySwal.fire({
          title: "Peringatan!",
          text: "Apakah Anda yakin ingin keluar?",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          cancelButtonText: "Batal",
          confirmButtonText: "Ya, Keluar!",
        }).then((result) => {
          if (result.isConfirmed) {
            navigate("/");
            localStorage.removeItem("token");
          }
        });
      };

  return (
      <div className="min-h-screen bg-[#EEEEEE] max-w-[18%] flex flex-col justify-between">
          <div>
              <img src="../public/sidebar_component/people.png" className="mx-auto mt-10 w-10 lg:w-20 transition-all transition-300" alt="" />
              <p className="font-unica  text-xs lg:text-base text-center mt-3 ">{name}</p>
              <img src="../public/sidebar_component/Senimall_logo.png" alt="" className="mx-auto mt-8 w-[50%]" />
          </div>
          <div className='mb-10'>
              <div className="mt-10 w-11/12 float-right flex flex-col justify-between gap-8">
                  <button onClick={handleLogout} className=" flex py-3 px-5 rounded-l-xl justify-center gap-4 cursor-pointer lg:justify-start items-stretch mu-auto mb-4 bg-[#D83F31] hover:bg-[#ba3529] text-[#EEEEEE]">
                      <img src="/sidebar_component/logout.svg" alt="" className="h-[20px] w-[20px]" />
                      <span className="font-unica hidden lg:block transition-all transition-300">Logout</span>
                  </button>
              </div>
          </div>
      </div>
  )
}

export default SidebarArtist