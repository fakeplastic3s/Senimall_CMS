import { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "flowbite-react";

import { useParams, useNavigate } from "react-router-dom";

export default function DetailArtwork() {
  const navigate = useNavigate();
  const [art, setArt] = useState();
  const { id } = useParams();
  const [loadData, setLoadData] = useState({
    id: id,
    title: "",
    Artist: "",
    price: "",
    category: "",
    material: "",
    size: "",
    description: "",
    image: null,
  });

  async function load() {
    try {
      const data = await axios.get(`http://localhost:3000/artwork_list?id=${id}`);
      setLoadData({
        ...loadData,
        title: data.data[0].title,
        Artist: data.data[0].Artist,
        price: data.data[0].price,
        category: data.data[0].category,
        material: data.data[0].material,
        size: data.data[0].size,
        description: data.data[0].description,
        image: data.data[0].image,
      });
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    load();
  }, []);

  const handleBackButtonClick = () => {
    navigate("/admin/artwork/artwork-list");
  };

  return (
    <>
      <button className="bg-[#EEEEEE] flex items-center justify-center gap-3 py-[2px] px-4 mb-5 w-[100px] rounded-lg" onClick={handleBackButtonClick}>
        <img src="/artwork_component/Vector (3).svg" alt="" className="h-[15px]" />
        <span className="font-unica mt-1">Back</span>
      </button>
      <Card className="max-w ">
        <div className="flex justify-between items-center ">
          <h1 className="font-semibold font-unica">Detail Artwork</h1>
        </div>

        <div className="flex gap-3 mb-5 items-center">
          <img src="/foto_lukisan/Hendrik_Merkus_Baron_de_Kock_by_Cornelis_Kruseman.jpg" alt="abc" className="w-1/2 max-h-[300px] object-contain" />
          <div className="font-unica">
            <p className="font-bold">Title</p>
            <p className="mb-2">{loadData.title}</p>
            <p className="font-bold">Artist</p>
            <p className="mb-2">{loadData.Artist}</p>
            <p className="font-bold">Price</p>
            <p className="mb-2">Rp {loadData.price}</p>
            <p className="font-bold">Category</p>
            <p className="mb-2">{loadData.category}</p>
            <p className="font-bold">Material</p>
            <p className="mb-2">{loadData.material}</p>
            <p className="font-bold">Size</p>
            <p className="mb-2">{loadData.size}</p>
          </div>
        </div>
        <div className="font-unica">
                  <p className="font-bold">Description</p>
                  <p className="text-gray-700">{loadData.description}</p>
                </div>
      </Card>
    </>
  );
}
