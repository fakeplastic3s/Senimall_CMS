import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export default function Edit_Artwork() {
  const { id } = useParams();

  const navigate = useNavigate();
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

  const [payload, setPayload] = useState({
    id: uuidv4(),
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setLoadData({
      ...loadData,
      [name]: value,
    });
  };

  console.log(payload);

  async function handleSubmit() {
    try {
      await axios.put(`http://localhost:3001/artwork_list/${id}`, loadData);
    } catch (error) {
      console.log(error);
    }
    navigate("/admin/artwork/artwork-list");
  }

  console.log(loadData);

  return (
    <>
      <button onClick={() => navigate("/admin/artwork/artwork-list")} className="bg-[#EEEEEE] flex items-center justify-center gap-3 py-[2px] px-4 mb-5 w-[100px] rounded-lg">
        <img src="/artwork_component/Vector (3).svg" alt="" className="h-[15px]" />
        <span className="font-unica mt-1">Back</span>
      </button>
      <form action="" className="bg-[#EEEEEE] min-h-screen mt-8 rounded-2xl py-6 px-7">
        <label htmlFor="title" className="mb-7 block">
          <p className="font-unica text-lg">Title</p>
          <input type="text" name="title" id="title" onChange={handleInput} value={loadData.title} className="w-full outline-none border-2 rounded-lg bg-transparent px-2 py-1 border-[#393E46]" />
        </label>
        <label htmlFor="Artist" className="mb-7 block">
          <p className="font-unica text-lg">Artist</p>
          <input type="text" id="Artist" name="Artist" onChange={handleInput} value={loadData.Artist} className="w-full outline-none border-2 rounded-lg bg-transparent px-2 py-1 border-[#393E46]" />
        </label>
        <div className="flex justify-between mb-7">
          <label htmlFor="price" className="block w-[35%]">
            <p className="font-unica text-lg">Price</p>
            <input type="text" id="price" name="price" onChange={handleInput} value={loadData.price} className="w-full outline-none border-2 rounded-lg bg-transparent px-2 py-1 border-[#393E46]" />
          </label>
          <label htmlFor="Category" className="w-[60%] block">
            <p className="font-unica text-lg">Category</p>
            <select name="category" id="Category" onChange={handleInput} value={loadData.category} className="w-full outline-none border-2 rounded-lg bg-transparent px-2 py-1 border-[#393E46]">
              <option value="nature">Nature</option>
              <option value="landscape">Landscape</option>
              <option value="abstract">Abstract</option>
              <option value="portrait">Portrait</option>
              <option value="still life">Still Life</option>
              <option value="street art">Street Art</option>
              <option value="contentporary">Contentporary</option>
              <option value="surrealism">Surrealism</option>
              <option value="cubism">Cubism</option>
              <option value="impressionism">Impressionism</option>
              <option value="minimalism">minimalism</option>
              <option value="rantasy">Fantasi</option>
              <option value="realism">Realism</option>
              <option value="digital art">Digital Art</option>
              <option value="photography">Photography</option>
            </select>
          </label>
        </div>
        <div className="flex justify-between mb-7">
          <label htmlFor="material" className="block w-[35%]">
            <p className="font-unica text-lg">Material</p>
            <input type="text" id="material" name="material" onChange={handleInput} value={loadData.material} className="w-full outline-none border-2 rounded-lg bg-transparent px-2 py-1 border-[#393E46]" />
          </label>
          <label htmlFor="size" className="w-[60%] block">
            <p className="font-unica text-lg">Size</p>
            <input type="text" id="size" name="size" onChange={handleInput} value={loadData.size} className="w-full outline-none border-2 rounded-lg bg-transparent px-2 py-1 border-[#393E46]" />
          </label>
        </div>
        <label htmlFor="deskripsi" className="w-full block mb-7">
          <p className="font-unica text-lg">Description</p>
          <textarea type="text" id="deskripsi" name="description" onChange={handleInput} value={loadData.description} rows="10" className="w-full outline-none border-2 rounded-lg bg-transparent px-2 py-1 border-[#393E46]" />
        </label>
        <label htmlFor="image" className="w-full block mb-7">
          <p className="font-unica text-lg">Image</p>
          <input type="file" id="image" name="image" onChange={handleInput} className="outline-none border-2 rounded-lg bg-transparent px-2 py-1 border-[#393E46]" />
        </label>
        <button onClick={handleSubmit} type="button" className="bg-[#183D3D] flex justify-center items-stretch gap-3 w-full py-1 rounded-lg">
          <img src="/artwork_component/Vector (4).svg" alt="" className="w-4" />
          <span className="font-unica text-white pt-1 ">Edit</span>
        </button>
      </form>
    </>
  );
}
