import { useState } from "react";

export default function Sidebar() {
  const [menu, setMenu] = useState([
    {
      id: 1,
      name: "Dashboard",
      image1: "/sidebar_component/home.svg",
      image2: "/sidebar_component/home2.svg",
      status: "clicked",
    },
    {
      id: 2,
      name: "Artwork",
      image1: "/sidebar_component/artwork.svg",
      image2: "/sidebar_component/artwork2.svg",
      status: "unclicked",
    },
    {
      id: 3,
      name: "Submissions",
      image1: "/sidebar_component/mail.svg",
      image2: "/sidebar_component/mail2.svg",
      status: "unclicked",
    },
  ]);

  const handleSetMenu = (id) => {
    if (menu.find((items) => items.id === id)) {
      setMenu(menu.map((item) => (item.id === id ? { ...item, status: "clicked" } : { ...item, status: "unclicked" })));
    }
  };

  return (
    <div className="min-h-screen bg-[#EEEEEE] w-[18%]">
      <img src="../public/sidebar_component/people.png" className="mx-auto mt-10 w-10 lg:w-24" alt="" />
      <p className="font-unica text-sm text-center mt-3 font-semibold">Admin 1</p>
      <img src="../public/sidebar_component/Senimall_logo.png" alt="" className="mx-auto mt-8 w-[60%]" />

      {/* menu */}
      <ul className="mt-10 w-11/12 float-right flex flex-col justify-between gap-12">
        {menu.map((items) => {
          if (items.status === "unclicked") {
            return (
              <li key={items.id} onClick={() => handleSetMenu(items.id)} className="flex py-3 px-5 rounded-l-xl justify-start items-stretch gap-4 cursor-pointer">
                <img src={items.image1} alt="" className="h-[20px] w-[20px]" />
                <span className="font-unica hidden lg:block">{items.name}</span>
              </li>
            );
          } else {
            return (
              <li key={items.id} onClick={() => handleSetMenu(items.id)} className="flex justify-start items-stretch gap-4 bg-[#183D3D] cursor-pointer py-3 px-5 rounded-l-xl">
                <img src={items.image2} alt="" className="h-[20px] w-[20px]" />
                <span className="font-unica text-white hidden lg:block">{items.name}</span>
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
}
