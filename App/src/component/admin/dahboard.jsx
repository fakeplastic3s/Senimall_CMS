import axios from "axios";
import { useEffect, useState } from "react";
import Footer from "../footer";

export default function Dashboard() {
  const [art, setArt] = useState([]);
  const [submissions, setSubmissions] = useState([]);
  const [artist, setArtist] = useState(0);

  const [artist, setArtist] = useState(0);



  async function getArtworkList() {
    try {
      const data = await axios.get("http://localhost:3000/artwork_list");
      setArt(data.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function getSubmissionList() {
    try {
      const submissionData = await axios.get("http://localhost:3000/submission_list");
      setSubmissions(submissionData.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function getArtistLength() {
    try {
      const artistData = await axios.get("http://localhost:3000/Artwork_list");


      const sum = Object.keys(Object.groupBy(artistData.data, (e) => e.Artist)).length;
      setArtist(sum);
    } catch (error) {
      console.log(error);
    }
  }


  useEffect(() => {
    getArtworkList();
    getSubmissionList();
    getArtistLength();
  }, []);

  const artwork = art.map((art) => {
    return art;
  });

  const submission = submissions.map((art) => {
    return submissions;
  });

  return (
    <>
      <h1 className="font-franklin text-4xl  text-[#232931] mb-9">Dashboard</h1>

      <div className="flex flex-wrap  justify-around items-center gap-5">
        <div className="card  scale-75 md:scale-90 lg:scale-100 transition-all transition-300">
          <div className="flex justify-between items-center bg-[#EEEEEE] w-[300px] h-[150px]  rounded-[30px] ">
            <div className="flex flex-col justify-center mx-auto items-center">
              <span className="text-[#232931] text-4xl font-extrabold">{artist}</span>

              <span className="text-[#232931] text-[18px] font-base">Artist</span>

            </div>
            <div className=" flex items-center justify-center bg-[#183D3D] h-[150px] w-[150px] rounded-[30px] ">
              <img src="../public/content_component/Artis.svg" alt="icon artis" className="h-[50px] ml-2" />
            </div>
          </div>
        </div>
        <div className="card scale-75 md:scale-90 lg:scale-100 transition-all transition-300">
          <div className="flex justify-between items-center bg-[#EEEEEE] w-[300px] h-[150px] rounded-[30px]">
            <div className="flex flex-col justify-center mx-auto items-center">
              <span className="text-[#232931] text-4xl font-extrabold">{artwork.length}</span>
              <span className="text-[#232931] text-[18px] font-base">Artworks</span>
            </div>
            <div className=" flex items-center justify-center bg-[#5C8374] h-[150px] w-[150px] rounded-[30px] ">
              <img src="../public/content_component/Artworks.svg" alt="icon artis" className="h-[50px] ml-2" />
            </div>
          </div>
        </div>
        <div className="card scale-75 md:scale-90 lg:scale-100 transition-all transition-300">
          <div className="flex justify-between items-center bg-[#EEEEEE] w-[300px] h-[150px] rounded-[30px]">
            <div className="flex flex-col justify-center mx-auto items-center">
              <span className="text-[#232931] text-4xl font-extrabold">{submissions.length}</span>
              <span className="text-[#232931] text-[18px] font-base">Submissions</span>
            </div>
            <div className=" flex items-center justify-center bg-[#93B1A6] h-[150px] w-[150px] rounded-[30px] ">
              <img src="../public/content_component/Submissions.svg" alt="icon artis" className="h-[50px] ml-2" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
