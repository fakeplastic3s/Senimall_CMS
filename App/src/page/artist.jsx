import React from 'react';
import SidebarArtist from '../component/artist/sidebar';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import AddArtworkArtist from '../component/artist/add_Artwork_Artist';

const Artist = () => {
    const name = useLocation();
    const [adminName, setAdminName] = useState(name.state);

  return (
      <div className='flex w-full min-h-screen gap-2'>
          <SidebarArtist name={adminName} />
          <div className="min-h-screen w-[82%] ms-auto px-5 md:px-10 py-16">
              <h1 className="font-franklin text-4xl text-[#232931] mb-9">Add Your Artwork</h1>
              <AddArtworkArtist />
          </div>
      </div>
  )
}

export default Artist