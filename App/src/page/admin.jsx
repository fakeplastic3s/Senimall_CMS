import Add_Artwork from "../component/add_artworks";
import Content from "../component/content";
import ArtworkList from "../component/artwork_list";
import Sidebar from "../component/sidebar";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Admin() {

  const name = useLocation();
  
  const [menu, setMenu] = useState('Dashboard');
  const [adminName, setAdminName] = useState('Dashboard');
  const navigate = useNavigate();
  const token = localStorage.getItem("token"); // Ubah sesuai dengan cara penyimpanan token Anda
  function receiveMenuData(data){
    setMenu(data)
  }

  useEffect(() => {
    if (token === "owner") {
      navigate("/owner");
    } else if (token === "admin") {
      navigate("/admin", { state: name.state });
    } else {
      navigate("/");
    }
  }, [token]);

  useEffect(()=>{
    setAdminName(name.state)
  },[])


  useEffect(()=>{
    if(menu === 'Dashboard'){
      navigate('dashboard')
    }
    else if(menu === 'Artwork'){
      navigate('artwork')
    }
    else{
      navigate('submission')
    }
  },[menu])


  return (

    <div className="w-full min-h-screen flex gap-2">
      <Sidebar name={adminName} sendDataMenu={receiveMenuData} />
      <Outlet/>
    </div>

  );
}
