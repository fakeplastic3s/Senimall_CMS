import { useEffect, useState } from "react";
import Add_Artwork from "./add_artworks";
import ArtworkList from "./artwork_list";
import DetailArtwork from "./detail_artwork";
import { useNavigate, Outlet } from "react-router-dom";
import Footer from "../footer";

export default function Artwork(props) {
  const navigate = useNavigate();
  const [add, setAdd] = useState("list");
  const [isAdd, setIsAdd] = useState(true);

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
      {/* <ArtworkList /> */}
      {/* <Add_Artwork /> */}
      {/* <DetailArtwork /> */}
    </div>
  );
}
