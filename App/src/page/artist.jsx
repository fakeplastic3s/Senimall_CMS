import React from "react";
import NavbarArtist from "../component/artist/navbar";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import AddArtworkArtist from "../component/artist/add_Artwork_Artist";
import Footer from "../component/footer";

const Artist = () => {
  const name = useLocation();
  const [adminName, setAdminName] = useState(name.state);

  return (
    <div className="w-full max-w-[900px] mx-auto min-h-screen gap-2">
      <div className="py-5">
        <NavbarArtist name={adminName} />
      </div>
      <AddArtworkArtist />
      <Footer />
    </div>
  );
};

export default Artist;
