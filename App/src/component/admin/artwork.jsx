import { useEffect, useState } from "react";

import { useNavigate, Outlet } from "react-router-dom";

export default function Artwork(props) {
  const navigate = useNavigate();
  const [add, setAdd] = useState("list");

  useEffect(() => {
    // receiveAdd();
    if (add === "list") {
      navigate("artwork-list");
    } else {
      navigate("artwork-add");
    }
  }, [add]);

  return (
    <div>
      <h1 className="font-franklin text-4xl text-[#232931] mb-9">Artwork</h1>
      <Outlet />
    </div>
  );
}
