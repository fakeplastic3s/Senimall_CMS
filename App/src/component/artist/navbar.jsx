import React from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useNavigate } from "react-router-dom";
import { Avatar, Dropdown, Navbar } from "flowbite-react";

const SidebarArtist = ({ name }) => {
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
        localStorage.removeItem("name");
      }
    });
  };

  return (
    <>
      <Navbar fluid rounded>
        <Navbar.Brand href="https://flowbite-react.com">
          <img src="\Senimall_navbarIcon.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Dropdown arrowIcon={false} inline label={<Avatar alt="User settings" img="\sidebar_component\People.png" rounded />}>
            <Dropdown.Header>
              <span className="block text-sm">{name}</span>
            </Dropdown.Header>
            <Dropdown.Item>
              <button onClick={handleLogout} className=" flex py-3 px-3 rounded-xl justify-center items-center gap-2 cursor-pointer bg-[#D83F31] hover:bg-[#ba3529] text-[#EEEEEE]">
                <img src="/sidebar_component/logout.svg" alt="" className="h-[15px] w-[15px]" />
                <span className="font-unica transition-all transition-300">Logout</span>
              </button>
            </Dropdown.Item>
          </Dropdown>
        </div>
      </Navbar>
    </>
  );
};

export default SidebarArtist;
